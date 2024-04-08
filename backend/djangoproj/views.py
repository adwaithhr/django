from django.shortcuts import render

# def bill(request):
#     print('huuuuu')
#     return HTTTP
#     return render(request,'Bill.js')
def index(request):
    return render(request,'index.html')