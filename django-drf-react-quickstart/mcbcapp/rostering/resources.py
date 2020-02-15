from tastypie.resources import ModelResource
from rostering.models import Volunteer, Ministry

class VolunteerResource(ModelResource):
    class Meta:
        queryset = Volunteer.objects.all()
        resource_name = 'all_volunteeers'

class MinistryResource(ModelResource):
    class Meta:
        queryset = Ministry.objects.all()
        resource_name = 'all_ministries'