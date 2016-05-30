'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var ToDoSchema = new Schema({
  name: {
    type: String,
    trim: true,
    default: ''
  },
  lastUpdated: {
    type: Date,
    trim: true,
    default: Date.now
  },
  description: {
    type: String,
    trim: true
  }
});

mongoose.model('ToDo', ToDoSchema);
