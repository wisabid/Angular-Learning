'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
value('version', '0.1').
value('uiConfig', {
	abtLimit: 100,
	resultsLimit: 10
}).factory('convLib', function() {
	function toAge(dob) {
		var age = 0;
		if (dob) {
		var yr = dob.substr(dob.length - 4, 4),
			currYear = new Date().getFullYear(),
			age = currYear - yr;
		}
		return age;
	}

	return {
		toAge : toAge
	};
});