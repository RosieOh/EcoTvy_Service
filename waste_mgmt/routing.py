from ocr.routing import websocket_urlpatterns as ocr_patterns
from notifications.routing import websocket_urlpatterns as notification_patterns

websocket_urlpatterns = ocr_patterns + notification_patterns
