# Create your views here.
from .models import Volunteer, Ministry
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
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
    serializer_class = MinistrySerializer
    
    @action(detail=False)
    def ministry_by_volunteer(self, request):
        volunteer_id = self.request.query_params.get('id')
        volunteer = Volunteer.objects.get(id = volunteer_id)
        ministry_list = Ministry.objects.filter(members=volunteer)
        
        serializer = self.get_serializer(ministry_list, many=True)

        return Response(serializer.data)