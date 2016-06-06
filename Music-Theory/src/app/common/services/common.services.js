angular.module('MyApp.Common')
.value("frequencyList", [130.81, 138.59, 146.83, 
	155.56, 164.81, 174.61, 185.00, 196.00, 207.65, 
	220.00, 233.08, 246.94, 261.63,277.18,293.66,
	311.13,329.63,349.23,369.99,392.00,415.30,440.00,
	466.16,493.88,523.25,554.37,587.33,622.25,659.25,
	698.46,739.99,783.99,830.61,880.00,932.33,987.77,
	1046.50, 1108.73, 1174.66, 1244.51, 1318.51])

.value("volumeIcon", ['fa-volume-off', 'fa-volume-down', 'fa-volume-up'])

.service("PlayTime", function() {
	var self = this;

	self.Calculate = function (type, length) {
		if (type == "k_interval") {
			return 3100;
		}
		else if (type == "it_interval") {
			return 2000;
		}
		else if (type == "scale") {
			return ((length *.5)) * 1000;
		}
		else {
			return 0;
		}

	}
})

.service("AudioContext", function($window) {
	var self = this;
	var AudioContext = $window.AudioContext || $window.webkitAudioContext;
		self.myAudioContext  = new AudioContext;

	self.get = function () {
		return self.myAudioContext;
	}

})

.service("Volume", function () {
	var self = this;
	self.volume = 0.2;

	self.set = function (v) {
		self.volume = v;
	}

	self.get = function() {
		return self.volume;
	}
})

.factory("Keyboard", function(frequencyList, AudioContext, Volume) {
	function Keyboard() {
		this.myAudioContext  = AudioContext.get();
  		this.frequency = 440;
  		this.type = 'triangle';
  		this.oscillator = null;
  		this.gainNode = null;
	}

	Keyboard.prototype.setWaveType = function(wave) {
		this.type = wave;
	}

	Keyboard.prototype.getWaveType = function() {
		return this.type;
	}

	Keyboard.prototype.updateFrequency = function (note) {
		this.frequency = frequencyList[note];
	}

	Keyboard.prototype.stopNote = function() {
		this.oscillator.stop();
	}

	Keyboard.prototype.playNote = function(note) {
		this.oscillator = this.myAudioContext.createOscillator();
		this.gainNode = this.myAudioContext.createGain();

		this.updateFrequency(note);

		this.oscillator.type = this.type;
		this.oscillator.frequency.value = this.frequency;
		this.gainNode.gain.value = Volume.get();

		this.gainNode.connect(this.myAudioContext.destination);
		this.oscillator.connect(this.gainNode);	

		this.oscillator.start(this.myAudioContext.currentTime);
		// this.oscillator.stop(this.myAudioContext.currentTime + .3);
	}

	return Keyboard;
});