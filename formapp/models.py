from django.db import models

# Create your models here.

class Create(models.Model):
    country = models.CharField( max_length=150, null=True, blank=True,)
    state = models.CharField( max_length=150, null=True, blank=True,)
    location = models.CharField( max_length=150, null=True, blank=True,)
    environment = models.CharField("text",max_length=150)
    
    def __str__(self):
        return self.country



class EnvironmentModel(models.Model):
    Environment = models.CharField("text",max_length=150)
    
    def __str__(self):
        return self.Environment
