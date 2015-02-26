'use strict';

angular.module('myApp.subjects', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/subjects', {
    templateUrl: 'subjects/subjects.html',
    controller: 'SubjectsCtrl'
  });
}])

.controller('SubjectsCtrl', ['CareersSvc', '$scope', function(CareersSvc, $scope) {
	

}]);