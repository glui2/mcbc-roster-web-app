# Create your views here.
from .models import Volunteer, Ministry
from rest_framework import viewsets
from .serializers import VolunteerSerializer, MinistrySerializer

class VolunteerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Volunteers to be viewed or edited.
    """
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

class MinistryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Ministries to be viewed or edited.
    """
    queryset = Ministry.objects.all()
    serializer_class = VolunteerSerializer