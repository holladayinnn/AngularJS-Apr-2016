angular.module('MyApp.Contact')

.controller('ContactController', function($state, STATES) {
	var self = this;
	self.navStates = STATES;
	$state.go(STATES.kFeedbackState);
});