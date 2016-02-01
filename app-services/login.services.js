(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .factory('LoginService', LoginService);
	
	LoginService.$inject = ['$http', 'DAOServices'];
	 function LoginService($http, DAOServices) {
		var service = {};

		service.ctGetLoginValidate = ctGetLoginValidate;
		
		return service;
		
		function ctGetLoginValidate(userName, password, cbk)
		{
			return DAOServices.
							ctGetLoginValidate(userName, password, function(data){
									cbk(data);
							});
														
		}
	 };
})();