(function() {
  'use strict';

 angular.module('MyApp.Exercise')

    .directive('intervaltrainer', function() {
    	return {
    		templateUrl: 'app/exercises/partials/intervalTrainer.html',
    		controller: 'IntervalTrainerController as itCtrl',
            scope: true
    	}
    })

    .controller('IntervalTrainerController', function($timeout, Keyboard, itlevelDescription, 
                                                pianoKeys, ScoreKeeper, IntervalTrainer, Volume) {
        var self = this;

        self.it = new IntervalTrainer();
        self.sk = new ScoreKeeper();
        self.k = new Keyboard();
        self.it.createNew(self.sk.level);
        self.pianoKeys = pianoKeys;
        self.itlevels = itlevelDescription;
        self.level = self.sk.level;
        self.startGame = false;
        self.levelUp = false;
        self.startOver = false;
        self.beatGame = false;
        Volume.set(.2); 	   

        self.checkAnswer = function(answer) {
            self.levelUp = false;
            self.startOver = false;
            self.beatGame = false;
            self.numAnswered+=1;

            self.sk.checkAnswer(answer, self.it);

            if (self.level != self.sk.level) {
                self.level = self.sk.level;
                self.levelUp = true;
            }

            if (self.sk.numAttempted == 0) {
                self.startOver = true;
            }

            //rewrite below:
            if (self.level == self.it.levels && self.sk.numAttempted != 0 && self.sk.numAttempted % self.sk.numToPass == 0 
                    && self.sk.numCorrect > self.sk.numAttempted-self.sk.numToFail) {
                self.beatGame = true;
            }
        };

        self.resetLevel = function(level) {
            self.startGame = true;
            self.levelUp = false;
            self.startOver = false;
            self.sk.resetLevel(level, self.it);
            self.level = self.sk.level;
            self.it.createNew(self.sk.level);
            // $timeout(function(){
            //     self.it.play()
            // }, 1000);
        }
    })
})();
