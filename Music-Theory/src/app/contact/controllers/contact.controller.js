angular.module('MyApp.Contact')

.controller('ContactController', function(STATES) {
	var self = this;
	self.navStates = STATES;
});