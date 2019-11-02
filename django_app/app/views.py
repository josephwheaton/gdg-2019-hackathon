from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework import viewsets
from rest_framework.views import status
from .models import User
from .serializer import UserSerializer

# Create your views here.

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
        
        

    
