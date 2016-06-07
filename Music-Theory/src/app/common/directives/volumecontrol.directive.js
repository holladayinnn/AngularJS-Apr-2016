angular.module('MyApp.Common')

    .directive('volumecontrol', function() {
    	return {
    		templateUrl: 'app/common/partials/volumecontrol.html',
    		controller: 'VolumeController as vCtrl',
            scope: true
    	}
    })

    .controller('VolumeController', function(volumeIcon, Volume) {
    	var self = this;
    	self.volumeLevel = 2;
		self.volumeIcon = volumeIcon[Math.round(self.volumeLevel/5)];
		self.changeVolume = function() {
			self.volumeIcon = volumeIcon[Math.round(self.volumeLevel/5)];
			Volume.set((self.volumeLevel) * 0.1);
		};

    });