from django.urls import path
from . import views

urlpatterns = [
   path('get-chatgpt/', views.GetChatGPT.as_view()),
   # here is the url pattern: http://127.0.0.1:8000/api/chatgpt/get-chatgpt/
]