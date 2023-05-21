from django.db import models

# Create your models here.


class EnvironmentModel(models.Model):
    Environment = models.CharField("text",max_length=150)
    
    def __str__(self):
        return self.Environment
