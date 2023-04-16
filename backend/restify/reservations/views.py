from django.shortcuts import render
from rest_framework import generics, permissions, serializers
from rest_framework import status
from rest_framework.generics import get_object_or_404
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from .models import Reservation
from properties.models.property import PropertyModel
from .serializers import ReservationSerializer, ReservationSerializerCreate
from django.db.models import Q


# Create your views here.


class ReservationCreateView(generics.CreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializerCreate
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Extract the property, start_date, and end_date fields from the validated data
        to_book_property = serializer.validated_data['to_book_property']
        start_date = serializer.validated_data['start_date']
        end_date = serializer.validated_data['end_date']

        # Check if there are any existing reservations for the given date range
        existing_reservations = Reservation.objects.filter(
            to_book_property=to_book_property,
            start_date__lte=end_date,
            end_date__gte=start_date
        ).exclude(
            Q(status='terminated') | Q(status='cancelled')
        )

        if existing_reservations.exists():
            # If there are existing reservations for the given date range, return an error response
            return Response(
                {"detail": f"A reservation for {to_book_property.name} already exists for the selected date range."},
                status=status.HTTP_400_BAD_REQUEST
            )
        else:
            # If there are no existing reservations for the given date range, create a new reservation
            self.perform_create(serializer)

            # Serialize and return the new reservation with a success response
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class ReservationPagination(PageNumberPagination):
    page_size = 10


class ReservationListView(generics.ListAPIView):
    serializer_class = ReservationSerializer
    pagination_class = ReservationPagination
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset = Reservation.objects.all()

        # Filter by user type - host or guest
        request_type = self.kwargs.get('request_type', None)
        if request_type == 'host':
            queryset = queryset.filter(to_book_property__owner=self.request.user)
        elif request_type == 'guest':
            queryset = queryset.filter(user=self.request.user)

        # Filter by reservation status
        request_status = self.request.query_params.get('status', None)
        if request_status is not None:
            queryset = queryset.filter(status=request_status)

        return queryset


class ReservationUpdateView(generics.UpdateAPIView):
    queryset = Reservation.objects.filter(status='pending_awaiting_confirmation')
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticated]

    def patch(self, request, *args, **kwargs):
        reservation_id = kwargs.get('pk')
        reservation = self.get_object()
        owner = request.user

        if owner != reservation.to_book_property.owner:
            return Response({'error': 'You are not authorized to perform this action.'},
                            status=status.HTTP_403_FORBIDDEN)

        requested_status = request.data.get('status')
        if requested_status not in ('confirmed', 'denied'):
            return Response({'error': 'Invalid status.'}, status=status.HTTP_400_BAD_REQUEST)

        reservation.status = requested_status if requested_status == 'confirmed' else 'terminated'
        reservation.save()
        serializer = self.serializer_class(reservation)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ReservationTerminateView(generics.UpdateAPIView):
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        reservation = get_object_or_404(Reservation, id=self.kwargs.get('pk'))

        # Check if the user making the request is the owner of the property
        property_owner = reservation.to_book_property.owner
        if request.user != property_owner:
            return Response(
                {'error': 'Only the owner of the property can terminate a reservation.'},
                status=status.HTTP_403_FORBIDDEN
            )

        # Check if the reservation has already been cancelled or terminated
        if reservation.status in ['cancelled', 'terminated']:
            return Response(
                {'error': 'This reservation has already been cancelled or terminated.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Update the status of the reservation to 'cancelled'
        reservation.status = 'terminated'
        reservation.save()

        serializer = self.get_serializer(reservation)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ReservationCancelView(generics.UpdateAPIView):
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        reservation = get_object_or_404(Reservation, id=self.kwargs.get('pk'))

        # Check if the user making the request is the same as the user who made the reservation
        if request.user != reservation.user:
            return Response(
                {'error': 'You do not have permission to cancel this reservation.'},
                status=status.HTTP_403_FORBIDDEN
            )

        # Check if the reservation has already been cancelled or terminated
        if reservation.status in ('cancelled', 'terminated', 'cancelled_awaiting_confirmation'):
            return Response(
                {'error': 'This reservation has already been cancelled, awaiting confirmation, or terminated.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Update the status of the reservation to 'cancelled_awaiting_confirmation'
        reservation.status = 'cancelled_awaiting_confirmation'
        reservation.save()

        serializer = self.get_serializer(reservation)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ReservationConfirmCancelView(generics.UpdateAPIView):
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        reservation = get_object_or_404(Reservation, id=self.kwargs.get('pk'))

        # Check if the user making the request is the owner of the property
        property_owner = reservation.to_book_property.owner
        if request.user != property_owner:
            return Response(
                {'error': 'Only the owner of the property can confirm the cancellation of a reservation.'},
                status=status.HTTP_403_FORBIDDEN
            )

        # Check if the reservation has already been cancelled or terminated
        if reservation.status in ['cancelled', 'terminated']:
            return Response(
                {'error': 'This reservation has already been cancelled or terminated.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Check if the reservation is still awaiting confirmation
        if reservation.status != 'cancelled_awaiting_confirmation':
            return Response(
                {'error': 'This reservation is not awaiting confirmation.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Update the status of the reservation to 'cancelled'
        reservation.status = 'cancelled'
        reservation.save()

        # Update the availability of the property for the cancelled reservation's date range
        # reservation_property = reservation.to_book_property
        # reservation_property.update_availability(reservation.start_date, reservation.end_date)

        serializer = self.get_serializer(reservation)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ReservationDenyCancelView(generics.UpdateAPIView):
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        reservation = get_object_or_404(Reservation, id=self.kwargs.get('pk'))

        # Check if the user making the request is the owner of the property
        property_owner = reservation.property.owner
        if request.user != property_owner:
            return Response(
                {'error': 'Only the owner of the property can deny the cancellation of a reservation.'},
                status=status.HTTP_403_FORBIDDEN
            )

        # Check if the reservation has already been cancelled or terminated
        if reservation.status in ['cancelled', 'terminated']:
            return Response(
                {'error': 'This reservation has already been cancelled or terminated.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Check if the reservation is still awaiting confirmation
        if reservation.status != 'cancelled_awaiting_confirmation':
            return Response(
                {'error': 'This reservation is not awaiting confirmation.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Update the status of the reservation to 'cancelled'
        reservation.status = 'confirmed'
        reservation.save()

        # Update the availability of the property for the cancelled reservation's date range
        reservation_property = reservation.property
        reservation_property.update_availability(reservation.start_date, reservation.end_date)

        serializer = self.get_serializer(reservation)
        return Response(serializer.data, status=status.HTTP_200_OK)
