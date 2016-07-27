'use strict';

/* Controllers */

angular.module('Erasmore.controllers', [])
  .controller('Faculties', ['$scope', '$http', function($scope, $http) {
  	 $http.get("json/facultades.json").success(function(data) {
        $scope.faculties = data;
    });
  }])

  .controller('Posts', ['$scope', '$http', function($scope, $http) {
  	$http.get("json/posts.json").success(function(data) {
        $scope.posts = data;
        });
	}])

  .controller('Assistants', ['$scope', '$http', function($scope, $http) {
  	$http.get("json/assistants.json").success(function(data) {
        $scope.assistants = data;
        });
  		
  		$scope.newAssistant = {};
  		$scope.addAssistant = function() {
        $scope.assistants.push($scope.newAssistant);
   		}

	}]);

/*
        $scope.random = Math.floor(Math.random() * $scope.asistentes.length);
        $scope.list = $scope.getElementByID('asistentes');
        list.appendChild($scope.asistentes[random]);
*/