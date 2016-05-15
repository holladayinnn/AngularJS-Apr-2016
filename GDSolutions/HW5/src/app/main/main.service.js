'use strict';

angular.module('sampleNode')

.factory('TodoAddResource', function($resource) {
	return $resource('/api/addTodo', null, {
		addTodo: {
			method: 'PUT'
		}
	});
})

.factory('TodoListResource', function($resource) {
	return $resource('/api/getTodos');
})

.factory('TodoDetailsResource', function($resource) {
	return $resource('/api/getTodoDetails/:id');
})

.factory('TodoUpdateResource', function($resource) {
	return $resource('/api/updateTodo');
});