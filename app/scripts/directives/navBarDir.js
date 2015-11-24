angular.module('MyPortfolio').directive("navBarDir", function($compile, Projects, LocationChanger){
	return {
		restrict: 'E',
		templateUrl: 'templates/nav/index.html',
		controller: function($scope, $rootScope, $location, $document, $timeout){
			$scope.navbar = [
				{ name: 'Service', page: 'service' }, 
				{ name: 'Projects', page: 'projects' }, 
				{ name: 'YZ', page: '' }, 
				{ name: 'About', page: 'about' },
				{ name: 'Contact', page: 'contact' }
			];

			$scope.navColumn = function(nav) {
				return nav.page === '' ? 'small-12 medium-4 large-4 nav-logo' : 'small-6 medium-2 large-2 nav-item';
			};

			$scope.navClass = function(page) {
				var currentRoute = $location.path().split('/').pop();
				return page === currentRoute ? 'active' : '';
			};

			$scope.loadPage = function(page) {
				$rootScope.navClicked = true;

				if ($rootScope.homeTemp) {
					$location.path(page, false);
					$scope.scrollPage(page);
				} else {
					$location.path(page, true);	
					$timeout(function() {
						$scope.scrollPage(page);			
					}, 100);
				}
			};

			$scope.scrollPage = function(page) {
				var offset = 60,
					duration = 800,
					element;

				page = page.length !== 0 ? page : 'intro';
				element = angular.element(document.getElementById(page));

				$document.scrollToElement(element, offset, duration);				
			};
		}

	};
});