from django.http import JsonResponse
from django.shortcuts import render

from formapp.models import EnvironmentModel

# Create your views here.


def create_form(request):
    
    if request.method == 'POST':
        # eveything is getting from name attribute of html 
        country = request.POST.get("country")
        state = request.POST.get("state")
        location = request.POST.get("location")
        # environment = request.POST.get("environment")/
        newenvironment = request.POST.get("newenvironment")
        
        
        print("country you selevcte======",country)
        print("state you selevcted=======",state)
        print("location you selevcted====",location)
        print("environment you selevcted=======", newenvironment)
        
        # createObj = EnvironmentModel.objects.create(Environment= newenvironment)
        # createObj.save()
        
    
    return render(request,"home.html")
    



def environment_list(request):
    environments = EnvironmentModel.objects.all()
    data = {'environments': list(environments.values())}
    # print(data)
    return JsonResponse(data)