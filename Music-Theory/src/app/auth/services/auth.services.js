angular.module('MyApp.Auth')

.service("Login", function ($location) {
	var self = this;

	self.onSubmit = function(credentials) {
		// authentication
	 //    	.login(credentials)
	 //        .error(function(err){
	 //          alert(err);
	 //        })
	 //        .then(function(){
	 //          $location.path('profile');
	 //        });
    };
})

.service("Register", function ($location) {
	var self = this;

	self.onSubmit = function (credentials) {
		console.log('Submitting registration');
    	// authentication
	    //     .register(credentials)
	    //     .error(function(err){
	    //       alert(err);
	    //     })
	    //     .then(function(){
	    //       $location.path('profile');
	    //     });
	};
});