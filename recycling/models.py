from django.db import models

# 재활용 아이템 모델
class RecyclableItem(models.Model):
    name = models.CharField(max_length=100)  # 물건 이름
    description = models.TextField()  # 재활용 방법 설명
    recycling_mark_image = models.ImageField(upload_to='recycling_marks/', blank=True, null=True)  # 마크 이미지

    def __str__(self):
        return self.name