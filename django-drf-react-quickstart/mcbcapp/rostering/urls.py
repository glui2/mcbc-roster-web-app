from django.urls import path
from . import views
urlpatterns = [
    path('api/rostering/', views.VolunteerListCreate.as_view()),
]
