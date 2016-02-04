(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .factory('UserDetailsService', UserDetailsService);

	UserDetailsService.$inject = ['$http', 'DAOServices', 'UtilServices'];
	function UserDetailsService($http, DAOServices, UtilServices)
	{
		var service = {};
		service.ctGetUserDetailsBasedEmail = ctGetUserDetailsBasedEmail;

		return service;

		function ctGetUserDetailsBasedEmail(userEmail, cbk)
		{
			DAOServices.
					ctGetUserDetailsBasedEmail(UtilServices.ctGetCookieName('authToken'),
													userEmail, function(data){
														cbk(data);

											});	
		}
	}
})();	