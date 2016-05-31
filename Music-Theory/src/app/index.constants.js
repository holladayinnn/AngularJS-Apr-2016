/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('template')
    .constant('STATES', {
        kHomeState: 'home',
        kFreeplayState: 'freeplay',
    	kLessonState: 'lessons',
    	kExerciseState: 'exercises',
        kAuthState: 'auth',

    	// Lesson child states
    	kNoteState: 'lessons.note',
    	kStepState: 'lessons.step',
        kIntervalState: 'lessons.interval',
        kScaleState: 'lessons.scale',
        kMajorScaleState: 'lessons.majorScale',
    	kDiatonicIntervalState: 'lessons.diatonicInterval',
        kChromaticIntervalState: 'lessons.chromaticInterval',

        //Exercise Child States
        kETIntervalState: 'exercises.interval',

        //Auth Child States
        kLoginState: 'auth.login',
        kRegisterState: 'auth.register'

    });

})();
