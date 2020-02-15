from django.urls import include, path
from . import views
# from django.conf.urls import url, include
# from rostering.resources import VolunteerResource
from rest_framework import routers
from django.contrib import admin

# volunteer_resource = VolunteerResource()

router = routers.DefaultRouter()
router.register(r'volunteers',views.VolunteerViewSet)
router.register(r'ministries',views.MinistryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', 
    namespace='rest_framework')),
    path('mcbcadmin/', admin.site.urls),
]