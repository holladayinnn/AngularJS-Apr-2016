(function() { 

	angular.module('MyApp.Exercise')

	.service('SpotifyRequestService', function(SpotifyApi) {
        var self = this;

        // GoogleRequestService.getNearbyAddresses('123', function(isValid, response) {})
        // onCompletion should be called when response comes in
        self.getPlaylist = function(queryAddress, onCompletion) {
            SpotifyApi.getPlaylist({
            })
            .$promise
            .then(function(response) {
            	console.log("Yea boi", response)
            }, function onError(error) {
                console.log("FAILURE!!!");
            });
        };
    })

	.factory('SpotifyApi', function ($resource) {
		var SpotifyApi = $resource('https://api.spotify.com/v1/users/1210980510/playlists/2oBGytBoOJ6NpeP8W2rr4W',
		null, {
    		getPlaylist: {
    			method: 'GET',
                headers: {
               		'Authorization': 'Bearer BQAn84EMYTO50kjcLByGiN__9SpRm97vzhB92hCKjvmhblNBuO9zRY48h-gW67kkVlnlrGq2b-ENEE7ybT4RSaHG4kB-XQDalflXRpmHAMoaFHlG5zOM6wnoP_2B_S2Lshi9E4yKK-0'
                }
    		}
    	});

	   	return SpotifyApi;
    });
})();
