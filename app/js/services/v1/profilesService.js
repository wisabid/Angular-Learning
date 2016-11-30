'use strict';

angular.module('myApp.services')
	.factory('profilesService', ['$http', '$q',
		function($http, $q) {
			var profiles;
			return {
				getProfiles: function() {
					var deferred = $q.defer();
					$http({
						method: 'GET',
						url: 'data/profiles.json'
					}).
					success(function(data) {
						profiles = data.profiles;
						deferred.resolve(data.profiles);
					}).
					error(function(data) {
						deferred.reject();
					});
					return deferred.promise;
				},
				saveProfile: function(profile) {
					profiles.push(profile);
				},
				getProfile: function(profileId) {
					var deferred = $q.defer();
					$http({
						method: 'GET',
						url: 'data/profiles.json'
					}).success(function(data) {
						var profiles = data.profiles,
							selectedProfile;
						angular.forEach(profiles, function(profile) {
							if (profile.id == profileId) {
								selectedProfile = profile;
							}
						});
						deferred.resolve(selectedProfile);
					}).error(function(data) {
						deferred.reject();
					});
					return deferred.promise;
				}
			}
		}
	]);