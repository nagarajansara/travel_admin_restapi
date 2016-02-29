(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .factory('ActivityService', ActivityService);

	ActivityService.$inject = ['$http', 'DAOServices', 'UtilServices'];
	function ActivityService($http, DAOServices, UtilServices)
	{
		var service = {};
		service.ctAddActivity = ctAddActivity;
		service.ctGetActivitys = ctGetActivitys;
		service.ctGetActivityDetailsPagination = ctGetActivityDetailsPagination;
		service.ctGetUpdateActivityStatus = ctGetUpdateActivityStatus;
		service.ctGetActivitySearch = ctGetActivitySearch;
		service.ctUploadBulkActivity = ctUploadBulkActivity;

		return service;

		function ctAddActivity(activityName, cbk)
		{
			DAOServices.
					ctAddActivity(UtilServices.ctGetCookieName('authToken'), 
								activityName, function(data){
									cbk(data);
									
							});
		}
		function ctGetActivitys(activityStatus, cbk)
		{
			DAOServices.
				ctGetActivitys(UtilServices.ctGetCookieName('authToken'),
						activityStatus, function(data){
							cbk(data);
				});
		}
		function ctGetActivityDetailsPagination(activityStatus, startIndx, cbk)
		{
			DAOServices.
				ctGetActivityDetailsPagination(UtilServices.ctGetCookieName('authToken'),
									activityStatus, 
									startIndx,
									function(data){
										cbk(data);		
								});
		}
		function ctGetUpdateActivityStatus(activityStatus, cbk)
		{	
			var activityId = activityStatus.split(" && ")[0],
				status = activityStatus.split(" && ")[1];
			DAOServices.
				ctGetUpdateActivityStatus(UtilServices.ctGetCookieName('authToken'),
											activityId, 
											status,
											function(data){
											cbk(data);
									});
							
		}
		function ctGetActivitySearch(status, searchKey, cbk)
		{
			DAOServices.
				ctGetActivitySearch(UtilServices.ctGetCookieName('authToken'), 
										status, searchKey, function(data){
							cbk(data);
				});
		}
		function ctUploadBulkActivity(fileObj, cbk)
		{

			var formData = new FormData();
			formData.append('file', fileObj);
			formData.append('authToken', UtilServices.ctGetCookieName('authToken'));
			
			DAOServices.
				ctUploadBulkActivity(formData, function(data){
					cbk(data)
				});
		}
		
	}
	
	
})();