'use strict';

angular.module('sampleNode')

.factory('TodoAddResource',  function($resource) {
	var resourceObject = $resource('/api/addtodo', null, {
		addToDos: {
			method: 'PUT',
			isArray: true
		}
	});
	return resourceObject;
})

.factory('TodoListResource', function($resource) {
	var resourceObject = $resource('/api/getTodos', null, {
		getToDos: {
			method: 'GET',
			isArray: true
		}
	});
	return resourceObject;
})

.factory('TodoDetailsResource', function($resource) {
	var resourceObject = $resource('/api/getTodoDetails/:id/', {
    		id: '@id'
    	}, {
		toDoDetails: {
			method: 'GET'
		}
	});
	return resourceObject;
})

.factory('TodoUpdateResource', function($resource) {
	var resourceObject = $resource('/api/updateTodo', null, {
		updateToDo: {
			method: 'POST'
		}
	});
	return resourceObject;
});