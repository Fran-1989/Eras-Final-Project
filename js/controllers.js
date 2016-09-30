'use strict';

/* Controllers */

angular.module('Erasmore.controllers', [])
    .controller('Faculties', ['$scope', '$http', function($scope, $http) {
        $http.get("json/facultades.json").success(function(data) {
            $scope.faculties = data;
        });
    }])
 
/*.controller('Users', ['$scope', '$http', '$localStorage', '$location', function($scope, $http, $localStorage, $location) {
    $http.get("json/users.json").success(function(data) {
        $scope.users = data;
        $scope.users1 = $scope.users[0];
        console.log($scope.users)
        $scope.addUser = function() {
            var userName = $('#user').val();
            var userPassword = $('#password').val();
            var original = $scope.users
            var template = {'user': userName, 'password': userPassword}
            console.log(original.indexOf(template))
            var subsets = ['user','password']
            if(original.indexOf(template) != -1){
              $localStorage.newUser=template;
              console.log('El usuario NO existe') 
            }else{
              console.log('El usuario existe') 
            }
            
            /*console.log(userName);
            console.log(userPassword);
            console.log($scope.users.user);
            console.log($scope.users.password);
            console.log(userName == $scope.users.user && userPassword == $scope.users.password);
            for (x in $scope.users[0]) {
                console.log(user.user);
                console.log(user.password);
                if (userName == users[user] && userPassword == user.password) {
                    $localStorage.user = [{ "user": userName, "password": userPassword }];
                }
            
        };
    });
}])
*/
.controller('Posts', ['$scope', '$http', '$localStorage', function($scope, $http, $localStorage) {
    $http.get("json/posts.json").success(function(data) {
        $scope.posts = data;
    });
    $scope.assistants = [
        { id: 1, name: "James Smith", nationality: "English" },
        { id: 3, name: "Juan García", nationality: "Spanish" },
        { id: 3, name: "Eduardo Cruz", nationality: "Spanish" },
        { id: 4, name: "Jurgen Low", nationality: "German" },
    ];

    $localStorage.assistantList = $scope.assistants;
    //$scope.assistants = $localStorage.assistantList;
    
    //if($localStorage.assistants !== undefined) {
    // JSON.parse($local);
    // }

    $scope.newAssistant = {};

    // var index = Math.flo or(Math.random() * $scope.assistants.length);

    $scope.addAssistant = function() {
        $scope.assistants.push($scope.newAssistant);
        $scope.newAssistant = "";
        //localStorage['assistantList'] = JSON.stringify($scope.newAssistant);
        $localStorage.assistantList = $scope.assistants;
        console.log($localStorage.assistantList);
    };

    $scope.assistants = $localStorage.assistantList;
    console.log($scope.assistants);
}])


/*

  .controller('Assistants', ['$scope', '$http', function($scope, $http) {
    $http.get("json/assistants.json").success(function(data) {
        $scope.assistants = data;
        });
      
      $scope.newAssistant = {};
      $scope.addAssistant = function() {
        $scope.assistants.push($scope.newAssistant);
      }

  }]);


        
        $scope.list = $scope.getElementByID('asistentes');
        list.appendChild($scope.asistentes[random]);
*/
