# Generated by Django 4.1.7 on 2023-03-15 06:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('comments', '0002_rename_parent_comments_reply_to'),
    ]

    operations = [
        migrations.AddField(
            model_name='comments',
            name='address_id',
            field=models.PositiveIntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='comments',
            name='address_type',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype'),
            preserve_default=False,
        ),
    ]
