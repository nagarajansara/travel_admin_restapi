(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .factory('ErrorService', ErrorService);
	
	ErrorService.$inject = ['$rootScope'];
	 function ErrorService($rootScope) {
		var service = {};

        service.Success = Success;
        service.Error = Error;

        return service;

		function Success(message)
		{
			$rootScope.ajaxResponse = {
                message: message,
                type: 'success'
            };
		}
		function Error(message)
		{
			$rootScope.ajaxResponse = {
                message: message,
                type: 'error'
            };
	 	}
	 };
})();
