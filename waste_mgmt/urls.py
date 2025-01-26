from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    # 앱 URL 연결
    path('admin/', admin.site.urls),
    path('recycling/', include('recycling.urls')),
    path('ocr/', include('ocr.urls')),
    path('notifications/', include('notifications.urls')),
    # path('hotspot-analysis/', include('hotspot_analysis.urls')),
    # path('route-optimization/', include('route_optimization.urls')),
    # path('community/', include('community.urls')),
    # path('classification/', include('classification.urls')),
    # path('waste-guides/', include('waste_guides.urls')),
    # path('challenges/', include('challenges.urls')),
    # path('analytics/', include('analytics.urls')),
    # path('profiles/', include('profiles.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
