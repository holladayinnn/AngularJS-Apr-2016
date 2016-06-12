angular.module('MyApp.Exercise')

.controller('SongTrainerController', function(SpotifyRequestService) {
	var self = this;

  SpotifyRequestService.getPlaylist();

});