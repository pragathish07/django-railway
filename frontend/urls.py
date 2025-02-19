from django.urls import path, re_path
from django.views.generic import TemplateView

from .views import frontend


app_name = "frontend"

urlpatterns = [
 
    re_path(r"^.*$", frontend, name="frontend"),
]