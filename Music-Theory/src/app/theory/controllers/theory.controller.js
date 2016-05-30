angular.module('MyApp.Theory')

.controller('TheoryController', function(STATES) {
	var self = this;
	self.navStates = STATES;
});