angular.module('MyApp.Home')

.directive('scrollOnClick', function() {
	return {                                                                                 
        restrict: 'A',                                                                       
        scope: {                                                                             
            scrollTo: "@"                                                                    
        },                                                                                   
        link: function(scope, $elm,attr) {                                                   

            $elm.on('click', function() {                                                    
                ('body').animate({scrollTop: (scope.scrollTo).offset().top }, "slow");
            });                                                                              
        }                                                                                    
    }
});