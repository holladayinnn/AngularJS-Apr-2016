angular.module('MyApp')

.factory('PlaylistModel', function() {
	// this factory is responsible for interacting with the view and 
	// generating the final result that is to be saved. (console.logged)
	function PlaylistModel(genres) {
		this.userName = '';
		this.userAge = 18;
		this.explictDisabled = false;
		this.genres = genres;
		this.selectedGenre = this.genres[0];
		this.explicit = false;
	}

	PlaylistModel.prototype.updateAge = function(age) {
		if (age >= 18) {
			this.explictDisabled = false;
		} else {
			this.explictDisabled = true;
			this.explicit = false;
		}
	};

	PlaylistModel.prototype.generateUserPlayList = function() {
		var playlist = [];
		angular.forEach(this.genres, function(genre) {
			angular.forEach(genre.songs, function(song) {
				if (song.selected) {
					playlist.push({
						title: song.name,
						artist: song.artist
					});
				}
			});
		});

		var result = {
			user: this.userName,
			age: this.userAge,
			explicit: this.explicit,
			playlist: playlist
		};

		return result;
	};

	return PlaylistModel;
})

.service('PlaylistDataService', function(PlaylistModel, GENRES) {
	var self = this;

	// putting this in a service because here sometimes the logic
	// can be more.  (might need to request the genres etc)
	self.getPlayListModel = function() {
		return new PlaylistModel(angular.copy(GENRES));
	};

	self.uploadPlaylist = function(playlist) {
		console.log(playlist.generateUserPlayList());
	};
})

.value('GENRES', [{
	name: 'Rock',
	songs: [{
		name: 'Rock 1',
		artist: 'Rocker 1'
	}, {
		name: 'Rock 2',
		artist: 'Rocker 2'
	}, {
		name: 'Rock 3',
		artist: 'Rocker 3'
	}]
}, {
	name: 'Pop',
	songs: [{
		name: 'Pop 1',
		artist: 'Poper 1'
	}, {
		name: 'Pop 2',
		artist: 'Poper 2'
	}, {
		name: 'Pop 3',
		artist: 'Rocker 3'
	}]
}, {
	name: 'Rap',
	songs: [{
		name: 'Rap 1',
		artist: 'Raper 1'
	}, {
		name: 'Rap 2',
		artist: 'Raper 2'
	}, {
		name: 'Rap 3',
		artist: 'Rocker 3'
	}]
}]);