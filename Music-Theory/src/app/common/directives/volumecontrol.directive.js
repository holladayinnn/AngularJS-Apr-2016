(function(){
    angular.module('MyApp.Common')

    .directive('volumecontrol', function() {
        return {
            templateUrl: 'app/common/partials/templates/volumecontrol.html',
            controller: 'VolumeController as vCtrl',
            scope: true
        }
    })

    .controller('VolumeController', function(volumeIcon, Volume) {
        var self = this;
        self.volumeLevel = Volume.get()*100;
        self.volumeIcon = volumeIcon[Math.round(self.volumeLevel/50)];

        self.changeVolume = function() {
            self.volumeIcon = volumeIcon[Math.round(self.volumeLevel/50)];
            Volume.set((self.volumeLevel) * 0.01);
        };

    });
})();