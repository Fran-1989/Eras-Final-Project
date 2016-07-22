var app = angular.module('Eras+App', ['ngRoute','LocalStorageModule']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/portada.html',
            controller: 'Universities'
        })
        .when('/inicio', {
            templateUrl: 'views/inicio.html',
            controller: 'Universities'
        })
        .when('/estudiar', {
            templateUrl: 'views/estudiar.html',
            controller: 'Universities'
        })
        .when('/posts', {
            templateUrl: 'views/posts.html',
            controller: 'Posts'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);	

app.controller('Universities', ['$scope', '$http', function($scope, $http) {
    $http.get("json/universidades.json").success(function(data) {
        $scope.universidades = data;

      
    });

}]);

app.controller('Posts', ['$scope', '$http', function($scope, $http) {
    $http.get("json/posts.json").success(function(data) {
        $scope.posts = data;

      });

}]);



$(document).ready(function() {
    $(".button-collapse").sideNav();
});

$(document).ready(function() {
    $('select').material_select();
});


/*  $scope.facultades = function () {
        	for (i = 0; i < universidades.length; i++) {
        		var facultades = 
        	}
        }
*/