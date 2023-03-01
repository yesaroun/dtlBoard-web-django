from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse


class Post(models.Model):
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="user_posts"
    )
    title = models.CharField(max_length=50, unique=True)
    photo = models.ImageField(
        upload_to="photos/%Y/%m/%d", default="photos/no_image.png"
    )
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-updated"]

    def __str__(self):
        return self.author.username + " " + self.created.strftime("%Y-%m-%d%H:%M:%S")

    def get_absolute_url(self):
        return reverse("post:post_detail", args=[str(self.id)])
