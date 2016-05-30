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
    .state(STATES.kEartrainingState, {
      url: '/eartraning',
      templateUrl: 'app/eartraining/partials/eartraining.main.html',
      controller: 'EartrainingController as ctrl'
    })
    .state(STATES.kTheoryState, {
      url: '/store',
      // template: '<h3>Hello world</h3>'
      templateUrl: 'app/theory/partials/store.main.html',
      controller: 'TheoryController as ctrl'
    })


    //Lessons child-states
    .state(STATES.kNoteState, {
      url:'/notes',
      templateUrl: 'app/lessons/partials/notes.html'
    })
    .state(STATES.kStepState, {
      url:'/steps',
      templateUrl: 'app/lessons/partials/steps.html'
    })
    .state(STATES.kIntervalState, {
      url:'/intervals',
      templateUrl: 'app/lessons/partials/intervals.html'
    })
    .state(STATES.kScaleState, {
      url:'/scales',
      templateUrl: 'app/lessons/partials/scales.html'
    })
    .state(STATES.kMajorScaleState, {
      url:'/majorscale',
      templateUrl: 'app/lessons/partials/majorscale.html'
    })
    .state(STATES.kDiatonicIntervalState, {
      url:'/diatonic-intervals',
      templateUrl: 'app/lessons/partials/diatonicintervals.html'
    })
    .state(STATES.kChromaticIntervalState, {
      url:'/chromatic-intervals',
      templateUrl: 'app/lessons/partials/chromaticintervals.html'
    })

    //Ear Training child-states
    .state(STATES.kETIntervalState, {
      url:'/eartraining-intervals',
      templateUrl: 'app/eartraining/partials/intervals.html'
    })


    // .state(STATES.kFounderState, {
    //   //url:'/founder',
    //   templateUrl: 'app/home/partials/founder.html'
    // })

    // // Store child-sibling states
    // .state(STATES.kShoesState, {
    //   views: {
    //     listView: {
    //       templateUrl: 'app/store/partials/shoesList.html'
    //     },
    //     detailView: {
    //       templateUrl: 'app/store/partials/shoesDetails.html'
    //     }
    //   }
    // })
    // .state(STATES.kPantsState, {
    //   views: {
    //     listView: {
    //       templateUrl: 'app/store/partials/pantsList.html'
    //     },
    //     detailView: {
    //       templateUrl: 'app/store/partials/pantsDetails.html'
    //     }
    //   }
    // })

    ;



    $urlRouterProvider.otherwise('/');
  }

})();
