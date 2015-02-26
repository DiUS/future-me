'use strict';

angular.module('myApp.subjects', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/subjects', {
    templateUrl: 'subjects/subjects.html',
    controller: 'SubjectsCtrl'
  });
}])

.controller('SubjectsCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
		
	$rootScope.subjectChoice = 
	
	$scope.choose = function(choice) {
		$rootScope.subjectChoice = choice;
		$location.path('/careers');
	};
	
}]);