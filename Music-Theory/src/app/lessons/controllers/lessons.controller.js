angular.module('MyApp.Lessons')

.controller('LessonsController', function(STATES, PlayExample, Keyboard, PlayTime, $timeout) {
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
			PlayExample.ScaleAscending(values);
		}
		else if (type == "scaleDesc") {
			self.enableButtons("scale", values.length)
			PlayExample.ScaleDescending(values);
		}
		else {
			self.enableButtons("k_interval", 0);
			PlayExample.Interval(values[0],values[1]);
		}
	};
});