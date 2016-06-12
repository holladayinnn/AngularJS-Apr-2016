(function() {

angular.module('MyApp.Common')

	.service("PlayTime", function() {
		var self = this;

		self.Calculate = function (type, length) {
			if (type == "k_interval") {
				return 3100;
			}
			else if (type == "it_interval") {
				return 2000;
			}
			else if (type == "scale") {
				return ((length *.5)) * 1000;
			}
			else {
				return 0;
			}

		}
	});

})();