from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework import viewsets
from rest_framework.views import status
from .models import User, Location
from .serializer import UserSerializer, LocationSerializer

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, format=None):
        try:
            user = queryset.get(pk=request.data['email'])
            serializer = UserSerializer(user)
            return JsonResponse(serializer.data, safe=False)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request, format=None):
        user = User.create_user(self, request.data['first_name'], request.data['last_name'],  request.data['email'])
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data, safe=False)

#class LocationView(APIView):

#    queryset = Location.objects.all()
#    serializer_class = LocationSerializer

#    def post(self, request, format=None):
#        serializer = LocationSerializer(data=request.data)
#        if serializer.is_valid():
#            serializer.save()
#            return Response(serializer.data, status=status.HTTP_201_CREATED)
#        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#class LocationsView(ListAPIView):
#    def get(self, request, format=None):
 #       serializer = LocationSerializer()







