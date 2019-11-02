from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework.views import status
from .models import User
from .serializer import UsersSerializer

# Create your views here.
class UserView(APIView):

    serializer_class = UsersSerializer

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        serializer.save()
        return Response(serializer.data, status =status.HTTP_201_CREATED)

class UsersView(ListAPIView):
    def get(self, request,  format=None):
        return Response(User.objects.all())
        

    
