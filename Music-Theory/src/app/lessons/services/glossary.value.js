angular.module('MyApp.Lessons')

.value("Glossary", [{
	term:'Note',
	def: 'The representation of a pitch or a frequency.  The note names are based on the first seven letters of the alphabet: A, B, C, D, E, F, G.  Notes with the same name can have different frequencies, but they will always be related by a factor of 2.',
	chapter: 1
}, {
	term:'Sharp',
	def: 'A note one half step above another note, usually referring to what would be a "black key" on the piano.',
	chapter: 1
},
{
	term:'Flat',
	def: 'A note one half step below another note, usually referring to what would be a "black key" on the piano.',
	chapter: 1
},
{
	term:'Whole Step',
	def: 'Two notes or half steps away.',
	chapter: 1
},
{
	term:'Half Step',
	def: 'One note away.',
	chapter: 1
},
{
	term:'Interval',
	def: 'The difference between two notes or pitches.',
	chapter: 1
},
{
	term:'Consonant',
	def: 'Notes that sound agreeable or harmonious when played together',
	chapter: 1
},
{
	term:'Dissonant',
	def: 'Notes that sound conflicting or tense when played together',
	chapter: 1
},
{
	term:'Scale',
	def: 'A set of notes, usually spanning one octave. Scales are typically the same set of notes ascending and descending, but not always. The notes may be written differently when the scale is ascending or descending, even if it uses the same notes.',
	chapter: 1
},
{
	term: 'Pentatonic Scale',
	def:'A five note scale',
	chapter: 1
},
{
	term: 'Hexatonic Scale',
	def:'A six note scale',
	chapter: 1
},
{
	term: 'Heptatonic Scale',
	def:'A seven note scale.  Heptatonic scales are the most commonly used.',
	chapter: 1
},
{
	term: 'Octatonic Scale',
	def:'An eight note scale.',
	chapter: 1
},
{
	term: 'Nonotonic Scale',
	def:'A nine note scale.',
	chapter: 1
},
{
	term: 'Decatonic Scale',
	def:'A ten note scale.',
	chapter: 1
},
{
	term: 'Dodecatonic Scale',
	def:'A twelve note scale.',
	chapter: 1
},
{
	term:'Whole Tone Scale',
	def: 'A hexatonic or six note scale comprised of only whole steps.',
	chapter: 1
},
{
	term:'Chromatic Scale',
	def: 'A dodecatonic or twelve note scale comprised of half steps.',
	chapter: 1
},
{
	term: 'Scale Formula',
	def: 'A set of whole steps/half steps/intervals that make up a scale',
	chapter: 1
},
{
	term: 'Major Scale',
	def: 'A heptatonic or seven note scale commonly recognized in solfege as Do, Re, Mi, Fa, So, La, Ti, Do and known modally as the ionian scale.  The formula for the major scale is whole step, whole step, half step, whole step, whole step, whole step, half step.',
	chapter: 1
},
{
	term: 'Key',
	def:'',
	chapter: 1
},
{
	term: 'Tonal Center',
	def:'',
	chapter: 1
},
{
	term: 'Tonic',
	def:'',
	chapter: 1
},
{
	term: 'Root',
	def:'',
	chapter: 1
},
{
	term: 'Diatonic',
	def:'Within the scale',
	chapter: 1
},
{
	term: 'Diatonic Interval',
	def:'An interval that exists within the scale, measured in note letters/scale degrees away.  Diatonic intervals are usually useful when using a heptatonic or seven note scale.',
	chapter: 1
},
{
	term: 'Chromatic Interval',
	def:'An interval measured in whole steps, half steps, and note letters away.  The chromatic interval name is prefixed with either major, minor, perfect, diminished, or augmented followed by the number of note letters away between the two notes.',
	chapter: 1
}
]);




