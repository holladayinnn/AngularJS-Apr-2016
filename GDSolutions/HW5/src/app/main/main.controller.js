'use strict';

angular.module('sampleNode')

.controller('MainCtrl', function(TodoAddResource, TodoListResource, TodoDetailsResource, TodoUpdateResource) {
  var self = this;
  self.todos = [];
  self.isEditing = false;
  var _editingTodo;

  function getAllTodos() {
    TodoListResource.query().$promise
    .then(function(response) {
      self.todos = response;
    });
  }

  self.addTodo = function(todo) {
    TodoAddResource.addTodo(null, todo).$promise
    .then(function(response) {
      angular.extend(todo, response);
      self.todos.push(todo);
      self.userTodo = {};
    });
  };

  self.editTodo = function(todo) {
    TodoDetailsResource.get({id: todo._id}).$promise
    .then(function(response) {
      _editingTodo = todo;
      self.isEditing = true;
      self.userTodo = response;
    });
  };

  self.updateTodo = function(todo) {
    TodoUpdateResource.save(null, todo).$promise
    .then(function(response) {
      angular.extend(_editingTodo, response, todo);
      self.isEditing = false;
      self.userTodo = {};
    });
  };

  self.cancelUpdate = function() {
    self.userTodo = {};
    self.isEditing = false;
  };

  getAllTodos();
});