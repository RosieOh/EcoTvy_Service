import pytesseract
from PIL import Image
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from .models import UploadedImage
from .serializers import UploadedImageSerializer

class OCRImageUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request):
        serializer = UploadedImageSerializer(data=request.data)
        if serializer.is_valid():
            instance = serializer.save()
            # OCR 처리
            image = Image.open(instance.image)
            extracted_text = pytesseract.image_to_string(image)
            instance.extracted_text = extracted_text
            instance.save()
            return Response(UploadedImageSerializer(instance).data, status=201)
        return Response(serializer.errors, status=400)
