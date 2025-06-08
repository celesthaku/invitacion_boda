from django.shortcuts import render


def inicio(request):
    return render(request, 'invitacion/index.html')


def formulario_rsvp(request):
    return render(request, 'invitacion/formulario.html')