'use strict';

module.exports = function(app) {
  // ToDo Routes
  var yelpController = require('../controllers/yelp.controller');

  app.route('/api/yelp/search').get(yelpController.search);

};