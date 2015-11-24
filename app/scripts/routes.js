angular.module('MyPortfolio').config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: "templates/home/index.html",
			controller: "HomeIndexCtrl"
		})
		.when('/:nav', {
			templateUrl: "templates/home/index.html",
			controller: "HomeIndexCtrl"
		})
		.when('/projects/:id', {
			templateUrl: "templates/projects/index.html",
			controller: "ProjectsShowCtrl"
		})
		.otherwise({
			redirectTo: "/"
		});

}).run(function($rootScope, $location, $document) {
    $rootScope.homeTemp = true;
    $rootScope.navClicked = false;

    // set up homeTemp once location is changed
    $rootScope.$on('$locationChangeSuccess', function(event, newUrl, oldUrl) {
    	var currentUrl = newUrl.split("/").pop(),
    		patt = /^(service|projects|about|contact)$/g;

    	$rootScope.homeTemp = (patt.test(currentUrl) || currentUrl.length === 0)? true : false;
    	console.log('is home temp: ' + $rootScope.homeTemp);
    });

	//scroll page after first time page loads
	$rootScope.$on('$viewContentLoaded', function() {
		var offset = 50,
			duration = 800,
			page, element;

		if ($rootScope.homeTemp && !$rootScope.navClicked) {
			page = $location.path().split('/').pop();
			//console.log(page);	
			if (page.length !== 0) {
				element = angular.element(document.getElementById(page));
				$document.scrollToElement(element, offset, duration);
			} else {
				$document.scrollTop(top, duration);
			}				
		}
	});

    // initiate foundation API
    //$rootScope.$apply($(document).foundation());
});
