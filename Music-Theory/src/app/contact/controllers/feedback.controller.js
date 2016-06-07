angular.module('MyApp.Contact')

.controller('FeedbackController', function(ratingClasses, iconClasses) {
	var self = this;
	
	self.rating = 0;
	self.ratingClass = ratingClasses[self.rating];
	self.iconClass = "";
	self.feedbackRequired = true;

	self.emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	self.setRating = function (rating) {
		self.rating = rating;
		self.ratingClass=ratingClasses[self.rating];
		self.iconClass=iconClasses[self.rating]
	};

	self.setFeedbackRequired = function() {
    	if(self.positiveFeedback == '' && self.improvementFeedback == '') {
    		self.feedbackRequired = true;
    	}
    	else {
    		self.feedbackRequired = false;
    	}
    };

	self.submitFeedback = function() {
    	if (self.feedbackForm.$valid) {
    		// submit the form
    	} else {
    		// alert phone is not submitted
    	}
    };



});