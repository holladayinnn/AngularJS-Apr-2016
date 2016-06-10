angular.module('MyApp.Exercise')

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