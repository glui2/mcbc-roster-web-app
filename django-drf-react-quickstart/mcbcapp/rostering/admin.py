from django.contrib import admin
from .models import Volunteer, VolunteerAdmin

# Customise Admin interface
admin.site.site_header = "MCBC App Administration"
admin.site.site_title = "MCBC Admin Portal"
admin.site.index_title = "MCBC Administration"

# Register Models
admin.site.register(Volunteer, VolunteerAdmin)