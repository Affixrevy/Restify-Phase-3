from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import PropertySerializer, PropertyImageSerializer
from .models.property import PropertyModel, PropertyImage
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend, FilterSet, DateFilter, NumberFilter
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


class PropertyFilterSet(FilterSet):
    start_date = DateFilter(field_name='start_date', lookup_expr='gte')
    end_date = DateFilter(field_name='end_date', lookup_expr='lte')
    min_price = NumberFilter(field_name='price', lookup_expr='gte')
    max_price = NumberFilter(field_name='price', lookup_expr='lte')

    class Meta:
        models = PropertyModel
        fields = ['country', 'start_date', 'end_date', 'min_price', 'max_price', 'num_guests']


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

    def put(self, request, property_id):
        property_obj = get_object_or_404(PropertyModel, pk=property_id)
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
