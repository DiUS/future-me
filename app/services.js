angular.module('myApp.services', ['ngResource'])
.factory('CareersSvc', function($resource) {
	return $resource('/app/components/json/careers.json', {} );
});