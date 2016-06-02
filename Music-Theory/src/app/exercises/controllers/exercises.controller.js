angular.module('MyApp.Exercise')

.controller('ExerciseController', function($timeout, _UserAddResource, 
	STATES, Keyboard, etlevelDescription, pianoKeys, ScoreKeeper, EarTrainer) {
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
	self.k.setVolume(.2);
	self._userAdded = false;

	self._user = {
		Username: "MusicalGenius",
		Score: 0
	};

	self.add_user = function(){
		self._userAdded = true;
		//Add user to database
		_UserAddResource.add_User(self._user).$promise
			.then(function(response) {
		});
	}

	self.checkAnswer = function(answer, tester) {
		self.levelUp = false;
		self.startOver = false;
		self.beatGame = false;

		self.sk.checkAnswer(answer, tester);

		if (self.sk.score > self._user.Score) {
			self._user.Score = self.sk.score;
			//Update Score for user
			if (self._userAdded) {

			}
		}

		if (self.level != self.sk.level) {
			self.level = self.sk.level;
			self.levelUp = true;
		}

		if (self.sk.numAttempted == 0) {
			self.startOver = true;
		}

		//rewrite below:
		if (self.level == tester.levels && self.sk.numAttempted != 0 && self.sk.numAttempted % self.sk.numToPass == 0 
			&& self.sk.numCorrect > self.sk.numAttempted-self.sk.numToFail) {
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