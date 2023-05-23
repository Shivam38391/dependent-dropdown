from django.contrib import admin
from .models import CreateData, EnvironmentModel

# Register your models he

admin.site.register(EnvironmentModel)
admin.site.register(CreateData)

