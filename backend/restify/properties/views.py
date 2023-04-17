from datetime import datetime, timedelta
from django.core.exceptions import PermissionDenied
from django.shortcuts import render, get_object_or_404
from rest_framework import generics, status
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import PropertySerializer, PropertyImageSerializer, DailyPriceSerializer
from .models.property import PropertyModel, PropertyImage, DailyPrice
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend, FilterSet, DateFilter, NumberFilter, CharFilter
from rest_framework.pagination import PageNumberPagination


# Create your views here.

class CreatePropertyView(generics.CreateAPIView):
    serializer_class = PropertySerializer
    permission_classes = [IsAuthenticated, ]

    def perform_create(self, serializer):
        return super().perform_create(serializer)


class UpdatePropertyView(generics.RetrieveAPIView, generics.UpdateAPIView):
    serializer_class = PropertySerializer
    permission_classes = [IsAuthenticated, ]

    def get_object(self):
        return get_object_or_404(PropertyModel, pk=self.kwargs['pk'])


class DeletePropertyView(generics.DestroyAPIView):
    serializer_class = PropertySerializer
    permission_classes = [IsAuthenticated, ]

    def get_object(self):
        return get_object_or_404(PropertyModel, pk=self.kwargs['pk'])


class PropertyDetailView(generics.RetrieveAPIView):
    queryset = PropertyModel.objects.all()
    serializer_class = PropertySerializer

    def get(self, request, *args, **kwargs):
        try:
            property_obj = self.get_object()
            serializer = self.get_serializer(property_obj)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except PropertyModel.DoesNotExist:
            return Response({'error': 'Property not found'}, status=status.HTTP_404_NOT_FOUND)


class PropertyFilterSet(FilterSet):
    country = CharFilter(field_name='country', lookup_expr='exact')
    num_guests = NumberFilter(field_name='num_guests', lookup_expr='exact')
    start_date = DateFilter(field_name='start_date', lookup_expr='gte')
    end_date = DateFilter(field_name='end_date', lookup_expr='lte')
    min_price = NumberFilter(field_name='price', lookup_expr='gte')
    max_price = NumberFilter(field_name='price', lookup_expr='lte')
    owner_pk = NumberFilter(field_name='owner__pk')

    class Meta:
        models = PropertyModel
        fields = ['country', 'start_date', 'end_date', 'min_price', 'max_price', 'num_guests', 'owner_pk']


class PropertyPagination(PageNumberPagination):
    page_size = 8
    page_size_query_param = 'page_size'
    max_page_size = 10


class PropertyListView(generics.ListAPIView):
    queryset = PropertyModel.objects.all()
    serializer_class = PropertySerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['country', 'start_date', 'end_date', 'price', 'num_guests']
    filterset_class = PropertyFilterSet
    ordering_fields = ['price', 'start_date']
    pagination_class = PropertyPagination


class PropertyImageView(APIView):
    parser_class = (FileUploadParser,)
    permission_classes = [IsAuthenticated]

    def put(self, request, property_id):
        property_obj = get_object_or_404(PropertyModel, pk=property_id)
        if property_obj.owner != self.request.user:
            raise PermissionDenied("You do not have permission to perform this action.")
        print(property_obj.name)
        request.data['property'] = property_obj.pk
        serializer = PropertyImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)


class PropertyImageListView(APIView):
    def get(self, request, property_id):
        property_obj = get_object_or_404(PropertyModel, pk=property_id)
        property_images = PropertyImage.objects.filter(property=property_obj)
        serializer = PropertyImageSerializer(property_images, many=True)
        return Response(serializer.data)


class DailyPriceView(APIView):

    def post(self, request, property_id, start_date_str, end_date_str):
        permission_classes = [IsAuthenticated]
        try:
            # Retrieve the property and verify that the current user is the owner
            to_rent_property = PropertyModel.objects.get(pk=property_id)
            if request.user != to_rent_property.owner:
                return Response({'error': 'You are not the owner of this property.'},
                                status=status.HTTP_401_UNAUTHORIZED)

            # Parse the start and end dates from the URL parameters
            start_date = datetime.strptime(start_date_str, '%Y-%m-%d').date()
            end_date = datetime.strptime(end_date_str, '%Y-%m-%d').date()

            # Parse the price from the request body
            price = request.data.get('price')
            if price is None:
                return Response({'error': 'Price is required.'}, status=status.HTTP_400_BAD_REQUEST)

            # Create the daily price objects and save them to the database
            daily_prices = []
            delta = timedelta(days=1)
            current_date = start_date
            while current_date <= end_date:
                daily_price = DailyPrice(property=to_rent_property, date=current_date, price=price)
                daily_prices.append(daily_price)
                current_date += delta
            DailyPrice.objects.bulk_create(daily_prices)

            # Serialize the daily price objects and return the response
            serializer = DailyPriceSerializer(daily_prices, many=True)
            return Response(serializer.data)
        except (PropertyModel.DoesNotExist, ValueError) as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, property_id, date_str):
        try:
            to_rent_property = PropertyModel.objects.get(pk=property_id)
            date = datetime.strptime(date_str, '%Y-%m-%d').date()
            daily_price = DailyPrice.objects.get(property=to_rent_property, date=date)
            serializer = DailyPriceSerializer(daily_price, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        except (PropertyModel.DoesNotExist, ValueError, DailyPrice.DoesNotExist) as e:
            return Response({'error': str(e)}, status=400)

    def get(self, request, property_id, start_date_str, end_date_str):
        try:
            to_rent_property = PropertyModel.objects.get(pk=property_id)
            start_date = datetime.strptime(start_date_str, '%Y-%m-%d').date()
            end_date = datetime.strptime(end_date_str, '%Y-%m-%d').date() - timedelta(days=1)
            date_range = [start_date + timedelta(days=x) for x in range((end_date - start_date).days + 1)]
            print(date_range)
            total_price = 0
            for date in date_range:
                try:
                    daily_price = DailyPrice.objects.get(property=to_rent_property, date=date)
                    total_price += daily_price.price
                except DailyPrice.DoesNotExist:
                    total_price += to_rent_property.price

            return Response({'price': total_price})
        except (PropertyModel.DoesNotExist, ValueError) as e:
            return Response({'error': str(e)}, status=400)
