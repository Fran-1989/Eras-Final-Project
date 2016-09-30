'use strict';
//inicio el modulo principal de la App inyectando los módulos de dependencia.
var app = angular.module('Erasmore', [
    'ngRoute',
    'Erasmore.filters',
    'ngStorage',
    'Erasmore.controllers'
])


//hago el routing de las diferentes vistas de la App.
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'Faculties'
        })
        .when('/intro', {
            templateUrl: 'views/intro.html',
            controller: 'Faculties'
        })
        .when('/where', {
            templateUrl: 'views/where.html',
            controller: 'Faculties'
        })
        .when('/fun', {
            templateUrl: 'views/fun.html',
            controller: 'Posts'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);





/*  $scope.facultades = function () {
            for (i = 0; i < universidades.length; i++) {
                var facultades = 
            }
        }
        
app.directive('facSevilla', function() {
    function linkFunction($scope, elem, attrs) {
      if $scope.universidades.name === "Universidad de Sevilla" {

      }
    }
    return {
        templateUrl: ,
        restrict: 'EA',
        link: linkFunction
    };
});



app.controller('fSevilla', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.name = $routeParams.name;

    $http.get("json/facultades.json").success(function(data) {
       $scope.facultades = data;
        $scope.isSevilla= function(user) {
            return $scope.facultades.city === "Sevilla";
        };
    });

}]);


app.controller('Posts', ['$scope', '$http', function($scope, $http, localStorageService) {

    $http.get("json/posts.json").success(function(data) {
        $scope.posts = data;
    });

    
            $scope.random = Math.floor(Math.random() * $scope.asistentes.length);
            $scope.list = $scope.getElementByID('asistentes');
            list.appendChild($scope.asistentes[random]);
*/
