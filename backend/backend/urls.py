from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/chatgpt/', include('chatgpt.urls')),
    
    path('api/wine/', include('wine.urls')),
    path('api/winery/', include('winery.urls')),
]
