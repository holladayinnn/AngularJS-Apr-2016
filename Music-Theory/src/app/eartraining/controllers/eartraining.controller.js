angular.module('MyApp.Eartraining')

.controller('EartrainingController', function(STATES, Keyboard, levelDescription, pianoKeys, ScoreKeeper, EarTrainer) {
	var self = this;
	self.navStates = STATES;

	self.et = new EarTrainer();
	self.sk = new ScoreKeeper();
	self.k = new Keyboard();
	self.et.createNew(self.sk.level);
	self.pianoKeys = pianoKeys;
	self.levels = levelDescription;
	
});