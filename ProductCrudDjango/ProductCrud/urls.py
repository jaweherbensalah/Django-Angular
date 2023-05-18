# from django.contrib import admin
# from django.urls import path
# from django.conf.urls import url, include
# from rest_framework import routers
# import sys
# from django.conf import settings


# #add static folder to admin dashboard
# from django.conf.urls.static import static
# # setting path
# # sys.path.append('../api')
# from  api import  views

# router = routers.DefaultRouter()
# # router.register(r'produits', views.ProduitViewSet)
# router.register('', views.ProductView, basename='productview')

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/', include(router.urls)),
#     # path('snippets/', include('api.urls', namespace='snippets')),


#     # url(r'^', include(router.urls)),
#     # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
#  ]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) #media folder configuration


from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


from api.views import ProductView
from rest_framework import routers 

route = routers.DefaultRouter()
route.register("", ProductView, basename="ProductView")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

