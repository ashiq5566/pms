from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response


from .models import Listing
from .serializers import ListingSerializer, ListingDetailsSerializer
from datetime import datetime, timezone, timedelta

class ListingsView(ListAPIView):
    queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
    permissions_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    lookup_field = 'slug'

class ListingView(RetrieveAPIView):
    queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
    serializer_class = ListingDetailsSerializer
    lookup_field = 'slug'
    
class SearchView(APIView):
    permissions_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    
    def post(self, request, format=None):
        queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
        data = self.request.data
        
        sale_type = data['sale_type']
        queryset = queryset.filter(sale_type__iexact=sale_type)
        
        # price = data['price']
        # is
        
        open_house = data['open_house']
        queryset = queryset.filter(open_house__iexact=open_house)
        
        keywords = data['keywords']
        queryset = queryset.filter(description=keywords)
        
        serializer = ListingSerializer(queryset, many=True)
        
        return Response(serializer.data)



