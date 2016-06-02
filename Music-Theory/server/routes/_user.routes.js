'use strict';


module.exports = function(app) {
	var path = require('path');
	var _userController = require('../controllers/_user.controller');

	app.route('/api/get_Users').get(_userController.get_Users);
	app.route('/api/add_User').put(_userController.add_User);
	app.route('/api/update_User').post(_userController.update_User);
};