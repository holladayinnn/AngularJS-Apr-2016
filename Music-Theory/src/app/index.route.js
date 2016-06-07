(function() {
  'use strict';

  angular
    .module('template')
    
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, STATES) {

    $stateProvider
    .state(STATES.kHomeState, {
      url: '/',
      templateUrl: 'app/home/partials/home.main.html',
      controller: 'HomeController as ctrl'
    })
    .state(STATES.kFreeplayState, {
      url: '/freeplay',
      templateUrl: 'app/freeplay/partials/freeplay.main.html',
      controller: 'FreeplayController as ctrl'
    })
    .state(STATES.kLessonState, {
      url: '/lessons',
      templateUrl: 'app/lessons/partials/lessons.main.html',
      controller: 'LessonsController as ctrl'
    })
    .state(STATES.kExerciseState, {
      url: '/exercises',
      templateUrl: 'app/exercises/partials/exercises.main.html',
      controller: 'ExerciseController as ctrl'
    })
    .state(STATES.kContactState, {
      url: '/contact',
      templateUrl: 'app/contact/partials/contact.main.html',
      controller: 'ContactController as ctrl'
    })
    .state(STATES.kAuthState, {
      url: '/auth',
      templateUrl: 'app/auth/partials/auth.main.html',
      controller: 'AuthController as ctrl'
    })

    //Lessons child-states
    .state(STATES.kNoteState, {
      url:'/notes',
      templateUrl: 'app/lessons/partials/notes.html',
      controller: 'NotesController as notesCtrl'
    })
    .state(STATES.kStepState, {
      url:'/steps',
      templateUrl: 'app/lessons/partials/steps.html',
      controller: 'StepsController as stepsCtrl'
    })
    .state(STATES.kIntervalState, {
      url:'/intervals',
      templateUrl: 'app/lessons/partials/intervals.html',
      controller: 'IntervalsController as intervalCtrl'
    })
    .state(STATES.kScaleState, {
      url:'/scales',
      templateUrl: 'app/lessons/partials/scales.html',
      controller: 'ScalesController as scalesCtrl'
    })
    .state(STATES.kMajorScaleState, {
      url:'/majorscale',
      templateUrl: 'app/lessons/partials/majorscale.html',
      controller: 'MajorScaleController as majorCtrl'
    })
    .state(STATES.kDiatonicIntervalState, {
      url:'/diatonic-intervals',
      templateUrl: 'app/lessons/partials/diatonicintervals.html',
      controller: 'DiatonicIntervalsController as diatonicCtrl'
    })
    .state(STATES.kChromaticIntervalState, {
      url:'/chromatic-intervals',
      templateUrl: 'app/lessons/partials/chromaticintervals.html',
      controller: 'ChromaticIntervalsController as chromaticCtrl'
    })

    //Exercise Training child-states
    .state(STATES.kETIntervalState, {
      url:'/eartraining-intervals',
      templateUrl: 'app/exercises/partials/intervals.html',
      controller: 'IntervalTrainerController as itCtrl'
    })
    .state(STATES.kLeaderboardState, {
      url: '/leaderboard',
      templateUrl: 'app/exercises/partials/leaderboard.html',
      controller: 'LeaderboardController as lCtrl'
    })

    .state(STATES.kContactLessonState, {
      url:'/lessons',
      templateUrl: 'app/contact/partials/contact.lessons.html'
    })
    .state(STATES.kFeedbackState, {
      url:'/feedback',
      templateUrl: 'app/contact/partials/contact.feedback.html',
      controller: 'FeedbackController as fbCtrl'
    })
    .state(STATES.kDonateState, {
      url: '/donate',
      templateUrl: 'app/contact/partials/contact.donate.html'
    })

    //Auth child-states
    .state(STATES.kLoginState, {
      url: '/login',
      templateUrl: 'app/auth/partials/login.html'
    })
    .state(STATES.kRegisterState, {
      url: '/register',
      templateUrl: 'app/auth/partials/register.html'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
