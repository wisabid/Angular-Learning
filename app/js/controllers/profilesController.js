'use strict';
angular.module('myApp')
  .controller('profilesController', ['$scope', 'profilesService', 'uiConfig', '$location',
    function($scope, pS, uiConfig, $location) {
      $scope.loading = true;
      var overlay = {};
      overlay.message = "Loading...";
      $scope.overlay = overlay;
      $scope.abtLimit = uiConfig.abtLimit;

      // var profiles = pS.getProfiles().then(function(response) {
      //   $scope.profiles = response;
      // }).finally(function() {
      //   $scope.loading = false;
      //   $scope.overlay.message = false;
      // });

      var profiles = pS.getProfiles();
        $scope.profiles = profiles;
        $scope.loading = false;
        $scope.overlay.message = false;

        $scope.addToFav = function(profile) {
        	$scope.$broadcast('favourited', profile);
        	$scope.showfav = true;
        }
      
      
    }
  ]);