from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render

from formapp.models import EnvironmentModel, CreateData

# Create your views here.


def create_form(request):
    
    if request.method == 'POST':
        # eveything is getting from name attribute of html 
        country = request.POST.get("country")
        state = request.POST.get("state")
        location = request.POST.get("location")
        newenvironment = request.POST.get("newenvironment")
        
        
        print("country you selevcte======",country)
        print("environment you selevcted=======", newenvironment)
        
        createObj = CreateData.objects.create(country= country,
                                              state=state,
                                              location= location,
                                              environment= newenvironment)
        createObj.save()
        print("createdata is saved----------")
        
        checking_for_env = EnvironmentModel.objects.filter(Environment__contains=newenvironment)
        print(checking_for_env)
        if checking_for_env.exists():
            print("environment already exists")
        else:
            print("environment not found")
            createnv = EnvironmentModel.objects.create(Environment= newenvironment)
            createnv.save()
            print("new environment created successfully")
            
        
        
        return HttpResponseRedirect("/")
    
    return render(request,"home.html")
    



def environment_list(request):
    environments = EnvironmentModel.objects.all()
    data = {'environments': list(environments.values())}
    print(data)
    return JsonResponse(data)