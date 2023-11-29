from django.db import models

from winery.models import *

# Create your models here.
class Wine(models.Model):
    winery = models.ForeignKey(Winery, on_delete=models.CASCADE, null=False, blank=False)
    name = models.CharField(max_length=50, null=False, blank=False)
    
    def __str__(self):
         return self.name