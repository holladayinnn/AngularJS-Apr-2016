angular.module('MyApp.Exercise')

.controller('ExerciseController', function(STATES, Keyboard, levelDescription, pianoKeys, ScoreKeeper, EarTrainer) {
	var self = this;

	self.navStates = STATES;
	self.et = new EarTrainer();
	self.sk = new ScoreKeeper();
	self.k = new Keyboard();
	self.et.createNew(self.sk.level);
	self.pianoKeys = pianoKeys;
	self.levels = levelDescription;
	self.level = self.sk.level;
	self.levelUp = false;
	self.startOver = false;

	self.checkAnswer = function(answer, tester) {
		self.levelUp = false;
		self.startOver = false;

		self.sk.checkAnswer(answer, tester);
		if(self.level != self.sk.level) {
			self.level = self.sk.level;
			self.levelUp = true;
		}

		if(self.sk.numAttempted == 0) {
			self.startOver = true;
		}
	}

	self.resetLevel = function(level, tester) {
		self.levelUp = false;
		self.startOver = false;
		self.sk.resetLevel(level, tester);
		self.level = self.sk.level;
		self.et.createNew(self.sk.level);
		self.et.play();
	}
	
});