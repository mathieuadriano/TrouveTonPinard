# Generated by Django 4.2.7 on 2023-11-29 09:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('winery', '0002_winery_addresse_winery_creation_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='winery',
            name='addresse',
            field=models.CharField(default=1993, max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='winery',
            name='creation_year',
            field=models.CharField(max_length=50),
        ),
    ]
