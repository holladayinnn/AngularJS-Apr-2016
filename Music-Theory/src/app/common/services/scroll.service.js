angular.module('MyApp.Common')

.service("Scroll", function($window) {
	var self = this;
	this.scrollToTop = function() {
		$window.scrollTo(0, 0);
	}
});