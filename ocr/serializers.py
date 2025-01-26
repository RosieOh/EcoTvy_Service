from rest_framework import serializers
from .models import UploadedImage

class UploadedImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedImage
        fields = ['id', 'image', 'extracted_text', 'created_at']
        read_only_fields = ['extracted_text', 'created_at']
