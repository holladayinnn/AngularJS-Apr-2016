/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('template')
    .constant('STATES', {
        kHomeState: 'home',
        kFreeplayState: 'freeplay',
    	kLessonState: 'lessons',
    	kEartrainingState: 'earTraining',
    	kTheoryState: 'Theory',

    	// Lesson child states
    	kNoteState: 'lessons.note',
    	kStepState: 'lessons.step',
        kIntervalState: 'lessons.interval',
        kScaleState: 'lessons.scale',
        kMajorScaleState: 'lessons.majorScale',
    	kDiatonicIntervalState: 'lessons.diatonicInterval',
        kChromaticIntervalState: 'lessons.chromaticInterval',

        //Ear Training Child States
        kETIntervalState: 'earTraining.interval'

    	// Store child states
    	// kShoesState: 'store.shoes',
    	// kPantsState: 'store.pants',
    	// kShirtsState: 'store.shirts'
    });

})();
