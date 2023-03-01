from django.urls import path
from django.views.generic.detail import DetailView
from .views import *
from .models import Post
from .views import index

app_name = "post"

urlpatterns = [
    path("", index),
    path("list/", post_list, name="post_list"),
    path(
        "detail/<int:pk>/",
        DetailView.as_view(model=Post, template_name="posts/detail.html"),
        name="post_detail",
    ),
    path("upload/", PostUploadView.as_view(), name="post_upload"),
    path("delete/<int:pk>/", PostDeleteView.as_view(), name="post_delete"),
    path("update/<int:pk>/", PostUpdateView.as_view(), name="post_update"),
]
