(function() {
  'use strict';

  angular
    .module('template')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, STATES) {
  	$rootScope.$on('$stateChangeStart', 
	function(event, toState, toParams, fromState, fromParams, options){ 
		// console.log(toState);
		if(toState.name == 'lessons') {
			event.preventDefault()
			$state.go(STATES.kNoteState);
		}
		else if(toState.name == 'exercises') {
			event.preventDefault();
			$state.go(STATES.kETIntervalState);
		}
		else if(toState.name == 'contact') {
			event.preventDefault();
			$state.go(STATES.kFeedbackState);
		}
	})

    $log.debug('runBlock end');
  }


})();
