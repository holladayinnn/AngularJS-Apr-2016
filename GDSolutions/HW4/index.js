angular.module('MyApp', [])

.controller('PlaylistController', function(PlaylistDataService) {
	var self = this;

	self.playlist = PlaylistDataService.getPlayListModel();

	self.onSavePlaylist = function() {
		PlaylistDataService.uploadPlaylist(self.playlist);
	};
});
