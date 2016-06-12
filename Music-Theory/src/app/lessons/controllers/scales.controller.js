(function (){
	angular.module('MyApp.Lessons')

	.controller('ScalesController', function() {
		var self = this;

		self.questions = [{question:"How many notes would be in a pentatonic scale?",
							correctAnswers: ['5', 'FIVE'],
							feedback: 'Your answer your should be a number',
							type: 'input'},
							{question:"How many notes are in the chromatic scale?",
							correctAnswers: ['12', 'TWELVE'],
							feedback: 'Your answer your should be a number',
							type: 'input'},
							{question:"A set of notes usually spanning an octave is a: ",
							correctAnswers: ['SCALE'],
							feedback: '',
							type: 'input'}];
		
	});
})();