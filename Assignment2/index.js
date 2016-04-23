var myMod = angular.module('MyModule', []);

myMod.controller('MyController', function() {
	var self = this;

	self.isBoxChecked = false;

	self.folder1 = ["File 1.1", "File 1.2", "File 1.3"];

	self.folder2 = ["File 2.1", "File 2.2", "File 2.3"];

	self.folder3 = ["File 3.1", "File 3.2", "File 3.3"];

	self.folderSelected = self.folder1;

	self.onClick = function () {
		if(self.fileName) {
			self.folderSelected.push(self.fileName);
			self.fileName="";
		}
	};

	 self.high = "redText";
	 self.medium = "greenText";
	 self.low = "blueText"
	
	 self.toDo = [];

	self.addToDo = function() {
		if(self.toDoName && self.toDoDescription && self.toDoP) {
			self.toDo.push(
			{
				name: self.toDoName,
				description: self.toDoDescription,
				priority: self.toDoP
			});
			self.toDoName = "";
			self.toDoDescription = "";
			self.toDoP = "";
		}
	};
})