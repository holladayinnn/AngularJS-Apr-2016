angular.module('MyApp.Auth')

.controller('AuthController', function(STATES, Login, Register) {
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

    self.onSubmit = function (authorize) {
    	if (authorize == "login") {
    		Login.onSubmit(self.loginCredentials);
    	}
    	else if (authorize == "register") {
    		Register.onSubmit(self.registerCredentials);
    	}
    };
});