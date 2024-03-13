from django.contrib import admin
from .models import *

# Register your models here.
class WineAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'winery', 'type', 'prix', 'weekly_wine')

admin.site.register(Wine, WineAdmin)