from django.db import models

class UploadedImage(models.Model):
    image = models.ImageField(upload_to='uploaded_images/')
    extracted_text = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image {self.id} - {self.created_at}"
