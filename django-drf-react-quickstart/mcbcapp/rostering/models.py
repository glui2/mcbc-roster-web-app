from django.contrib import admin
from django.db import models
from django.utils.html import format_html

# Create your models here.

class Volunteer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)    
    
    def __str__(self):
        return '%s %s %s' % (self.first_name, self.last_name, self.email)

class Ministry(models.Model):
    ministry_name = models.CharField(max_length=100)
    members = models.ManyToManyField(Volunteer)

    def __str__(self):
        return self.name

class VolunteerAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email')