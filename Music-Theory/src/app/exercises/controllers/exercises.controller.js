angular.module('MyApp.Exercise')

.controller('ExerciseController', function($state, _UserAddResource, _UserUpdateResource, 
	STATES) {
	var self = this;
	$state.go(STATES.kETIntervalState);

// kETIntervalState: 'exercises.interval',


	self.navStates = STATES;
	self._userAdded = false;

	self._user = {
		Username: "MusicalGenius",
		Score: 0
	};

	self.add_user = function(){
		self._userAdded = true;
		//Add user to database
		_UserAddResource.add_User(self._user).$promise
			.then(function(response) {
			self._user.id = response._id;
			console.log(response);
		});
	}

	self.update_user = function(score){
		if(score > self._user.Score){
			self._user.Score = score;
			if (self._userAdded == true) {
				_UserUpdateResource.save(self._user).$promise
			    .then(function(response) {
			    	console.log(response);
			    });
			}
		}
	}
});