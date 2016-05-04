angular.module('MyModule')

.value('SongLists', {
		jazzList : [{
			name:"Resolution",
			selected: false,
			link: "https://www.youtube.com/watch?v=O6pSffe4k60"}, {
			name: "Still Here",
			selected:false,
			link: "https://www.youtube.com/watch?v=NYYcdCoP1cw"}, {
			name: "Pannonica",
			selected:false, 
			link: "https://www.youtube.com/watch?v=Q8PHk1aA8Uo"}],
		hiphopList : [{
			name:"Fantastic",
			selected: false,
			link: "https://www.youtube.com/watch?v=7cgcq9kQs8g"}, {
			name: "The Stakes Is High",
			selected:false, 
			link: "https://www.youtube.com/watch?v=EwADnQp-pqg"}, {
			name: "Find A Way",
			selected:false,
			link: "https://www.youtube.com/watch?v=p-tjrM9qugQ"}],
		rockList : [{
			name:"Red House",
			selected: false,
			link: "https://www.youtube.com/watch?v=xAWtuxhdUDE"}, {
			name: "Retrograde",
			selected:false,
			link: "https://www.youtube.com/watch?v=6p6PcFFUm5I"}, {
			name: "Echoes",
			selected:false,
			link: "https://www.youtube.com/watch?v=bnC7TdkRnP4"}]
})

.factory('Playlist', function (SongLists) {

	function Playlist () {
		this.playList = [];
		this.playListCopy = [];
		this.name = "";
		this.age = "";
		this.songs = SongLists;
		this.explicit = false;
		this.explicitDisabled = true;
		this.showPlayList = false;
	}

	Playlist.prototype.checkAge = function() {
		if (this.age < 18)
		{
			this.explicit = false;
			this.explicitDisabled = true;
		}
		else {
			this.explicitDisabled = false;
		}
	}



	Playlist.addToPlaylist = function(genreList, playList) {
		for(var i = 0; i < genreList.length; ++i) {
			if(genreList[i].selected == true) {
				playList.push({name: genreList[i].name, link: genreList[i].link});
			}
		}
	}

	Playlist.prototype.onSubmit = function() {

		this.playList.length = 0;
		
		Playlist.addToPlaylist(this.songs.jazzList, this.playList);
		Playlist.addToPlaylist(this.songs.hiphopList, this.playList);
		Playlist.addToPlaylist(this.songs.rockList, this.playList);

		var print_statement = "Playlist: ["  
		for(var i = 0; i < this.playList.length; i++) {
			print_statement += " " + this.playList[i].name + ".";
		}
		print_statement += "] Name: " + this.name + ". Age: " + this.age + ". Explicit: " + this.explicit + ".";
		
		console.log(print_statement);

		this.showPlayList = true;

		//this.playListCopy = angular.copy(this.playList);
		//this.playList.length = 0;

	}

	return Playlist;
});