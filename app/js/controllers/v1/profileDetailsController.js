'use strict';
angular.module('myApp')
  .controller('profileDetailsController', ['$scope', 'profilesService', 'uiConfig', '$location', '$routeParams',
    function($scope, pS, uiConfig, $location, $routeParams) {
      var profileId = $routeParams.id;
      pS.getProfile(profileId).then(function(response){
        $scope.profile = response;
      }); 

      
    }
  ]);