'use strict';

angular.module('myApp.services')
	.factory('profilesService', ['$http', '$q',
		function($http, $q) {
			var profiles = [{
				"id": 1,
				"name": "Abid",
				"dob": "20/09/1985",
				"imageUrl": "0NNxgwWb.jpg",
				"qualification": "BTech",
				"abtyourself": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ",
				"comments": [ {"name" : "ABC", "text" : "Nice Profile"},{"name" : "XYZ", "text" : "Good Profile"}]

			}, {
				"id": 2,
				"name": "Shamim PM",
				"dob": "20/09/1985",
				"imageUrl": "vMFAwVib.jpg",
				"qualification": "BTech",
				"abtyourself": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ",
				"comments": [ {"name" : "ABC", "text" : "sdfgsdgg Profile"},{"name" : "XYZ", "text" : "Gdfgdfgdfgdfood Profile"}]
			}, {
				"id": 3,
				"name": "Abid",
				"dob": "20/09/1985",
				"imageUrl": "00MfhhQb.jpg",
				"qualification": "BTech",
				"abtyourself": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ",
				"comments": [ {"name" : "ABC", "text" : "Nice Profile"},{"name" : "XYZ", "text" : "Good Profile"}]
			}, {
				"id": 4,
				"name": "Abid",
				"dob": "20/09/1985",
				"imageUrl": "00MfhhQb.jpg",
				"qualification": "BTech",
				"abtyourself": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ",
				"comments": [ {"name" : "ABC", "text" : "Nice Profile"},{"name" : "XYZ", "text" : "Good Profile"}]
			}, {
				"id": 5,
				"name": "Abid",
				"dob": "20/09/1985",
				"imageUrl": "00MfhhQb.jpg",
				"qualification": "BTech",
				"abtyourself": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ",
				"comments": [ {"name" : "ABC", "text" : "Nice Profile"},{"name" : "XYZ", "text" : "Good Profile"}]
			}],
			favs = [];
			return {
				getProfiles: function() {
					// var deferred = $q.defer();
					// $http({
					// 	method: 'GET',
					// 	url: 'data/profiles.json'
					// }).
					// success(function(data) {
					// 	profiles = data.profiles;
					// 	deferred.resolve(data.profiles);
					// }).
					// error(function(data) {
					// 	deferred.reject();
					// });
					// return deferred.promise;
					return profiles;
				},
				saveProfile: function(profile) {
					profiles.push(profile);
				},
				getProfile: function(profileId) {
					// var deferred = $q.defer();
					// $http({
					// 	method: 'GET',
					// 	url: 'data/profiles.json'
					// }).success(function(data) {
					// 	var profiles = data.profiles,
					// 		selectedProfile;
					// 	angular.forEach(profiles, function(profile) {
					// 		if (profile.id == profileId) {
					// 			selectedProfile = profile;
					// 		}
					// 	});
					// 	deferred.resolve(selectedProfile);
					// }).error(function(data) {
					// 	deferred.reject();
					// });
					// return deferred.promise;
					var selectedProfile = {};
					angular.forEach(profiles, function(profile) {
						if (profile.id == profileId) {
							selectedProfile = profile;
						}
					});
					return selectedProfile;

				},
				makeAsFavourite: function(fav){
					favs.push(fav);
					return favs;
				},
				getFavourites: function() {
					return favs;
				}
			}
		}
	]);