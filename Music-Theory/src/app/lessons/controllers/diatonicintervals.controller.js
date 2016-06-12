(function(){
	angular.module('MyApp.Lessons')

	.controller('DiatonicIntervalsController', function() {
		var self = this;
		
		self.questions = [{question:"A Diatonic Interval is:",
							correctAnswer: '',
							possibleAnswers: '',
							feedback: 'Your answer should be one word.',
							type: 'radio'}];

	});
})();