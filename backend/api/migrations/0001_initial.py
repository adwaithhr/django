# Generated by Django 4.2.1 on 2024-04-08 16:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Bill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(max_length=100)),
                ('type', models.CharField(max_length=100)),
                ('amount', models.DecimalField(decimal_places=3, max_digits=10)),
                ('count', models.IntegerField()),
                ('cost', models.DecimalField(decimal_places=3, max_digits=10)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bills', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
