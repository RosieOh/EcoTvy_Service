import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from waste_mgmt.routing import websocket_urlpatterns  # 통합된 라우팅 패턴 가져오기

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'waste_mgmt.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),  # HTTP 요청 처리
    "websocket": AuthMiddlewareStack(
        URLRouter(websocket_urlpatterns)  # WebSocket URL 라우팅
    ),
})