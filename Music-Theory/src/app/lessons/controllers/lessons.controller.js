angular.module('MyApp.Lessons')

.controller('LessonsController', function(STATES, Keyboard, PlayTime, volumeIcon, $timeout) {
	var self = this;

	self.navStates = STATES;
	self.k = new Keyboard();

	self.disableButtons = false;

	self.enableButtons = function(type, length) {
		var waitTime = PlayTime.Calculate(type, length);
		$timeout(function() {
			self.disableButtons = false;
		}, waitTime);
	};

	self.playExample = function (type, values){
		self.disableButtons = true;
		if (type == "scaleAsc") {
			self.enableButtons("scale", values.length);
			self.k.playScale(values);
		}
		else if (type == "scaleDesc") {
			self.enableButtons("scale", values.length)
			self.k.playScaleDescending(values);
		}
		else {
			self.enableButtons("k_interval", 0);
			self.k.playInterval(values[0],values[1]);
		}
	};

	self.volumeLevel = 2;
	self.volumeIcon = volumeIcon[Math.round(self.volumeLevel/5)];
	self.changeVolume = function() {
		self.volumeIcon = volumeIcon[Math.round(self.volumeLevel/5)];
		self.k.setVolume((self.volumeLevel) * 0.1);
	};
});