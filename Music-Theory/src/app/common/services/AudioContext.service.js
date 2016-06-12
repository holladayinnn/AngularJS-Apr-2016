(function() {
	angular.module('MyApp.Common')

	.service("AudioContext", function($window) {
		var self = this;
		var AudioContext = $window.AudioContext || $window.webkitAudioContext;
			self.myAudioContext  = new AudioContext;

		self.get = function () {
			return self.myAudioContext;
		}
	});
})();