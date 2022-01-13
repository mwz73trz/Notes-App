import imp
from rest_framework import viewsets
from .serilalizers import SubjectSerializer, NoteSerializer
from .models import Subject, Note

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    
class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
