angular.module('MyApp.Exercise')

.factory('LeaderboardListResource', function($resource) {
	return $resource('/api/get_Users');
})