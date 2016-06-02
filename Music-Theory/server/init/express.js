'use strict';

var express = require('express');
var bodyParser = require('body-parser');

function initializeModels() {
	require('../models/_user.model');
}

function initializeStaticallyServedDirectories(app) {
	app.use(express.static('./dist'));
	app.use(express.static('./uploads'));
}

function initailizeRoutes(app) {
	// Load in Route handlers
	require('../routes/_user.routes')(app);
}

module.exports = function() {
	var app = express();
	app.use(bodyParser.json());

	initializeModels();
	initializeStaticallyServedDirectories(app);
	initailizeRoutes(app);

	return app;
};
