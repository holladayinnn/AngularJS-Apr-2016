angular.module('MyApp.Exercise')
.value("directions", ["up","down","together"])

.value("intervalDistances", [0,12,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16])

.value("etlevelDescription", [{num: 0, description: "Unison and Octave"}, {num: 1, description: "Minor 2nd and Major 2nd"}, 
	{num: 2, description: "Minor 3rd and Major 3rd"}, {num: 3, description: "Perfect 4th, Diminished 5th, and Perfect 5th"}, 
	{num: 4, description: "Minor 6th and Major 6th"}, {num: 5, description: "Minor 7th and Major 7th"}, 
	{num: 6, description: "Unison, Octave, Minor 2nd, Major 2nd"}, 
	{num: 7, description: "Unison, Octave, Minor 2nd, Major 2nd, Minor 3rd, Major 3rd"},
	{num: 8, description: "Unison, Octave, Minor 2nd, Major 2nd, Minor 3rd, Major 3rd, Perfect 4th, Diminished 5th, Perfect 5th"},
	{num: 9, description: "Unison, Octave, Minor 2nd, Major 2nd, Minor 3rd, Major 3rd, Perfect 4th, Diminished 5th, Perfect 5th, Minor 6th, Major 6th"},
	{num: 10, description: "All combinations of previous intervals"},{num: 11, description: "Minor 9th and Major 9th"},
	{num: 12, description: "Minor 10th and Major 10th"}, {num: 13, description: "Minor 9th, Major 9th, Minor 10th, and Major 10th"},
	{num: 14, description: "All combinations"}])

.value("pianoKeys", [{interval: "Perfect Unison", class: "ivory"}, {interval: "Minor 2nd", class: "ebony"},
	{interval: "Major 2nd", class: "ivory"},{interval: "Minor 3rd", class: "ebony"}, 
	{interval: "Major 3rd", class: "ivory"}, {interval: "Perfect 4th", class: "ivory"},
	{interval: "Dim. 5th", class: "ebony"}, {interval: "Perfect 5th", class: "ivory"}, 
	{interval: "Minor 6th", class: "ebony"}, {interval: "Major 6th", class: "ivory"},
	{interval: "Minor 7th", class: "ebony"}, {interval: "Major 7th", class: "ivory"}, 
	{interval: "Perfect Octave", class: "ivory"},{interval: "Minor 9th", class: "ebony"},
	{interval: "Major 9th", class: "ivory"}, {interval: "Minor 10th", class: "ebony"},
	{interval: "Major 10th", class: "ivory"}])

.factory('EarTrainer', function(frequencyList, directions, intervalDistances, etlevelDescription, $window) {
	function EarTrainer() {
		var AudioContext = $window.AudioContext || $window.webkitAudioContext;
		this.myAudioContext  = new AudioContext;
  		this.frq1 = 0;
  		this.frq2 = 0;
  		this.volume = 1;
  		this.type = 'triangle';
  		this.oscillator = null;
  		this.oscillator2 = null;
  		this.gainNode = null;
  		this.gainNode2 = null;
  		this.direction = directions[0];
  		this.levels = etlevelDescription.length;
	}

	EarTrainer.prototype.createNew = function(level) {

		if(level <= 5) {
			this.direction = directions[Math.floor(Math.random() * 2)];
		}
		else {
			this.direction = directions[Math.floor(Math.random() * 3)];
		}

		this.frq1 = Math.floor(Math.random() * 25);
		if (level <= 2) {
			this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * 2)) + (2*level)];
		}
		else if(level == 3) {
			this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * 3)) + (2*level)];
		}
		else if(level <= 5) {
			this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * 2)) + (2*level + 1)];
		}
		else if(level <= 7) {
			this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * (2*(level-6) + 4)))];
		}
		else if(level <= 10) {
			this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * (2*(level-8) + 9))) ];
		}
		else if(level <= 12) {
			this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * 2)) +(13 + (2*(level-11)))];
		}
		else if(level == 13) {
			this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * 4)) + 13];
		}
		else if(level == 14) {
			this.frq2 = this.frq1 + intervalDistances[(Math.floor(Math.random() * 17))];
		}
	}

	EarTrainer.prototype.play = function() {
		this.oscillator = this.myAudioContext.createOscillator();
		this.oscillator2 = this.myAudioContext.createOscillator();
		this.gainNode = this.myAudioContext.createGain();
		this.gainNode2 = this.myAudioContext.createGain();

		this.oscillator.type = this.type;
		this.oscillator2.type = this.type;
		this.oscillator.frequency.value = frequencyList[this.frq1];
		this.oscillator2.frequency.value = frequencyList[this.frq2];

		this.gainNode.gain.value = .2;
		this.gainNode2.gain.value = .2;

		this.gainNode.connect(this.myAudioContext.destination);
		this.oscillator.connect(this.gainNode);
		this.gainNode2.connect(this.myAudioContext.destination);
		this.oscillator2.connect(this.gainNode2);

		if(this.direction == "up")
		{
			this.oscillator.start(this.myAudioContext.currentTime);
			this.oscillator.stop(this.myAudioContext.currentTime + 1);

			this.oscillator2.start(this.myAudioContext.currentTime + 1);
			this.oscillator2.stop(this.myAudioContext.currentTime + 2);
		}
		else if(this.direction == "down") {
			this.oscillator2.start(this.myAudioContext.currentTime);
			this.oscillator2.stop(this.myAudioContext.currentTime + 1);

			this.oscillator.start(this.myAudioContext.currentTime + 1);
			this.oscillator.stop(this.myAudioContext.currentTime + 2);
		}
		else {
			this.oscillator.start(this.myAudioContext.currentTime);
			this.oscillator.stop(this.myAudioContext.currentTime + 1);

			this.oscillator2.start(this.myAudioContext.currentTime);
			this.oscillator2.stop(this.myAudioContext.currentTime + 1);
		}
	}

	EarTrainer.prototype.checkAnswer = function(answer) {
		if (this.frq2 - this.frq1 == answer) {
			return true;
		}
		else {
			return false;
		}
	}

	return EarTrainer;
})

.factory('ScoreKeeper', function ($timeout) {
	function ScoreKeeper() {
		this.score = 0;
		this.level = 0;
		this.numCorrect = 0;
		this.numAttempted = 0;
		this.numToPass = 2;
		this.numToFail = 3;
	}

	ScoreKeeper.prototype.resetLevel = function (level, tester){
		this.score = 0;
		this.level = level;
		this.numCorrect = 0;
		this.numAttempted = 0;
		tester.createNew(this.level);
	}

	ScoreKeeper.prototype.addtoScore = function () {
		this.score += 5 * (this.level+1);
	}

	ScoreKeeper.prototype.checkAnswer = function (answer, tester) {
		this.numAttempted++;
		if (tester.checkAnswer(answer) == true) {
			this.addtoScore();
			this.numCorrect++;
		}

		if (this.numAttempted != 0) {
			if(this.numAttempted % this.numToPass == 0 && this.numCorrect > this.numAttempted-this.numToFail) {
				if(this.level < tester.levels)
				{
					this.level+=1;
				}
				else {
					this.resetLevel(this.level, tester);
				}
			}
			else if (this.numCorrect <= this.numAttempted-this.numToFail){
				this.resetLevel(this.level, tester);
			}
		}
		tester.createNew(this.level);

		$timeout(function() {
			tester.play();
		}, 1000);
	}

	return ScoreKeeper;
});