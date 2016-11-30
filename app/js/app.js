'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ngRoute',
	'myApp.filters',
	'myApp.services',
	'myApp.directives'
]).
config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/profiles', {
			templateUrl: 'partials/profiles.html',
			controller: 'profilesController'
		});
		$routeProvider.when('/newprofile', {
			templateUrl: 'partials/createprofile.html',
			controller: 'newprofileController'
		});
		$routeProvider.when('/profileDetails/:id', {
			templateUrl: 'partials/details.html',
			controller: 'profileDetailsController'
		});
		$routeProvider.otherwise({
			redirectTo: '/profiles'
		});
	}
]);