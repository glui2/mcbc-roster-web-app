from tastypie.resources import ModelResource
from rostering.models import Volunteer

class VolunteerResource(ModelResource):
    class Meta:
        queryset = Volunteer.objects.all()
        resource_name = 'all_volunteeers'