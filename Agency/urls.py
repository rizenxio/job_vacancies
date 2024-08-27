from django.contrib import admin
from django.urls import path,include
from App import views
urlpatterns = [
    path('admin/', admin.site.urls),
    #path to render app
    path('', views.home, name="home"),
    #path to render app
    path('opportunities', views.opportunities, name="opportunities"),
    # path to login and logout
    path('login/', include('django.contrib.auth.urls')),
    #path to send frontend form
    path('send_email_frontend', views.email_frontend, name="email_frontend"),
    #path to send backend form
        path('send_email_backend', views.email_backend, name="email_backend"),

    #path to send datascience form
    path('send_email_datascience', views.email_datascience, name="email_data_science"),



]
