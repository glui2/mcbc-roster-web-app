from django.shortcuts import render
from rostering.models import Volunteer
from rostering.serializers import VolunteerSerializer
from rest_framework import generics

# Create your views here.


class VolunteerListCreate(generics.ListCreateAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
