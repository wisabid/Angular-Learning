'use strict';
angular.module('myApp')
	.controller('favController', ['$scope', '$location', 'profilesService',
		function($scope, $location, pS) {
			// if (!$scope.favs) {
			// 	debugger;
			// 	$scope.favs = [];
			// }
			$scope.favs = pS.getFavourites();
			$scope.$on('favourited', function(evt, current, previous, rejection) {
				$scope.favs = pS.makeAsFavourite(current);
				// $scope.favs.push(current);
				$location.url('/profiles');

			});

		}
	]);