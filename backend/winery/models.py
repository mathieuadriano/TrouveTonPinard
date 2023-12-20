from django.db import models

# Create your models here.
class Winery(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    addresse = models.CharField(max_length=50, null=False, blank=False)
    creation_year = models.CharField(max_length=50, null=False, blank=False)

    def __str__(self):
         return self.name