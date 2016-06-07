angular.module('MyApp.Exercise')

.factory('IntervalTrainer', function(AudioContext, frequencyList, directions, intervalDistances, 
						itlevelDescription, $window, Volume) {
	function IntervalTrainer() {
		this.myAudioContext  = AudioContext.get();
  		this.frq1 = 0;
  		this.frq2 = 0;
  		this.volume = 1;
  		this.type = 'triangle';
  		this.oscillator = null;
  		this.oscillator2 = null;
  		this.gainNode = null;
  		this.gainNode2 = null;
  		this.direction = directions[0];
  		this.levels = itlevelDescription.length;
	}

	IntervalTrainer.prototype.createNew = function(level) {

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

	IntervalTrainer.prototype.play = function() {
		this.oscillator = this.myAudioContext.createOscillator();
		this.oscillator2 = this.myAudioContext.createOscillator();
		this.gainNode = this.myAudioContext.createGain();
		this.gainNode2 = this.myAudioContext.createGain();

		this.oscillator.type = this.type;
		this.oscillator2.type = this.type;
		this.oscillator.frequency.value = frequencyList[this.frq1];
		this.oscillator2.frequency.value = frequencyList[this.frq2];

		this.gainNode.gain.value = Volume.get();
		this.gainNode2.gain.value = Volume.get();

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

	IntervalTrainer.prototype.checkAnswer = function(answer) {
		if (this.frq2 - this.frq1 == answer) {
			return true;
		}
		else {
			return false;
		}
	}

	return IntervalTrainer;
})

.factory('ScoreKeeper', function ($timeout) {
	function ScoreKeeper() {
		this.score = 0;
		this.level = 0;
		this.numCorrect = 0;
		this.numAttempted = 0;
		this.numToPass = 10;
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