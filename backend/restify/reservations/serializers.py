from django.shortcuts import render
from rest_framework.serializers import ModelSerializer
from django.conf import settings
from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework import serializers
from .models import Reservation


# from django_filters.rest_framework import DjangoFilterBackend0

class ReservationSerializer(ModelSerializer):
    class Meta:
        model = Reservation
        fields = [
            'user',
            'status',
            'tp_book_property',
            'start_date',
            'end_date'
        ]


# class ReservationSerializerCreate(ModelSerializer):
#     class Meta:
#         model = Reservation
#         fields = [
#             'user',
#             'status',
#             'property',
#             'start_date',
#             'end_date'
#         ]
#
#     def create(self, validated_data):
#         Reservation.objects.create()


class ReservationSerializerCreate(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = [
            'user',
            'status',
            'to_book_property',
            'start_date',
            'end_date'
        ]

    def create(self, validated_data):
        # Extract the property, start_date, and end_date fields from the validated data
        to_rent_property = validated_data['to_book_property']
        start_date = validated_data['start_date']
        end_date = validated_data['end_date']

        # Check if there are any existing reservations for the given date range
        existing_reservations = Reservation.objects.filter(
            Q(to_book_property=to_rent_property) &
            (Q(start_date__range=[start_date, end_date]) | Q(end_date__range=[start_date, end_date]))
        )

        if existing_reservations.exists():
            # If there are existing reservations for the given date range, raise a validation error
            raise serializers.ValidationError(
                f"A reservation for {to_rent_property.name} already exists for the selected date range."
            )
        else:
            # If there are no existing reservations for the given date range, create a new reservation
            reservation = Reservation.objects.create(
                user=validated_data.get('user', None),
                status=validated_data['status'],
                to_book_property=to_rent_property,
                start_date=start_date,
                end_date=end_date
            )

            return reservation
