from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('recycling/', include('recycling.urls')),  # 재활용 기능
    path('ocr/', include('ocr.urls')),              # OCR 기능
]
