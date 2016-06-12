(function(){
	angular.module('MyApp.Exercise')

	.value("pianoKeys", [
		{note: 'C', interval: "Perfect Unison", class: "ivory"}, 
		{note:'C# Db', interval: "Minor 2nd", class: "ebony"},
		{note: 'D', interval: "Major 2nd", class: "ivory"},
		{note: 'D# Eb', interval: "Minor 3rd", class: "ebony"}, 
		{note: 'E', interval: "Major 3rd", class: "ivory"}, 
		{note: 'F', interval: "Perfect 4th", class: "ivory"},
		{note: 'F# Gb', interval: "Dim. 5th", class: "ebony"}, 
		{note: 'G', interval: "Perfect 5th", class: "ivory"}, 
		{note: 'G# Ab', interval: "Minor 6th", class: "ebony"}, 
		{note: 'A', interval: "Major 6th", class: "ivory"},
		{note: 'A# Bb', interval: "Minor 7th", class: "ebony"}, 
		{note: 'B', interval: "Major 7th", class: "ivory"}, 
		{note: 'C', interval: "Perfect Octave", class: "ivory"},
		{note:'C# Db', interval: "Minor 9th", class: "ebony"},
		{note: 'D', interval: "Major 9th", class: "ivory"}, 
		{note: 'D# Eb', interval: "Minor 10th", class: "ebony"},
		{note: 'E', interval: "Major 10th", class: "ivory"}]
	);
})();