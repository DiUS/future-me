'use strict';

angular.module('myApp.careers', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/careers', {
    templateUrl: 'careers/careers.html',
    controller: 'CareersCtrl'
  });
}])

.controller('CareersCtrl', ['$scope', 'CareersSvc', function($scope, CareersSvc) {
	$scope.careers = CareersSvc.query();
}]);