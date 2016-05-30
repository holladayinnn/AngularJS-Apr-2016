angular.module('MyApp.Eartraining')
.value("directions", ["up","down","together"])

.value("intervalDistances", [0,12,1,2,3,4,5,6,7,8,9,10,11])

.value("levelDescription", [{num: 0, description: "Unison and Octave"}, {num: 1, description: "Minor 2nd and Major 2nd"}, 
	{num: 2, description: "Minor 3rd and Major 3rd"}, {num: 3, description: "Perfect 4th, Diminished 5th, and Perfect 5th,"}, 
	{num: 4, description: "Minor 6th and Major 6th"}, {num: 5, description: "Minor 7th and Major 7th"}])

.value("pianoKeys", [{interval: "Perfect Unison", class: "ivory"}, {interval: "Minor 2nd", class: "ebony"},
	{interval: "Major 2nd", class: "ivory"},{interval: "Minor 3rd", class: "ebony"}, 
	{interval: "Major 3rd", class: "ivory"}, {interval: "Perfect 4th", class: "ivory"},
	{interval: "Dim. 5th", class: "ebony"}, {interval: "Perfect 5th", class: "ivory"}, 
	{interval: "Minor 6th", class: "ebony"}, {interval: "Major 6th", class: "ivory"},
	{interval: "Minor 7th", class: "ebony"}, {interval: "Major 7th", class: "ivory"}, 
	{interval: "Perfect Octave", class: "ivory"}])

.factory('EarTrainer', function(frequencyList, directions, intervalDistances, $window) {
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

	}

	EarTrainer.prototype.createNew = function(level) {
		this.direction = directions[Math.floor(Math.random() * 2)];

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
	}

	EarTrainer.prototype.playInterval = function() {
		this.oscillator = this.myAudioContext.createOscillator();
		this.oscillator2 = this.myAudioContext.createOscillator();
		this.gainNode = this.myAudioContext.createGain();
		this.gainNode2 = this.myAudioContext.createGain();

		this.oscillator.type = this.type;
		this.oscillator2.type = this.type;
		this.oscillator.frequency.value = frequencyList[this.frq1];
		this.oscillator2.frequency.value = frequencyList[this.frq2];

		this.gainNode.gain.value = 1;
		this.gainNode2.gain.value = 1;

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

.factory('ScoreKeeper', function (levelDescription) {
	function ScoreKeeper() {
		this.score = 0;
		this.level = 0;
		this.levelDescription = levelDescription[this.level].description;
		this.numCorrect = 0;
		this.numAttempted = 0;
	}

	ScoreKeeper.prototype.resetLevel = function (level, tester){
		this.score = 0;
		this.level = level;
		this.levelDescription = levelDescription[this.level].description;
		this.numCorrect = 0;
		tester.createNew(this.level);
	}

	ScoreKeeper.prototype.addtoScore = function () {
		this.score += 5 * (this.level+1);
	}

	ScoreKeeper.prototype.checkAnswer = function (answer, tester) {
		if (tester.checkAnswer(answer) == true) {
			this.addtoScore();
			this.numCorrect++;
			console.log("correct")
		}
		else {
			console.log("false")
		}
		this.numAttempted++;
		tester.createNew(this.level);
	}

	return ScoreKeeper;
});