angular.module('MyApp', [])
.controller('ThemeController', function() {
	var self = this;
	self.themes = [{
		name: 'Red',
		cssClass: 'red'
	}, {
		name: 'Blue',
		cssClass: 'blue'
	}, {
		name: 'Green',
		cssClass: 'green'
	}, {
		name: 'Yellow',
		cssClass: 'yellow'
	}, {
		name: 'None',
		cssClass: 'none'
	}];
	self.selectedTheme = self.themes[4];
});