'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
  	console.log($scope.loading);
  	$scope.loading = false;

  	setTimeout(function(){
  		// $scope.loading = true;
  	}, 500);

  	$scope.profile = {
  		name : "Abid",
  		age : 29,
  		imageUrl : "00MfhhQb.jpg",
  		qualification : "BTech",
  		abtyourself : "Fun Loving lad"
  	};

  	



  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
