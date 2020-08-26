from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from .utilities import get_friend, get_enemie, get_breed

class Index(TemplateView):
    template_name = "base.html"

    def get_context_data(self, **kwargs):
        context = super(Index, self).get_context_data(**kwargs)
        context['cats_friend'] = get_friend()
        context['cats_enemie'] = get_enemie()
        context['cats_breed'] = get_breed()
        return context

def get_breed_href(request):
    if request.method == 'GET':
        breed_href = "//yandex.ru/images/search?text="+get_breed()
    return HttpResponse(breed_href)
