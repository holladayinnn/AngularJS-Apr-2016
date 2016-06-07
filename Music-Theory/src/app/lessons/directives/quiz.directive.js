(function() {
  'use strict';

 angular.module('MyApp.Lessons')

    .directive('quiz', function() {
    	return {
    		templateUrl: 'app/lessons/partials/quiz.html',
    		controller: 'QuizController as qCtrl',
            scope: true
    	}
    })

    .controller('QuizController', function() {
        var self = this;

        
    })
})();