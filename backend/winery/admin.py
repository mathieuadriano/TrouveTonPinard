from django.contrib import admin
from .models import *

# Register your models here.
class WineryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'addresse')

admin.site.register(Winery, WineryAdmin)