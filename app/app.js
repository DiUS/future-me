'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngTouch',
  'angular-carousel.shifty',
  'angular-carousel',
  'myApp.skills',
  'myApp.subjects',
  'myApp.careers',
  'myApp.version',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/skills'});
}]);
