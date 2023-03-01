from django.contrib import admin
from .models import Post


class PhotoAdmin(admin.ModelAdmin):
    list_display = ["id", "author", "created", "updated"]
    raw_id_fields = ["author"]
    list_filter = ["title", "text", "updated", "author"]
    search_fields = ["title", "text", "created"]
    ordering = ["-updated", "-created"]


admin.site.register(Post)
