angular.module('MyApp.Exercise')

.value("itlevelDescription", [{num: 0, description: "Unison and Octave"}, {num: 1, description: "Minor 2nd and Major 2nd"}, 
	{num: 2, description: "Minor 3rd and Major 3rd"}, {num: 3, description: "Perfect 4th, Diminished 5th, and Perfect 5th"}, 
	{num: 4, description: "Minor 6th and Major 6th"}, {num: 5, description: "Minor 7th and Major 7th"}, 
	{num: 6, description: "Unison, Octave, Minor 2nd, Major 2nd"}, 
	{num: 7, description: "Unison, Octave, Minor 2nd, Major 2nd, Minor 3rd, Major 3rd"},
	{num: 8, description: "Unison, Octave, Minor 2nd, Major 2nd, Minor 3rd, Major 3rd, Perfect 4th, Diminished 5th, Perfect 5th"},
	{num: 9, description: "Unison, Octave, Minor 2nd, Major 2nd, Minor 3rd, Major 3rd, Perfect 4th, Diminished 5th, Perfect 5th, Minor 6th, Major 6th"},
	{num: 10, description: "All combinations of previous intervals"},{num: 11, description: "Minor 9th and Major 9th"},
	{num: 12, description: "Minor 10th and Major 10th"}, {num: 13, description: "Minor 9th, Major 9th, Minor 10th, and Major 10th"},
	{num: 14, description: "All combinations"}]
);