'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.skills',
  'myApp.subjects',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/skills'});
}]);

angular.module('angular-carousel', [
    'ngTouch',
    'angular-carousel.shifty'
]);
