(function() {
  'use strict';

 angular.module('MyApp.Common')

    .directive('keyboard', function() {
    	return {
    		templateUrl: 'app/common/partials/templates/keyboard.html',
    		controller: 'KeyboardController as kCtrl',
            bindToController: true,
            scope: {
                length: '='
            }
        }
    })

    .controller('KeyboardController', function(Keyboard, ngAudio, pianoKeys) {
        var self = this;

        self.k = new Keyboard();
        self.pianoKeys = pianoKeys;

        if(!self.length) {
            length = 2;
        }
    })

})();