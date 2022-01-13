from django.urls import path, include
from .views import SubjectViewSet, NoteViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('subjects', SubjectViewSet, basename='subject')
router.register('notes', NoteViewSet, basename='note')

urlpatterns = router.urls