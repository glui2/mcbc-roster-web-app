from django.db import models

# Create your models here.


class Volunteer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    
def __str__(self):
        return '%s %s %s' % (self.first_name, self.last_name, self.email)



