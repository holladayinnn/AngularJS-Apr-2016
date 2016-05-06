'use strict';

angular.module('sampleNode')

.controller('MainCtrl', function(TodoAddResource, TodoListResource, TodoDetailsResource, TodoUpdateResource) {
  var self = this;


  function getAllTodos() {
    TodoListResource.getToDos()
    .$promise.then(function onSuccess(response) {
           console.log('SUCCESS: ', response);
        }, function onError(errorMessage) {
           console.log('ERROR: ', errorMessage);
        });
      }

  self.addTodo = function(todo) {
    TodoAddResource.addToDo().$promise.then(function onSuccess(response) {
         console.log('SUCCESS: ', response);
      }, function onError(errorMessage) {
         console.log('ERROR: ', errorMessage);
      });
    };

  self.editTodo = function(todo) {
    TodoDetailsResource.toDoDetails({ 
    }).$promise.then(function onSuccess(response) {
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