angular.module('MyApp.Exercise')

.factory('_UserAddResource', function($resource) {
	return $resource('/api/add_User', null, {
		add_User: {
			method: 'PUT'
		}
	});
})

.factory('_UserUpdateResource', function($resource) {
	return $resource('/api/update_User');
})

.factory('LeaderboardListResource', function($resource) {
	return $resource('/api/get_Users');
});