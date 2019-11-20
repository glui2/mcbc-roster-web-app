from django.urls import path
from . import views
from django.conf.urls import url, include
from rostering.resources import VolunteerResource

volunteer_resource = VolunteerResource()

urlpatterns = [
    url(r'^api/', include(volunteer_resource.urls)),
]
