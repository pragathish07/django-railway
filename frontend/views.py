from django.shortcuts import render

# Create your views here.
def frontend(request,*args,**kwargs):
    return render(request,"base.html")
