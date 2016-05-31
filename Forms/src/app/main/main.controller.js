(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MainResource) {
    var self = this;
    self.greeting = "Hello World";

    self.submitTheForm = function () {
        if(self.myForm.$valid) {
            //submit the form
        } else {
            //alert phone is not submitted
            if (self.myForm.phoneInput.$valid) {
                //submit
            }
        }
    };

    // self.states = ["California", "Florida", "New York"];

    // self.states = [{
    //     name: 'California',
    //     abbr: 'CA'
    // },
    // {
    //     name: 'Florida',
    //     abbr: 'FL'
    // },
    // {
    //     name: 'New York',
    //     abbr: 'NY'
    // }];

    self.states = {
        NY: 'New York',
        FL: 'Florida',
        CA: 'California'
    }
    
    }
  })();
