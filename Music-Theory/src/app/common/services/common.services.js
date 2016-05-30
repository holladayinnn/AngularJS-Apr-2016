angular.module('MyApp.Common')
.value("frequencyList", [130.81, 138.59, 146.83, 
	155.56, 164.81, 174.61, 185.00, 196.00, 207.65, 
	220.00, 233.08, 246.94, 261.63,277.18,293.66,
	311.13,329.63,349.23,369.99,392.00,415.30,440.00,
	466.16,493.88,523.25])

.value("volumeIcon", ['fa-volume-off', 'fa-volume-down', 'fa-volume-up'])

.factory("Keyboard", function(frequencyList, $window) {
	function Keyboard() {
		var AudioContext = $window.AudioContext || $window.webkitAudioContext;
		this.myAudioContext  = new AudioContext;
  		this.frequency = 440;
  		this.volume = 1;
  		this.type = 'triangle';
  		this.oscillator = null;
  		this.oscillator2 = null;
  		this.oscillator3 = null;
  		this.oscillator4 = null;
  		this.gainNode = null;
  		this.gainNode2 = null;
  		this.gainNode3 = null;
  		this.gainNode4 = null;
	}

	Keyboard.prototype.setVolume = function(vol) {
		this.volume = vol;
	}

	Keyboard.prototype.getVolume = function() {
		return this.volume;
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
		this.gainNode.gain.value = this.volume;

		this.gainNode.connect(this.myAudioContext.destination);
		this.oscillator.connect(this.gainNode);	

		this.oscillator.start(this.myAudioContext.currentTime);
		// this.oscillator.stop(this.myAudioContext.currentTime + .3);
	}

	Keyboard.prototype.playScale = function(scaleArray) {
		console.log("here");
		for (var i = 0; i < scaleArray.length; i++) {
			this.oscillator = this.myAudioContext.createOscillator();
			this.gainNode = this.myAudioContext.createGain();
			
			this.gainNode.gain.value = 1;
			this.oscillator.type = this.type;
		 	this.oscillator.frequency.value = frequencyList[scaleArray[i]];
		 	this.gainNode.connect(this.myAudioContext.destination);
		 	this.oscillator.connect(this.gainNode);
		 	this.oscillator.start(this.myAudioContext.currentTime+(i*.5));
		 	this.oscillator.stop(this.myAudioContext.currentTime+(i*.5)+.5);
		}
	}

	Keyboard.prototype.playScaleDescending = function(scaleArray) {
		console.log("here");
		for (var i = scaleArray.length-1; i >= 0; i--) {
			this.oscillator = this.myAudioContext.createOscillator();
			this.gainNode = this.myAudioContext.createGain();
			
			this.gainNode.gain.value = 1;
			this.oscillator.type = this.type;
		 	this.oscillator.frequency.value = frequencyList[scaleArray[i]];
		 	this.gainNode.connect(this.myAudioContext.destination);
		 	this.oscillator.connect(this.gainNode);
		 	this.oscillator.start(this.myAudioContext.currentTime+((scaleArray.length-1-i)*.5));
		 	this.oscillator.stop(this.myAudioContext.currentTime+((scaleArray.length-1-i)*.5)+.5);
		}
	}

	Keyboard.prototype.playInterval = function(frq1, frq2) {
		this.oscillator = this.myAudioContext.createOscillator();
		this.oscillator2 = this.myAudioContext.createOscillator();
		this.oscillator3 = this.myAudioContext.createOscillator();
		this.oscillator4 = this.myAudioContext.createOscillator();
		this.gainNode = this.myAudioContext.createGain();
		this.gainNode2 = this.myAudioContext.createGain();
		this.gainNode3 = this.myAudioContext.createGain();
		this.gainNode4 = this.myAudioContext.createGain();

		this.oscillator.type = this.type;
		this.oscillator2.type = this.type;
		this.oscillator3.type = this.type;
		this.oscillator4.type = this.type;
		this.oscillator.frequency.value = frequencyList[frq1];
		this.oscillator2.frequency.value = frequencyList[frq2];
		this.oscillator3.frequency.value = frequencyList[frq1];
		this.oscillator4.frequency.value = frequencyList[frq2];

		this.gainNode.gain.value = 1;
		this.gainNode2.gain.value = 1;
		this.gainNode3.gain.value = 1;
		this.gainNode4.gain.value = 1;

		this.gainNode.connect(this.myAudioContext.destination);
		this.oscillator.connect(this.gainNode);
		this.gainNode2.connect(this.myAudioContext.destination);
		this.oscillator2.connect(this.gainNode2);
		this.gainNode3.connect(this.myAudioContext.destination);
		this.oscillator3.connect(this.gainNode3);
		this.gainNode4.connect(this.myAudioContext.destination);
		this.oscillator4.connect(this.gainNode4);

		this.oscillator.start(this.myAudioContext.currentTime);
		this.oscillator.stop(this.myAudioContext.currentTime + 1);

		this.oscillator2.start(this.myAudioContext.currentTime + 1);
		this.oscillator2.stop(this.myAudioContext.currentTime + 2);

		this.oscillator3.start(this.myAudioContext.currentTime + 2.1);
		this.oscillator4.start(this.myAudioContext.currentTime + 2.1);

		this.oscillator3.stop(this.myAudioContext.currentTime + 3.1);
		this.oscillator4.stop(this.myAudioContext.currentTime + 3.1);
	}

	return Keyboard;
}) ;