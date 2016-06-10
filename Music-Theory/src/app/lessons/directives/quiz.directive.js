(function() {
  'use strict';

 angular.module('MyApp.Lessons')

    .directive('quiz', function() {
    	return {
    		templateUrl: 'app/lessons/partials/templates/quiz.html',
    		controller: 'QuizController as qCtrl',
            bindToController: true,
            scope: {
                questions: '=',
                link: '='
            }
        }
    })

    .controller('QuizController', function(QuizService, ngAudio, Scroll) {
        var self = this;

        self.allCorrect = false;

        self.checkAnswer = function(q) {
            if(q.userAnswer) {
                if(q.type == 'input') {
                    q.correct = QuizService.checkInput(q.userAnswer, q.correctAnswers);
                    
                }
                else if(q.type = 'radio') {
                    q.correct = QuizService.checkRadio(q.userAnswer, q.correctAnswer);
                }

                self.allCorrect = QuizService.checkAllAnswers(self.questions);
            }
        }

        self.scrollToTop = function() {
            Scroll.scrollToTop();
        }
    })
})();