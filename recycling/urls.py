from django.urls import path
from .views import RecyclableItemView

urlpatterns = [
    path('items/', RecyclableItemView.as_view(), name='recyclable-items'),
]
