'use strict';
angular.module('myApp')
	.controller('profileDetailsController', ['$scope', 'profilesService', 'uiConfig', '$location', '$routeParams',
		function($scope, pS, uiConfig, $location, $routeParams) {
			var profileId = $routeParams.id;
			// pS.getProfile(profileId).then(function(response){
			//   $scope.profile = response;
			// }); 

			$scope.profile = pS.getProfile(profileId);
			$scope.commentlook = true;
			$scope.addComment = function(comment) {
				if(!$scope.profile.comments ){
					$scope.profile.comments = [];
				}
				$scope.profile.comments.push(angular.copy($scope.comment));
				$scope.commentlook = false;
				$scope.comment = {};

				$scope.$emit('nameentered', comment.name);
			}




		}
	]);