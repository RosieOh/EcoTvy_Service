from rest_framework import serializers
from .models import RecyclableItem

class RecyclableItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecyclableItem
        fields = '__all__'
