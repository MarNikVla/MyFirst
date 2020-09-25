from django.http import HttpResponse



from django.views.generic import TemplateView
from .utilities import get_friend, get_enemy, get_breed


class Index(TemplateView):
    template_name = "base.html"

    def get_context_data(self, **kwargs):
        context = super(Index, self).get_context_data(**kwargs)
        context['cats_friend'] = get_friend()
        context['cats_enemy'] = get_enemy()
        context['cats_breed'] = get_breed()
        return context


"""
    Получение ссылки на породу/друга/врага кошек
    получает ajax запрос с id кнопки (cats_breeds,cats_friends...)
    возвращает ссылку вида "//yandex.ru/images/search?text=Сиамская"
"""
def get_href(request):

    ID_DICT = {
        "cats_breeds": get_breed(),
        "cats_friends": get_friend(),
        "cats_enemies": get_enemy(),
    }

    if request.method == 'GET':
        _id = request.GET['id']
        href = "//yandex.ru/images/search?text="+ID_DICT[_id]
    return HttpResponse(href)
