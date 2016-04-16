var myMod = angular.module('MyModule', []);

myMod.controller('MyController', function() {
	var self = this;

	self.default = {
		div1: 'default',
		div2: 'default2',
		background: 'bg-default'
	}
	self.blue = {
		div1: 'blue',
		div2: 'blue2',
		background: 'bg-blue',
		text: 'blue-text'
	}
	self.red = {
		div1: 'red',
		div2: 'red2',
		background: 'bg-red',
		text: 'red-text'
	}
 	self.purple = {
		div1: 'purple',
		div2: 'purple2',
		background: 'bg-purple',
		text: 'purple-text'
	}
 	self.black = {
		div1: 'black',
		div2: 'black2',
		background: 'bg-black',
		text: 'black-text'
	}
	self.crazy = {
		div1: 'crazy',
		div2: 'crazy2',
		background: 'bg-crazy',
		text: 'crazy-text'
	}
});
