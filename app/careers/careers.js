'use strict';

angular.module('myApp.careers', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/careers', {
    templateUrl: 'careers/careers.html',
    controller: 'CareersCtrl'
  });
}])

.controller('CareersCtrl', ['$rootScope', '$scope', '$location', 'CareersSvc', function($rootScope, $scope, $location, CareersSvc) {
	
	if(!$rootScope.subjectChoice) {
		$location.path('/');
	}

	$scope.results = [];

	CareersSvc.query().$promise.then( function(data) {


		$scope.careers = data.filter(function(n) {
			return n.subject.find($rootScope.subjectChoice);
		});
		$scope.hero = $scope.careers[0];
	});

	$scope.subjects = function() {
		$rootScope.subjectChoice = '';
		$location.path('/subjects');
	};

}]);