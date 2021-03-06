# Generated by Django 3.1.7 on 2021-03-06 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('text', models.TextField()),
                ('manaCost', models.CharField(max_length=10)),
                ('convertedManaCost', models.IntegerField()),
                ('colors', models.JSONField()),
                ('colorIdentity', models.JSONField()),
                ('type', models.CharField(max_length=120)),
                ('superTypes', models.JSONField()),
                ('types', models.JSONField()),
                ('subTypes', models.JSONField()),
                ('rarity', models.CharField(max_length=120)),
                ('power', models.IntegerField()),
                ('toughness', models.IntegerField()),
                ('imageUrl', models.CharField(max_length=250)),
                ('rulings', models.JSONField()),
            ],
        ),
    ]
