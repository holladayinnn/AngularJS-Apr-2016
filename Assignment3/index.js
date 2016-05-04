angular.module('MyModule', [])

.controller('MyController', function(Assignments) {
	var self = this;

	self.a = new Assignments();
	
	self.addAssignment = function () {
		if(self.assignmentName && (self.assignmentGrade >= 0)){
				self.a.addAssignment(self.assignmentName, self.assignmentGrade);
				self.assignmentName = "";
				self.assignmentGrade = "";
		}
	}
});