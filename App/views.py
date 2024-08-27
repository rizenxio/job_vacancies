from django.shortcuts import render 
from django.http import HttpResponseRedirect 
from django.contrib import messages
from django.core.mail import EmailMultiAlternatives
from django.template import loader

# Create your views here.
def home(request):
    return render(request, "home.html")

def opportunities(request):
    return render(request, "opportunities.html")

#functionn to send frontend form
def email_frontend(request):
    if request.method == "POST":
        name = request.POST.get('name')
        age = request.POST.get('age')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        address = request.POST.get('alamat')
        experience = request.POST.get('experience')
        skills = request.POST.get('skills')

        template = loader.get_template('resume_from.txt')
        
        context ={
            'name':name,
            'age':age,
            'email':email,
            'phone':phone,
            'alamat':address,
            'experience':experience,
            'skills':skills,        
        }
        message = template.render(context)
        email = EmailMultiAlternatives(
            "Frontend - Candidate ",message,
            "Frontend - Opportunity",
            ['bahrur1256@gmail.com']
        )
        email.content_subtype = 'html'
        file = request.FILES['file']
        email.attach(file.name, file.read(), file.content_type)
        email.send()
        messages.success(request, "Your resume has been sent successfully")
        return HttpResponseRedirect('/')
#functionn to send backend form
def email_backend(request):
    if request.method == "POST":
        name = request.POST.get('name')
        age = request.POST.get('age')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        address = request.POST.get('alamat')
        experience = request.POST.get('experience')
        skills = request.POST.get('skills')

        context ={
            'name':name,
            'age':age,
            'email':email,
            'phone':phone,
            'alamat':address,
            'experience':experience,
            'skills':skills,        
        }
        messages = template.render(context)
        email = EmailMultiAlternatives(
            "Backend - Candidate ",messages,
            "Backend - Opportunity",
            ['bahrur1256@gmail.com']
        )
        email.content_subtype = 'html'
        file = request.FILES['file']
        email.attach(file.name, file.read(), file.content_type)
        email.send()
        messages.success(request, "Your resume has been sent successfully")
        return HttpResponseRedirect('/')

#functionn to send datascience form
def email_datascience(request):
    if request.method == "POST":
        name = request.POST.get('name')
        age = request.POST.get('age')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        address = request.POST.get('alamat')
        experience = request.POST.get('experience')
        skills = request.POST.get('skills')
        
        context ={
            'name':name,
            'age':age,
            'email':email,
            'phone':phone,
            'alamat':address,
            'experience':experience,
            'skills':skills,        
        }
        messages = template.render(context)
        email = EmailMultiAlternatives(
            "Datascience - Candidate ",messages,
            "Datascience - Opportunity",
            ['bahrur1256@gmail.com']
        )
        email.content_subtype = 'html'
        file = request.FILES['file']
        email.attach(file.name, file.read(), file.content_type)
        email.send()
        messages.success(request, "Your resume has been sent successfully")
        return HttpResponseRedirect('/')
