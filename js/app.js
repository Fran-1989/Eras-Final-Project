var app = angular.module('ErasmusApp', ['ngRoute', 'LocalStorageModule']);

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

/*
app.factory('Assistants',function () {
	var assistants = {};

	assistants.entries = [
		{name: "James Smith", nationality: "English"},
	    {name: "Juan García", nationality: "Spanish"},
	    {name: "Eduardo Cruz", nationality: "Spanish"},
	    {name: "Jurgen Low", nationality: "German"},
	    {name: "Jeremy Sagna" , nationality: "French"},
	    {name: "Emilio Fernandez", nationality: "Spanish"},
	    {name: "Bianca Sabatini", nationality: "Italian"},
	    {name: "Chloe Hart", nationality: "English"},
	    {name: "Kevin Stones", nationality: "Irish"},
	    {name: "Valeria Bertrazzi", nationality: "Italian"},
	    {name: "Thomas Muller", nationality: "German"},
	    {name: "Leonardo Di Mateo", nationality: "Italian"},
	    {name: "Kris Lee", nationality: "Irish" },
	    {name: "Roberto Sanchez", nationality: "Spanish"},
	    {name: "Camille Lombrad", nationality: "French"},
	    {name: "Louise Leblanc", nationality: "French"}
	]

assistants.addAssistant = function () {
	assistants.entries.push(newAssistant);
	var newAssistant = {};
}

	return assistants;
})
*/

app.controller('Universities', ['$scope', '$http', function($scope, $http) {
    $http.get("json/universidades.json").success(function(data) {
        $scope.universidades = data;
    });

}]);

app.controller('Posts', ['$scope', '$http', function($scope, $http, localStorageService) {
    $http.get("json/posts.json").success(function(data) {
        $scope.posts = data;
        });

        $scope.asistentes = [
            { name: "James Smith", nationality: "English" },
            { name: "Juan García", nationality: "Spanish" },
            { name: "Eduardo Cruz", nationality: "Spanish" },
            { name: "Jurgen Low", nationality: "German" },
            { name: "Jeremy Sagna", nationality: "French" },
            { name: "Emilio Fernandez", nationality: "Spanish" },
            { name: "Bianca Sabatini", nationality: "Italian" },
            { name: "Chloe Hart", nationality: "English" },
            { name: "Kevin Stones", nationality: "Irish" },
            { name: "Valeria Bertrazzi", nationality: "Italian" },
            { name: "Thomas Muller", nationality: "German" },
            { name: "Leonardo Di Mateo", nationality: "Italian" },
            { name: "Kris Lee", nationality: "Irish" },
            { name: "Roberto Sanchez", nationality: "Spanish" },
            { name: "Camille Lombrad", nationality: "French" },
            { name: "Louise Leblanc", nationality: "French" }
        ];

        $scope.random = Math.floor(Math.random() * $scope.asistentes.length);
        $scope.list = $scope.getElementByID('asistentes');
        list.appendChild($scope.asistentes[random]);

        $scope.nuevoAsistente = {};

    $scope.addAssistant = function() {
        $scope.asistentes.push($scope.nuevoAsistente);
    }
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
