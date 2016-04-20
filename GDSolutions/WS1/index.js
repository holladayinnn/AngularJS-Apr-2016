angular.module('MyApp', [])

.controller('MainController', function($scope) {
	var self = this;

	self.user = {
		fname: 'George',
		lname: 'Dagher',
		email: 'george@nycda.com'
	};

	self.onEditClicked = function() {
		self.isEditing = true;
		self.copyUser = angular.copy(self.user);
	};

	self.onSaveClicked = function() {
		self.isEditing = false;
		self.user = angular.copy(self.copyUser);
	};
	self.onCancelClicked = function() {
		self.isEditing = false;
	};
});