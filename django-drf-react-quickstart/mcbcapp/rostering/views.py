# Create your views here.
from .models import Volunteer
from rest_framework import viewsets
from .serializers import VolunteerSerializer

class VolunteerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Volunteers to be viewed or edited.
    """
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer