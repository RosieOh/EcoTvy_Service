from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # views.index 호출
]
