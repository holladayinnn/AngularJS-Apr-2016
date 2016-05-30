angular.module('MyApp.Lessons')

.controller('LessonsController', function(STATES, Keyboard, volumeIcon) {
	var self = this;

	self.navStates = STATES;

	self.k = new Keyboard();

	self.volumeLevel = 10;
	self.volumeIcon = volumeIcon[Math.round(self.volumeLevel/5)];
	self.changeVolume = function() {
		self.volumeIcon = volumeIcon[Math.round(self.volumeLevel/5)];
		self.k.setVolume((self.volumeLevel) * 0.1);
	}
});