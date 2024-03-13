from django.urls import path
from . import views

urlpatterns = [
   path('get-wines/', views.GetWines.as_view()),
   # here is the url pattern: http://127.0.0.1:8000/api/wine/get-wines/

   path('get-weekly-wines/', views.GetWeeklyWines.as_view()),
   # here is the url pattern: http://127.0.0.1:8000/api/wine/get-weekly-wines/

   path('post-wine/', views.PostWine.as_view()),
   # here is the url pattern: http://127.0.0.1:8000/api/wine/post-wine/
]