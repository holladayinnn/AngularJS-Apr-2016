angular.module('MyApp.Common')

.service("Volume", function () {
	var self = this;
	self.volume = 0.2;

	self.set = function (v) {
		self.volume = v;
	}

	self.get = function() {
		return self.volume;
	}
});