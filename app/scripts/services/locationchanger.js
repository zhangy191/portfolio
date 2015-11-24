angular.module('MyPortfolio').factory('LocationChanger', function($route, $rootScope, $location){
	// change location without reloading
    var original = $location.path;  

    $location.path = function(path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function() {
                $route.current = lastRoute;
                un();
            });
        }
        return original.apply($location, [path]);
    };

    return $location;

});