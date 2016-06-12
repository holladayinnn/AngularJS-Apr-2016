(function (){
	angular.module('MyApp.Freeplay')

	.controller('FreeplayController', function(ngAudio, STATES, Keyboard, volumeIcon, Volume) {
		var self = this;
		self.k = new Keyboard();
		self.playing = false;
		self.buttonText = "Play"
	 	self.beat = null;

		self.playBeat = function () {
			if (self.playing) {
				self.playing = false;
				self.beat.stop();
				self.buttonText = "Play"
			}
			else {
				self.beat = ngAudio.load("app/common/sounds/jdilla.mp3");
				self.playing = true;
				self.beat.play();
				self.buttonText = "Stop"
			}
		}
	});
})();