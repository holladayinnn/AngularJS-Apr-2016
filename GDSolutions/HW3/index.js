angular.module('MyApp', [])

.controller('SudentController', function(SudentReportCard) {
	var self = this;
	self.reportCard = new SudentReportCard();

	self.onAddAssignment = function() {
		self.reportCard.addAssignment(self.inputAssignment);
		self.inputAssignment = {};
	};

});
