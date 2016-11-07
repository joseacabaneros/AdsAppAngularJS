//MODULO PRINCIPAL DE LA APLICACION 'petsStore'
//Referencia al modulo de directivas 'store-directives'
var app = angular.module('petsStore', ['store-directives']);

//Controlador de la galeria de imagenes
app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(currentPhoto=0){
        this.current = currentPhoto;
        return this.current;
    };
    this.getCurrent = function(){
        return this.current;
    }
});

//Controlador de los productos de la tienda
//Se cargan los elementos desde un JSON externo 'mascotas.json'
app.controller('StoreController', function($scope,$http){
    $http.get('mascotas.json')
         .then(function(res){
             $scope.products = res.data;
         });
});