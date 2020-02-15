# Generated by Django 3.0.3 on 2020-02-15 04:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rostering', '0002_delete_ministry'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ministry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ministry_name', models.CharField(max_length=100)),
                ('members', models.ManyToManyField(to='rostering.Volunteer')),
            ],
        ),
    ]
