from rest_framework import serializers
from rostering.models import Volunteer, Ministry


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ('__all__')

class MinistrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Ministry
        fields = ('__all__')

