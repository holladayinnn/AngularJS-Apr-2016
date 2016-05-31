angular.module('MyApp.Exercise')

.controller('ExerciseController', function($timeout, STATES, Keyboard, etlevelDescription, pianoKeys, ScoreKeeper, EarTrainer) {
	var self = this;

	self.navStates = STATES;
	self.et = new EarTrainer();
	self.sk = new ScoreKeeper();
	self.k = new Keyboard();
	self.et.createNew(self.sk.level);
	self.pianoKeys = pianoKeys;
	self.etlevels = etlevelDescription;
	self.level = self.sk.level;
	self.levelUp = false;
	self.startOver = false;
	self.beatGame = false;
	self.k.setVolume(.2)

	self.checkAnswer = function(answer, tester) {
		self.levelUp = false;
		self.startOver = false;
		self.beatGame = false;

		self.sk.checkAnswer(answer, tester);
		if(self.level != self.sk.level) {
			self.level = self.sk.level;
			self.levelUp = true;
		}

		if(self.sk.numAttempted == 0) {
			self.startOver = true;
		}

		//rewrite below:
		if(self.level == tester.levels && this.sk.numAttempted != 0 && this.sk.numAttempted % this.sk.numToPass == 0 
			&& this.sk.numCorrect > this.sk.numAttempted-this.sk.numToFail) {
			self.beatGame = true;
		}
	}

	self.resetLevel = function(level, tester) {
		self.levelUp = false;
		self.startOver = false;
		self.sk.resetLevel(level, tester);
		self.level = self.sk.level;
		tester.createNew(self.sk.level);
		$timeout(function(){
			tester.play()
		}, 1000);
	}
	
});