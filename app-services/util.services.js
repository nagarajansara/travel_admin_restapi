(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .factory('UtilServices', UtilServices);
	
	UtilServices.$inject = ['$http', '$cookies', '$cookieStore', 'DAOServices'];
	 function UtilServices($http, $cookies, $cookieStore, DAOServices) 
	 {
		
		var service = {};
		service.ctIsLoginValidated = ctIsLoginValidated;
		service.ctGetCookieName = ctGetCookieName;

		return service;
		
		function ctIsLoginValidated()
		{
			var userId = $cookieStore.get("userId");
			if(userId)
			{
				return true;	
			}
			else
			{
				return false;
			}
				
		}
		function ctGetCookieName(attrName)
		{
			return $cookieStore.get(attrName);	
	 	}
		
	 };
})();
