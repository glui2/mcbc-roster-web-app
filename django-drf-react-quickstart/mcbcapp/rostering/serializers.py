from rest_framework import serializers
from rostering.models import Volunteer


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ('__all__')
