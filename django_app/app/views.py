from django.shortcuts import render

from django.shortcuts import render
from django.views import View
from django_app.app import models
from rest_framework import serializers
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView


# Create your views here.
from django_app.app.models import Location


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ["Latitude", "Longitude"]


class LocationView(APIView):

    queryset = Location.objects.all()
    serializer_class = LocationSerializer

    def post(self, request, format=None):
        serializer = LocationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LocationsView(ListAPIView):

    def get(self, request, format=None):
        serializer = LocationSerializer()
