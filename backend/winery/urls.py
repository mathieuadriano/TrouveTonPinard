from django.urls import path
from . import views

urlpatterns = [
   path('get-wineries/', views.GetWineries.as_view()),
   # here is the url pattern: http://127.0.0.1:8000/api/wine/get-wineries/
]