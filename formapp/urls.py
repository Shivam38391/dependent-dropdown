from django.urls import  path
from .import views
urlpatterns = [
    
path("", views.create_form, name ="home"),
path("environment-list/" , views.environment_list, name="environment-list" ),
path("env-delete/<int:pk>", views.environment_detail, name="env-delete"),

]
