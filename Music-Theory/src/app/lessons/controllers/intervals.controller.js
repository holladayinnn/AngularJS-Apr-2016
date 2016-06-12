(function(){
	angular.module('MyApp.Lessons')

	.controller('IntervalsController', function() {
		var self = this;

		self.questions = [{question:"The difference between two notes or pitches is an:",
							correctAnswers: ['INTERVAL'],
							feedback: 'Your answer should be one word.',
							type: 'input'},
							{question:"Two notes that when played together sound conflicting with each other describes",
							possibleAnswers: ["Consonance", 'Dissonance'],
							correctAnswer: "Dissonance",
							feedback: '',
							type: 'radio'}];
	});
})();