'use strict';

angular.module('myApp.subjects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/subjects', {
    templateUrl: 'subjectss/subjects.html',
    controller: 'SubjectsCtrl'
  });
}])

.controller('SubjectsCtrl', [function() {

}]);