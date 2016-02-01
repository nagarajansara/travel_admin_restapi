(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .factory('TripDetailsService', TripDetailsService);

	TripDetailsService.$inject = ['$http', 'DAOServices', 'UtilServices'];
	function TripDetailsService($http, DAOServices, UtilServices)
	{
		var service = {};

		service.ctGetTripDetails = ctGetTripDetails;
		service.ctGetTripDetailsPagination = ctGetTripDetailsPagination;
		service.ctGetUpdateDetails = ctGetUpdateDetails;
		service.ctGetTripSearchKey = ctGetTripSearchKey;
		service.ctGetTripSearchKeyPagination = ctGetTripSearchKeyPagination;
			
		return service;

		function ctGetTripDetails(status, cbk)
		{
			DAOServices.
				ctGetTripDetails(UtilServices.ctGetCookieName('authToken'), 
									status, 
							function(data){
									cbk(data);
					});
		}
		function ctGetTripDetailsPagination(status, startIndx, cbk)
		{
			DAOServices.
				ctGetTripDetailsPagination(UtilServices.ctGetCookieName('authToken'), 
									status,
									startIndx,
							function(data){
									cbk(data);
					});	
		}
		function ctGetUpdateDetails(tripStatus_TripId, cbk)
		{
			var tripId = tripStatus_TripId.split(" && ")[0],
				tripStatus = tripStatus_TripId.split(" && ")[1];	
			DAOServices.
				ctGetUpdateDetails(UtilServices.ctGetCookieName('authToken'), 
									tripStatus, tripId, function(data){
															cbk(data);
				});
		}
		function ctGetTripSearchKey(searchKey, status, cbk)
		{
			DAOServices.
				ctGetTripSearchKey(UtilServices.ctGetCookieName('authToken'),
										searchKey, status, function(data){
													cbk(data);

											});	
		}
		function ctGetTripSearchKeyPagination(searchKey, startIndx, status, cbk)
		{
			DAOServices.
				ctGetTripSearchKeyPagination(UtilServices.ctGetCookieName('authToken'),
								searchKey,
								startIndx,
								status, 
								function(data){

									cbk(data);

						});
		}
		
		
		
	}
	
	
})();