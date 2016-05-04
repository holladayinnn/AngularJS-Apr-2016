angular.module('MyModule')

.factory('Assignments', function (CalculateAverage) {

	function Assignments() {
		this.average = 100;
		this.grade = 'A'
		this.passing = 'Yes'
		this.assignmentList = [];
	}

	// Assignments.prototype.calculateAverage = function(assignmentGrade, remove) {
	// 	if(this.assignmentList.length < 1) {
	// 		return 100;
	// 	}

	// 	else if(this.assignmentList.length == 1) {
	// 		return this.assignmentList[0].grade;
	// 	}
	// 	else if (remove){
	// 		//remove an assignment from the average
	// 		console.log(this.assignmentList.length);
	// 		return ((this.average * (this.assignmentList.length + 1) - assignmentGrade)/this.assignmentList.length)
	// 	}
	// 	else {
	// 		//add an assignment to the average
	// 		return ((this.average * (this.assignmentList.length -1) + assignmentGrade)/this.assignmentList.length)
	// 		// var avg = 0;
	// 		// for(var i = 0; i < this.assignments.length; i++) {
	// 		// 	avg += i.grade;
	// 		// }
	// 		// return (avg / this.assignments.length);
	// 	}
	// }

	Assignments.prototype.getLetterGrade = function () {
		if(this.average > 89) {
			return 'A';
		}
		else if(this.average > 79) {
			return 'B';
		}
		else if(this.average > 69) {
			return 'C';
		}
		else if(this.average > 59) {
			return 'D';
		}
		else {
			return 'F';
		}
	};

	Assignments.prototype.isPassing = function () {
		if (this.average > 59) {
			return 'Yes';
		}
		else {
			return 'No';
		}
	}

	Assignments.prototype.addAssignment = function(assignmentName, assignmentGrade) {
		if(assignmentGrade == "") {
			self.assignmentGrade = 0;
		}

		this.assignmentList.push( {
				name: assignmentName,
				grade: assignmentGrade
		})
		this.average = CalculateAverage.calculateAverage(this.assignmentList);
		this.grade = this.getLetterGrade();
		this.passing = this.isPassing();
	}

	Assignments.prototype.removeAssignment = function(assignment) {
		var assignmentGrade = this.assignmentList[assignment].grade;
		this.assignmentList.splice(assignment,1);
		this.average = CalculateAverage.calculateAverage(this.assignmentList);
		this.grade = this.getLetterGrade();
		this.passing = this.isPassing();
	}

	return Assignments;
})

.service('CalculateAverage', function () {
	var self = this;

	self.calculateAverage = function (assignmentList) {
		var avg = 0;
		if(assignmentList.length == 0)
		{
			return 100;
		}
		for(var i = 0; i < assignmentList.length; i++) {
			avg += parseInt(assignmentList[i].grade);
		}
		return (avg / assignmentList.length);
	};
});