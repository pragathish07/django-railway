from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages

# Create your views here.
def frontend(request,*args,**kwargs):
    return render(request,"base.html")




