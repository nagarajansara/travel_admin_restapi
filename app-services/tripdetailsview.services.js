(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .factory('TripDetailsViewService', TripDetailsViewService);

	TripDetailsViewService.$inject = ['$http', 'DAOServices', 'UtilServices'];
	function TripDetailsViewService($http, DAOServices, UtilServices)
	{
		var service = {};
		service.ctGetTripDetailsBasedId = ctGetTripDetailsBasedId;

		return service;

		function ctGetTripDetailsBasedId(tripId, cbk)
		{
			DAOServices.
				ctGetTripDetailsBasedId(UtilServices.ctGetCookieName('authToken'),
											tripId, function(data){
												cbk(data);
				});
		}
	}
})();	