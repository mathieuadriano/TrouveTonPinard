# Generated by Django 4.2 on 2024-03-13 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('winery', '0003_alter_winery_addresse_alter_winery_creation_year'),
    ]

    operations = [
        migrations.AddField(
            model_name='winery',
            name='code_postal',
            field=models.CharField(default=34000, max_length=50),
            preserve_default=False,
        ),
    ]