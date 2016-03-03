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
		service.ctAddMetaKeywords = ctAddMetaKeywords;
		service.ctUpdateMetaKeywords = ctUpdateMetaKeywords;
		service.ctAddTopActivityList = ctAddTopActivityList;
		

		return service;

		function ctGetTripDetailsBasedId(tripId, cbk)
		{
			DAOServices.
				ctGetTripDetailsBasedId(UtilServices.ctGetCookieName('authToken'),
											tripId, function(data){
												cbk(data);
				});
		}
		function ctAddMetaKeywords(keywords, tripId, cbk)
		{
			DAOServices.
				ctAddMetaKeywords(UtilServices.ctGetCookieName('authToken'),
									keywords, tripId, function(data){
											cbk(data);
									});
		}
		function ctUpdateMetaKeywords(keywords, tripId, cbk)
		{
			DAOServices.
				ctUpdateMetaKeywords(UtilServices.ctGetCookieName('authToken'),
									keywords, tripId, function(data){
											cbk(data);
									});
		}
		function ctAddTopActivityList(tripId, isTopActivityList, cbk)
		{
			DAOServices.
				ctAddTopActivityList(UtilServices.ctGetCookieName('authToken'),
										tripId,
										isTopActivityList,
										function(data){
										cbk(data);
				});
										
		}
	}
})();	