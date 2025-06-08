from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('rsvp/', views.formulario_rsvp, name='formulario_rsvp'),
]