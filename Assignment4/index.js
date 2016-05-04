angular.module('MyModule', [])

.controller('MyController', function(Playlist) {
	var self = this;

	self.p = new Playlist();

	self.genreSelected = self.p.songs.jazzList;
});