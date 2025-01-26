from django.db import models

# 재활용 아이템 모델
class RecyclableItem(models.Model):
    name = models.CharField(max_length=100)  # 물건 이름
    description = models.TextField()  # 재활용 방법 설명
    recycling_mark_image = models.ImageField(upload_to='recycling_marks/', blank=True, null=True)  # 마크 이미지

    def __str__(self):
        return self.name

# 무단 투기 신고 모델
class IllegalDumpingReport(models.Model):
    location = models.CharField(max_length=255)
    image = models.ImageField(upload_to='dumping_reports/')
    reported_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Report at {self.location} on {self.reported_at}"

