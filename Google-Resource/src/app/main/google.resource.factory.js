(function() {
  'use strict';

  angular
    .module('template')

    .service('GoogleRequestService', function(GoogleResource) {
        var self = this;

        // GoogleRequestService.getNearbyAddresses('123', function(isValid, response) {})
        // onCompletion should be called when response comes in
        self.getNearbyAddresses = function(queryAddress, onCompletion) {
            GoogleResource.getAddresses({
                address: queryAddress
            })
            .$promise
            .then(function(response) {
                onCompletion(true, response);
            }, function onError(error) {
                onCompletion(false, error);
            });
        };
    })

    .factory('GoogleResource', function($resource) {
        // final result:
        // http://maps.googleapis.com/maps/api/geocode/json?address=123
    	return $resource('http://maps.googleapis.com/maps/api/geocode/json', null, {
    		getAddresses: {
    			method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
    		}
    	});
    });
})();
