from django.db import models

# Create your models here.


class Files(models.Model):
    video = models.FileField()
    text = models.FileField(upload_to='textfiles')
    text_data = models.CharField(max_length=1000000, null=True, blank=True)
