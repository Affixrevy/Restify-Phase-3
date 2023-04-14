from rest_framework import serializers
from .models.property import PropertyModel, PropertyImage


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyModel
        fields = ['name', 'main_pic', 'address', 'country', 'start_date',
                  'end_date', 'num_guests', 'num_beds', 'num_baths',
                  'amenities', 'description', 'price', 'city', 'province']

    def create(self, validated_data):
        validated_data['owner'] = self.context.get('request').user
        return super().create(validated_data)

    def update(self, instance, validated_data):
        return super().update(instance, validated_data)


class PropertyImageSerializer(serializers.ModelSerializer):
    property = serializers.PrimaryKeyRelatedField(queryset=PropertyModel.objects.all())

    class Meta:
        model = PropertyImage
        fields = ('image', 'property')
