//MODULO DE DIRECTIVAS
var products = angular.module('store-directives', []);

/*Directiva de descripcion de los productos
(usada en "product-tabs.html")*/
products.directive("productDescription", function() {
    return {
        restrict: 'E',
        templateUrl: "product-description.html"
    };
});

/*Directiva de caracteristicas de los productos
(usada en "product-tabs.html")*/
products.directive("productSpecs", function() {
    return {
        restrict: 'A',
        templateUrl: "product-specs.html"
    };
});

/*Directiva con controlador de las pestañas de descripcion
y caracteristicas de cada producto*/
products.directive("productTabs", function() {
    return {
        restrict: 'E',
        controllerAs: 'tab',
        controller: function() {
            this.tab = 1;
            this.setTab = function(selectTab){
                  this.tab = selectTab;
            };
            this.isSet = function(tabCheck){
                return this.tab===tabCheck;
            };
        },
        templateUrl: "product-tabs.html"
    };
});