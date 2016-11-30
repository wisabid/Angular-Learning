'use strict';
angular.module('myApp')
  .controller('mainController', ['$scope',
    function($scope) {
      
     $scope.$on('nameentered', function(evt, current, previous, rejection){
      $scope.loggedInUser = current;      
     });

    }
  ]);