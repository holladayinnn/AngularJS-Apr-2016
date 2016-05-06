'use strict';

angular.module('sampleNode')

.controller('MainCtrl', function(TodoAddResource, TodoListResource, TodoDetailsResource, TodoUpdateResource) {
  var self = this;


  function getAllTodos() {
    TodoListResource.getToDos().$promise.then(function onSuccess(response) {
            self.todos = response;
           console.log('SUCCESS: ', response);
        }, function onError(errorMessage) {
           console.log('ERROR: ', errorMessage);
        });
      }

  self.addTodo = function(todo) {
    TodoAddResource.addToDo(todo).$promise.then(function onSuccess(response) {
         console.log('SUCCESS: ', response);
      }, function onError(errorMessage) {
         console.log('ERROR: ', errorMessage);
      });
      self.userTodo = {};
      console.log(todo);
      getAllTodos();
    };

  self.editTodo = function(todo) {
    TodoDetailsResource.toDoDetails(todo).$promise.then(function onSuccess(response) {
         console.log('SUCCESS: ', response);
      }, function onError(errorMessage) {
         console.log('ERROR: ', errorMessage);
      });
    };

  self.updateTodo = function(todo) {
    TodoUpdateResource.toDoUpdate({ 
    }).$promise.then(function onSuccess(response) {
         console.log('SUCCESS: ', response);
      }, function onError(errorMessage) {
         console.log('ERROR: ', errorMessage);
      });
  };

  self.cancelUpdate = function() {

  };

  getAllTodos();
});