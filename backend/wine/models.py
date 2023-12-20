from django.db import models
from django.db.models.signals import post_delete
from django.dispatch.dispatcher import receiver

from winery.models import *

# Create your models here.
class Wine(models.Model):
    OPTION1 = 'Blanc'
    OPTION2 = 'Rouge'
    OPTION3 = 'Rosé'
    OPTION4 = 'Pétillant'

    YOUR_CHOICES = [
        (OPTION1, 'Blanc'),
        (OPTION2, 'Rouge'),
        (OPTION3, 'Rosé'),
        (OPTION4, 'Pétillant'),
    ]

    winery = models.ForeignKey(Winery, on_delete=models.CASCADE, null=False, blank=False)
    name = models.CharField(max_length=50, null=False, blank=False)
    type = models.CharField(
        max_length=20,
        choices=YOUR_CHOICES,
        default=OPTION1,  # Set a default value if needed
    )
    price = models.DecimalField(max_digits=7, decimal_places=2, null=False, blank=False)
    alcool_degree = models.DecimalField(max_digits=7, decimal_places=2, null=False, blank=False)
    creation_year = models.CharField(max_length=50, null=False, blank=False)
    volume = models.CharField(max_length=50, null=False, blank=False)
    weekly_wine = models.BooleanField(default=False, null=False, blank=False)
    image = models.ImageField(blank=False, null=False)
 
    def __str__(self):
         return self.name
    
@receiver(post_delete, sender=Wine)
def image_delete(sender, instance, **kwargs):
    instance.image.delete(False)