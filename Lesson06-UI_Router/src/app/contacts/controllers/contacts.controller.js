angular.module('MyApp.Contacts')

.controller('ContactsController', function(STATES) {
	var self = this;
	self.navStates = STATES;
	console.log('ContactsController initialized');
});