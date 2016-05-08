'use strict';

angular.module('sampleNode')

.controller('MainCtrl', function(TodoAddResource, TodoListResource, TodoDetailsResource, TodoUpdateResource) {
  var self = this;


  function getAllTodos() {
    TodoListResource.getToDos().$promise.then(function onSuccess(response) {
            self.todos = response;
           //console.log('SUCCESS: ', response);
        }, function onError(errorMessage) {
           console.log('ERROR: ', errorMessage);
        });
      }

  self.addTodo = function(todo) {
    TodoAddResource.addToDo(todo).$promise.then(function onSuccess(response) {
         //console.log('SUCCESS: ', response);
      }, function onError(errorMessage) {
         console.log('ERROR: ', errorMessage);
      });
      self.userTodo = {};
      getAllTodos();
    };

  self.editTodo = function(todo) {
    TodoDetailsResource.toDoDetails({id: todo._id}).$promise.then(function onSuccess(response) {
         self.isEditing = true;
         self.userTodo = response;
         //console.log('SUCCESS: ', response);
      }, function onError(errorMessage) {
         console.log('ERROR: ', errorMessage);
      });
    };

  self.updateTodo = function(todo) {
    TodoUpdateResource.updateToDo(todo).$promise.then(function onSuccess(response) {
         self.isEditing = false;
         self.userTodo = {};
         //console.log('SUCCESS: ', response);
      }, function onError(errorMessage) {
         console.log('ERROR: ', errorMessage);
      });
  };

  self.cancelUpdate = function() {
    self.isEditing = false;
    self.userTodo = {};
  };

  getAllTodos();
});