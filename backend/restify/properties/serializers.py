from rest_framework import serializers
from .models.property import PropertyModel, PropertyImage, DailyPrice
from django.utils.crypto import get_random_string


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyModel
        fields = ['id', 'name', 'main_pic', 'address', 'country', 'start_date',
                  'end_date', 'num_guests', 'num_beds', 'num_baths',
                  'amenities', 'description', 'price', 'city', 'province', 'owner', 'stars']

    def create(self, validated_data):
        validated_data['owner'] = self.context.get('request').user
        return super().create(validated_data)

    def update(self, instance, validated_data):
        return super().update(instance, validated_data)


class PropertyImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyImage
        fields = ('id', 'property', 'image')

    def save(self, **kwargs):
        # generate a unique filename for the uploaded image
        filename = f"{get_random_string(10)}" \
                   f"_property_{self.validated_data['property'].id}" \
                   f"_{self.validated_data['image'].name}"
        self.validated_data['image'].name = filename

        # call the superclass method to save the instance
        super().save(**kwargs)


class DailyPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyPrice
        fields = ['id', 'property', 'date', 'price']
