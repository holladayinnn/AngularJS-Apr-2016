(function() {
  'use strict';

  angular
    .module('template')


    .service('MainDataService', function(GoogleRequestService) {
        var self = this;

        self.getMainCtrlAddresses = function(address, onCompletion) {
            GoogleRequestService.getNearbyAddresses(address, function (isValid, response) {
                if (isValid) {
                    var finalResult = [];
                    for (var i = 0; i < response.results.length; i++) {
                        finalResult.push(response.results[i].formatted_address);
                    }
                    onCompletion(true, finalResult)
                } else {
                    // Error Handling
                }
            })
        };
    })











    .factory('MainResource', function($resource) {

        var resourceObject = $resource('/assets/json/sampleData.json', null, {
            getPeople: {
                method: 'GET',
                isArray: true
            }
        });


        return resourceObject;
    });



    // Example!!!
    // var resourceObject = $resource('/api/users/auth', {
    //  // someID: '@someID'
    // }, {
    //  signup: {
    //      method: 'PUT',
    //      headers: {
    //          // 'Content-Type': '...'
    //      },
    //      isArray: true
    //  },
    //  login: {
    //      method: 'POST',
    //      headers: {

    //      }
    //  }
    // });

})();