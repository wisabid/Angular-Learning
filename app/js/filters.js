'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]).
  filter('convToAge', ['convLib', function(convLib) {
    return function(dob) {
      return convLib.toAge(dob);
    };
  }]);
