(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .factory('SubActivityService', SubActivityService);

	SubActivityService.$inject = ['$http', 'DAOServices', 'UtilServices'];
	function SubActivityService($http, DAOServices, UtilServices)
	{
		var service = {};
		service.ctAddSubActivity = ctAddSubActivity;
		service.ctUploadBulkSubActivity = ctUploadBulkSubActivity;
		service.ctGetSubActivitys = ctGetSubActivitys;
		service.ctUpdateSubActivityStatus = ctUpdateSubActivityStatus;
		service.ctGetSubActivityDetailsPagination = ctGetSubActivityDetailsPagination;
		
		return service;

		function ctAddSubActivity(subActivityName, cbk)
		{
			DAOServices.
				ctAddSubActivity(UtilServices.ctGetCookieName('authToken'),
								subActivityName, function(data){
										cbk(data);
								})
		}
		function ctUploadBulkSubActivity(fileObj, cbk)
		{

			var formData = new FormData();
			formData.append('file', fileObj);
			formData.append('authToken', UtilServices.ctGetCookieName('authToken'));

			DAOServices.
				ctUploadBulkSubActivity(formData, function(data){
					cbk(data);
				});
				
		}
		function ctGetSubActivitys(status, cbk)
		{
			DAOServices.
				ctGetSubActivitys(UtilServices.ctGetCookieName('authToken'), 
									status, function(data){
										cbk(data);	
					});
		}
		function ctUpdateSubActivityStatus(activityStatus, cbk)
		{
			var activityId = activityStatus.split(" && ")[0],
				status = activityStatus.split(" && ")[1];
			DAOServices.
				ctUpdateSubActivityStatus(UtilServices.ctGetCookieName('authToken'),
								activityId, status, function(data){
								cbk(data);
				});
			
		}
		function ctGetSubActivityDetailsPagination(activityStatus, startIndx, cbk)
		{
			DAOServices.
				ctGetSubActivityDetailsPagination(UtilServices.ctGetCookieName('authToken'),
														activityStatus,
														startIndx,
														function(data){
														cbk(data);
														});
				
		}
	}
	
})();	