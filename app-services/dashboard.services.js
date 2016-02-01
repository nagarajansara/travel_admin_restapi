(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .factory('DashboardService', DashboardService);
	
	DashboardService.$inject = ['$http', 'DAOServices', 'UtilServices'];
	function DashboardService($http, DAOServices, UtilServices){
		var service = {},
			approvedStatus = {};
		service.ctGetDashboardData = ctGetDashboardData;
		service.ctGetVendorListPagination = ctGetVendorListPagination;
		service.ctGetApprovedDropDown = ctGetApprovedDropDown;
		service.ctUpdateApprovedStatus = ctUpdateApprovedStatus;
		service.ctGetUserBasedApprovedType = ctGetUserBasedApprovedType;
		service.ctGetVendorListSearchKey = ctGetVendorListSearchKey;
		service.ctGetVendorListSearchKeyPagination = ctGetVendorListSearchKeyPagination;

		
		return service;
		function ctGetDashboardData(cbk)
		{
			DAOServices.
				ctGetDashboardData(UtilServices.ctGetCookieName('authToken'), 
							function(data){
								cbk(data);
							});
		}
		function ctGetVendorListPagination(authToken, pageIndx, userType, cbk)
		{
			DAOServices.
				ctGetVendorListPagination(authToken, pageIndx, userType,
							function(data){
								cbk(data);
							});
		}
		function ctGetApprovedDropDown()
		{
			return approvedStatus = [{
							id: 1,
							approvedType: 'yes'	
						},
						{
							id: 2,
							approvedType: 'no'	
						}];
		}
		function ctUpdateApprovedStatus(email, approvedStatus, cbk)
		{
			email = email ? ( (email.split(' && ')[0]) )  : '';
			approvedStatus = approvedStatus ? ((approvedStatus.split(" && ")[1])) : '';	
			DAOServices.ctUpdateApprovedStatus(email, approvedStatus, function(data){
				cbk(data);	
			});
		}
		function ctGetUserBasedApprovedType(approvedType, cbk)
		{
			DAOServices.
				ctGetUserBasedApprovedType(approvedType, function(data){
							cbk(data);
			});
		}
		function ctGetVendorListSearchKey(searchKey, userType, cbk)
		{
			DAOServices.
				ctGetVendorListSearchKey(UtilServices.ctGetCookieName('authToken'),
										searchKey,
										userType,
										function(data){
										cbk(data);
								})
		}
		function ctGetVendorListSearchKeyPagination(searchKey, startIndx, 
															userType, cbk)
		{
			DAOServices.
				ctGetVendorListSearchKeyPagination(
								UtilServices.ctGetCookieName('authToken'),
									searchKey, userType, 
									startIndx, function(data){
												console.log(data);

								});
			
		}
	}

})();

