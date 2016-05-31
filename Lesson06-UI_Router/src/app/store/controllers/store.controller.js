angular.module('MyApp.Store')

.controller('StoreController', function(STATES) {
	var self = this;
	self.navStates = STATES;
	console.log('StoreController initialized');
});