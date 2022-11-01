from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializer import FilesSerializer
from .models import Files

# Create your views here.


@api_view(['POST'])
def upload(request):
    data = request.data
    text_data = ''
    if data['text']:
        text_data = str(data['text'].read(), 'utf-8')
    files = Files.objects.create(
        video=data['video'],
        text=data['text'],
        text_data=text_data
    )

    files.save()
    serializer = FilesSerializer(files, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getMedia(request):

    files = Files.objects.all()

    serializer = FilesSerializer(files, many=True)
    return Response(serializer.data)
