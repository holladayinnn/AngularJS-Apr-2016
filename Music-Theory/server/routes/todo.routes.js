'use strict';

// 
/*
ToDo Routes:

All Requests need to specify a content type of 'application/json'

*/
module.exports = function(app) {
  
  var todoController = require('../controllers/todo.controller');

  // PUT request for adding a todo
  app.route('/api/addtodo').put(todoController.addTodo);

  //GET request for all todos
  app.route('/api/getTodos').get(todoController.getTodos);

  // GET request will return the details of the a todo with id ":id"
  // The :id parameter needs to be sent for this request
  app.route('/api/getTodoDetails/:id/').get(todoController.getTodoDetails);

  //POST request for updating a todo.
  app.route('/api/updateTodo').post(todoController.updateTodo);

};