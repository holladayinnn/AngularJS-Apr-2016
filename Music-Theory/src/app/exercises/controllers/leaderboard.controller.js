(function(){
  angular.module('MyApp.Exercise')

  .controller('LeaderboardController', function(LeaderboardListResource) {
    var self = this;

    // self.leaders
    self.leaders = null;

    function getLeaders() {
        LeaderboardListResource.query().$promise
        .then(function(response) {
          self.leaders = response;
        });
      }

      getLeaders();

  });

})();