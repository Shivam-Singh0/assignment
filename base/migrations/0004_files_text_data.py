# Generated by Django 4.1.2 on 2022-10-30 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_files_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='files',
            name='text_data',
            field=models.CharField(blank=True, max_length=1000000, null=True),
        ),
    ]
