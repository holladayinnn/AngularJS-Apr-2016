(function () {
	angular.module('MyApp.Lessons')

	.controller('MajorScaleController', function() {
		var self = this;

		self.questions = [{question:"Using the major scale formula, what are the notes of the G major scale?",
							correctAnswers: ['G A B C D E F#', 'G,A,B,C,D,E,F#', 'G, A, B, C, D, E, F#', 'G A B C D E F# G',
							'G,A,B,C,D,E,F#,G', 'G, A, B, C, D, E, F#, G'],
							feedback: 'Make sure your format is consistent and in the order of the scale.',
							type: 'input'}];
	});
})();