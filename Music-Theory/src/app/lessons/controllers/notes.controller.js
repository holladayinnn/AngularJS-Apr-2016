angular.module('MyApp.Lessons')

.controller('NotesController', function() {
	var self = this;
	
	self.questions = [{question:"What are the 7 natural notes in Western Music?",
						correctAnswers: ["A, B, C, D, E, F, G", "A,B,C,D,E,F,G", "A B C D E F G"],
						feedback: 'Please make sure each note is in alphabetical order and is formatted consistently',
						type: 'input'},
						{question:"Does the note F# have another name?",
						possibleAnswers: ["Yes", 'No'],
						correctAnswer: "Yes",
						feedback: 'F# is synonymous with Gb',
						type: 'radio'}];
});