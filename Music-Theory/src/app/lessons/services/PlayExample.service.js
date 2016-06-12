(function(){
	angular.module('MyApp.Lessons')

	.service("PlayExample", function (AudioContext, Volume, frequencyList) {
		var self = this;
		self.myAudioContext = AudioContext.get();
		self.type = 'triangle';

		self.Interval = function (frq1, frq2) {
			var oscillator = self.myAudioContext.createOscillator();
			var oscillator2 = self.myAudioContext.createOscillator();
			var oscillator3 = self.myAudioContext.createOscillator();
			var oscillator4 = self.myAudioContext.createOscillator();
			var gainNode = self.myAudioContext.createGain();
			var gainNode2 = self.myAudioContext.createGain();
			var gainNode3 = self.myAudioContext.createGain();
			var gainNode4 = self.myAudioContext.createGain();

			oscillator.type = self.type;
			oscillator2.type = self.type;
			oscillator3.type = self.type;
			oscillator4.type = self.type;
			oscillator.frequency.value = frequencyList[frq1];
			oscillator2.frequency.value = frequencyList[frq2];
			oscillator3.frequency.value = frequencyList[frq1];
			oscillator4.frequency.value = frequencyList[frq2];

			gainNode.gain.value = Volume.get();
			gainNode2.gain.value = Volume.get();
			gainNode3.gain.value = Volume.get();
			gainNode4.gain.value = Volume.get();

			gainNode.connect(self.myAudioContext.destination);
			oscillator.connect(gainNode);
			gainNode2.connect(self.myAudioContext.destination);
			oscillator2.connect(gainNode2);
			gainNode3.connect(self.myAudioContext.destination);
			oscillator3.connect(gainNode3);
			gainNode4.connect(self.myAudioContext.destination);
			oscillator4.connect(gainNode4);

			oscillator.start(self.myAudioContext.currentTime);
			oscillator.stop(self.myAudioContext.currentTime + 1);

			oscillator2.start(self.myAudioContext.currentTime + 1);
			oscillator2.stop(self.myAudioContext.currentTime + 2);

			oscillator3.start(self.myAudioContext.currentTime + 2.1);
			oscillator4.start(self.myAudioContext.currentTime + 2.1);

			oscillator3.stop(self.myAudioContext.currentTime + 3.1);
			oscillator4.stop(self.myAudioContext.currentTime + 3.1);
		};

		self.ScaleAscending = function (scaleArray) {
			for (var i = 0; i < scaleArray.length; i++) {
				var oscillator = self.myAudioContext.createOscillator();
				var gainNode = self.myAudioContext.createGain();
				
				gainNode.gain.value = Volume.get();
				oscillator.type = self.type;
			 	oscillator.frequency.value = frequencyList[scaleArray[i]];
			 	gainNode.connect(self.myAudioContext.destination);
			 	oscillator.connect(gainNode);
			 	oscillator.start(self.myAudioContext.currentTime+(i*.5));
			 	oscillator.stop(self.myAudioContext.currentTime+(i*.5)+.5);
			}
		};

		self.ScaleDescending = function (scaleArray) {
			for (var i = scaleArray.length-1; i >= 0; i--) {
				var oscillator = self.myAudioContext.createOscillator();
				var gainNode = self.myAudioContext.createGain();
				
				gainNode.gain.value = Volume.get();
				oscillator.type = self.type;
			 	oscillator.frequency.value = frequencyList[scaleArray[i]];
			 	gainNode.connect(self.myAudioContext.destination);
			 	oscillator.connect(gainNode);
			 	oscillator.start(self.myAudioContext.currentTime+((scaleArray.length-1-i)*.5));
			 	oscillator.stop(self.myAudioContext.currentTime+((scaleArray.length-1-i)*.5)+.5);
			}
		};
	});
})();