angular.module('MyApp.Common')

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