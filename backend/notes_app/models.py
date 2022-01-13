from django.db import models

class Subject(models.Model):
    title = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.title}"
    
class Note(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='notes')
    
    def __str__(self):
        return f"{self.name}"
