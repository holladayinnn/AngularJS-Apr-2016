'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
  Username: {
    type: String,
    trim: true,
    default: ''
  },
  // profileImage: {
  //   type: String,
  //   trim: true
  // },
  Score: {
    type: Number
  }

});

mongoose.model('_User', UserSchema);
