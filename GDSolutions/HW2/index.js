angular.module('MyApp', [])

.controller('FolderController', function() {
	var self = this; 
	self.folders = [{
		name: 'Folder 1', 
		files: [{
			name: 'File 1.1'
		}, {
			name: 'File 1.2'
		}, {
			name: 'File 1.3'
		}]
	}, {
		name: 'Folder 2', 
		files: [{
			name: 'File 2.1'
		}, {
			name: 'File 2.2'
		}, {
			name: 'File 2.3'
		}]
	}, {
		name: 'Folder 3', 
		files: [{
			name: '3.1'
		}, {
			name: '3.2'
		}, {
			name: '3.3'
		}]
	}];

	self.selectedFolder = self.folders[0];

	self.expandedCss = {
		isCollapsed: false
	};

	self.addFile = function(folder, userFile) {
		console.log(userFile);
		folder.files.push(userFile);
		self.userFile = undefined;
	};
})

.controller('TodoController', function() {
	var self = this;
	self.todos = [];

	self.addTodo = function(todo) {
		self.todos.push(todo);
		self.todo = {};
	};
});
