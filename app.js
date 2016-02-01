var sampleApp = angular.module('traveladminApp', ['ngRoute', 'ngCookies', 'bw.paging']);
	sampleApp.config(['$routeProvider',
	function($routeProvider) {
	$routeProvider
	    .when('/login', {
	        templateUrl: 'app-views/login.views.html',
	        controller: 'LoginController',
	        controllerAs: 'ctAdmin'
	    })
	    .when('/dashboard', {
	    		templateUrl: 'app-views/dashboard.view.html',
	            controller: 'DashboardController',
	            controllerAs: 'ctAdmin'
	       })
		.when('/tripdetails', {
				templateUrl: 'app-views/tripdetails.views.html',
	            controller: 'TripDetailsController',
	            controllerAs: 'ctAdmin'
			})
		.when('/activity', {
				templateUrl: 'app-views/activity.views.html',
	            controller: 'ActivityController',
	            controllerAs: 'ctAdmin'
			})
		.when('/tripdetailsview/:tripId', {
				templateUrl: 'app-views/tripdetailsview.views.html',
	            controller: 'TripdetailsviewController',
	            controllerAs: 'ctAdmin'
			})	
	     .otherwise({
	        redirectTo: '/login'
	      });
	}]);
