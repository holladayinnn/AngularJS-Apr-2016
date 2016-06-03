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
                                                pianoKeys, ScoreKeeper, IntervalTrainer) {
        var self = this;

        self.it = new IntervalTrainer();
        self.sk = new ScoreKeeper();
        self.k = new Keyboard();
        self.it.createNew(self.sk.level);
        self.pianoKeys = pianoKeys;
        self.itlevels = itlevelDescription;
        self.level = self.sk.level;
        self.levelUp = false;
        self.startOver = false;
        self.beatGame = false;
        self.k.setVolume(.2); 

        // (function() {
        //     self.hideText = "hideText"
        //     $timeout(function() { self.hideText = ""; }, 3000);

        // })();	   

        self.checkAnswer = function(answer) {
            self.levelUp = false;
            self.startOver = false;
            self.beatGame = false;

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
            self.levelUp = false;
            self.startOver = false;
            self.sk.resetLevel(level, self.it);
            self.level = self.sk.level;
            self.it.createNew(self.sk.level);
            $timeout(function(){
                self.it.play()
            }, 1000);
        }
    })
})();
