'use strict';
angular.module('myApp')
  .controller('newprofileController', ['$scope', 'uiConfig', 'profilesService', '$location',
    function($scope, uiConfig, pS, $location) {
      var overlay = {};
      overlay.message = "Loading...";
      $scope.overlay = overlay;
      $scope.abtLimit = uiConfig.abtLimit;
      $scope.somethingwrong = false;
      $scope.overlay.message = false;
      $scope.addProfile = function(form, profile) {
        if (form.$invalid) {
          $scope.somethingwrong = true;
          overlay.errmessage = "Invalid Form";
          $scope.overlay = overlay;
        }
        else {
          pS.saveProfile(profile);
          $location.url('/profiles');
        }

      }

    }
  ]);