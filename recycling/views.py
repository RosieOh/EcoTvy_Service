from rest_framework.views import APIView
from rest_framework.response import Response
from .models import RecyclableItem
from .serializers import RecyclableItemSerializer

class RecyclableItemView(APIView):
    def get(self, request):
        items = RecyclableItem.objects.all()
        serializer = RecyclableItemSerializer(items, many=True)
        return Response(serializer.data)
