angular.module('MyApp.Auth')

.controller('AuthController', function(STATES) {
	var self = this;
	self.navStates = STATES;

	self.loginCredentials = {
      email : "",
      password : ""
    };

    self.registerCredentials = {
      name : "",
      email : "",
      password : ""
    };

});