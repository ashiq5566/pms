from rest_framework import serializers
from .models import Listing


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = (
            'title',
            'addess',
            'city',
            'state',
            'saletype',
            'price',
            'bedrooms',
            'bathrooms',
            'hometype',
            'sqrft',
            'photo_main',
            'slug'
        )

class ListingDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'