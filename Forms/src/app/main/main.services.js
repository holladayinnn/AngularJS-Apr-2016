(function() {
  'use strict';

  angular
    .module('template')
    .factory('MainResource', function ($resource) {
    	var resourceObject = $resource('assets/json/sampleData.json', null, {
            getPeople: {
                method: 'GET',
                isArray: true
            }
        });

        // var resourceObject = $resource('/api/users/auth', {
    	// 	// someID: '@someID'
    	// }, {
    	// 	signup: {
    	// 		method: 'PUT',
    	// 		headers: {
    	// 			// 'Content-Type': '...'
    	// 		}
    	// 		isArray: true
    	// 	},
    	// 	login: {
    	// 		method: 'POST',
    	// 		headers : {

    	// 		}
    	// 	}
    	// });
   
    	return resourceObject;
    });

})();