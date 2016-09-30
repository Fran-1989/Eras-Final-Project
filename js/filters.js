'use strict';

/* Filters */

angular.module('Erasmore.filters', []).
  filter('random', function() {
    return function() {
      return $scope.index = Math.floor(Math.random() * $scope.assistants.length);
    };
  });
