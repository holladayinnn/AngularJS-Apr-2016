'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var _UserModel = mongoose.model('_User');

/**
 * Signup
 */
exports.add_User = function(req, res) {
  // Init Variables
  var _user = new _User(req.body);

  // Then save the todo
  _user.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json({_id:toAdd._id, Username:_user.Username, Score: _user.Score});
    }
  });
};

exports.get_Users = function(req, res) {
    _UserModel.find().sort({age:-1}).limit(10).exec(function(err, _users) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        res.json(_users);
      }
    });
};

exports.update_User = function(req, res) {
  var todo = req.body;
  _UserModel.findOne({_id: _user._id}).exec(function(err, match) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      match.name = _user.name;
      match.save(function(err) {
        if (err) {
          return res.status(400).send({
            message: err
          });
        } else {
          res.json({_id:match._id});
        }
      });
    }
  });
};