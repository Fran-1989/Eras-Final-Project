var app = angular.module('Eras+App', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/portada.html',
			controller: 'FirstController'
		})
		.when('/inicio', {
			templateUrl: 'views/inicio.html',
			controller: 'FirstController'
		})
		.when('/estudiar', {
			templateUrl: 'views/estudiar.html',
			controller: 'studiesController'
		})
		.when('/posts', {
			templateUrl: 'views/posts.html',
			controller: 'PostController'
		})
		.otherwise({
			redirectTo: '/'
		})
}]);

app.controller('FirstController', ['$scope', function($scope){
	$scope.text = 'Merengue Merengueeee!!';
}]);