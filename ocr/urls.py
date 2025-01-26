from django.urls import path
from .views import OCRImageUploadView

urlpatterns = [
    path('upload/', OCRImageUploadView.as_view(), name='ocr-image-upload'),
]
