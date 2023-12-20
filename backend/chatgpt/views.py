from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import *

from openai import OpenAI

# Create your views here.
class GetChatGPT(APIView):
    def get(self, request):
        client = OpenAI(
            # defaults to os.environ.get("OPENAI_API_KEY")
            api_key="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",
        )

        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": "Say this is a test",
                }
            ],
            model="gpt-3.5-turbo",
        )


        print(chat_completion)


        return Response({"Message" : "Chat GPT"}, status=status.HTTP_200_OK)