# Generated by Django 4.1.2 on 2022-10-30 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_alter_files_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='files',
            name='text',
            field=models.FileField(upload_to='textfiles'),
        ),
    ]