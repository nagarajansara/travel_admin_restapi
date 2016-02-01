(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .factory('DAOServices', DAOServices);
	
	DAOServices.$inject = ['$http', '$cookies', '$cookieStore', '$rootScope'];
	 function DAOServices($http, $cookies, $cookieStore, $rootScope) 
	 {
		var service = {},
			ctAdmin = this;
		service.ctGet_HTTP_Protocol = ctGet_HTTP_Protocol;
		service.ctGetLoginValidate = ctGetLoginValidate;
		service.ctGetAdminLoginStatus = ctGetAdminLoginStatus;
		service.ctGetDashboardData = ctGetDashboardData;
		service.ctGetVendorListPagination = ctGetVendorListPagination;
		service.ctUpdateApprovedStatus = ctUpdateApprovedStatus;
		service.ctGetUserBasedApprovedType = ctGetUserBasedApprovedType;
		service.ctGetTripDetails = ctGetTripDetails;
		service.ctGetTripDetailsPagination = ctGetTripDetailsPagination;
		service.ctGetUpdateDetails = ctGetUpdateDetails;
		service.ctAddActivity = ctAddActivity;
		service.ctGetActivitys = ctGetActivitys;
		service.ctGetActivityDetailsPagination = ctGetActivityDetailsPagination;
		service.ctGetUpdateActivityStatus = ctGetUpdateActivityStatus;
		service.ctGetVendorListSearchKey = ctGetVendorListSearchKey;
		service.ctGetVendorListSearchKeyPagination = ctGetVendorListSearchKeyPagination;
		service.ctGetTripSearchKey = ctGetTripSearchKey;
		service.ctGetTripSearchKeyPagination = ctGetTripSearchKeyPagination;
		service.ctGetActivitySearch = ctGetActivitySearch;
		service.ctGetTripDetailsBasedId = ctGetTripDetailsBasedId;
		
		
		return service;

		/************************* URLS *************************/
		
		function ctGetLoginValidate_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getAdminLoginValidate";
		}
		function ctGetAdminLoginStatus_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getAdminLoginStatus";
		}
		function ctGetDashboardData_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getVendorList";
		}
		function ctGetVendorListPagination_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getUserBasedApprovedTypePagination";
		}
		function ctUpdateApprovedStatus_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/updateApprovedStatus";
		}
		function ctGetUserBasedApprovedType_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getUserBasedApprovedType";
		}
		function ctGetUserBasedApprovedType_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getUserBasedApprovedType";
		}
		function ctGetTripDetails_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getTripDetails";
		}
		function ctGetTripDetailsPagination_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getTripDetailsPagination";
		}
		function ctGetUpdateDetails_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/updateTripdetails";
		}
		function ctGetAddActivity_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/addActivity";
		}
		function ctGetActivity_URL()
		{

			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getActivitys";
			
	 	}
		function ctGetActivitysPagination_URL()
		{

			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getActivitysPagination";
			
	 	}
		function ctGetUpdateActivityStatus_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/updateActivityStatus";
		}
		function ctGetVendorListSearchKey_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getVendorListSearch";
		}
		function ctGetVendorListSearchKeyPagination_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getVendorListSearchPagination";
		}
		function ctGetVendorListSearchKeyPagination_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getVendorListSearchPagination";
		}
		function ctGetTripSearchKey_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getTripSearchKey";
		}
		function ctGetTripSearchKeyPagination_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getTripSearchKeyPagination";
		}
		function ctGetActivitySearch_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getActivitySearchKey";
		}
		function ctGetTripDetailsBasedId_URL()
		{
			return ctgetServerName() + "/" + ctgetAppName() + 
							"/admin/getTripDetailsBasedId";
		}
			
		/**************************** END *************************/
		
		function ctgetAppName()
		{
			return "travelrestapi/travelrestapi";
		}
		function ctgetServerName()
		{
			
			if(!ctIsServer())
			{
				return ctGet_HTTP_Protocol() + "localhost:8082";
			}
			else
			{
				return ctGet_HTTP_Protocol() + ""; 
			}
		}
		function ctIsServer()
		{
			return false;
		}
		function ctGet_HTTP_Protocol()
		{
			return "http://";
		}

		/********************** ALL WEB SERVICE CALL ******************************/

		function ctGetLoginValidate(userName, password, cbk)
		{
			ctCommonAjaxCall(ctGetLoginValidate_URL() + "/" + 
									userName + "/" + password, cbk);			
		}
		function ctGetAdminLoginStatus(userName, cbk)
		{
			ctCommonAjaxCall(ctGetAdminLoginStatus_URL() + "/" + 
									userName, cbk);				
		}
		function ctGetDashboardData(authToken, cbk)
		{
			ctCommonAjaxCall(ctGetDashboardData_URL() + "/" + 
									authToken, cbk);				
		}
		function ctGetVendorListPagination(authToken, pageNo, userType, cbk)
		{
			ctCommonAjaxCall(ctGetVendorListPagination_URL() + "/" 
											+ userType + "/" + pageNo , cbk);				
		}
		function ctUpdateApprovedStatus(email, approvedStatus, cbk)
		{
			ctCommonAjaxCall(ctUpdateApprovedStatus_URL() + "/" 
											+ email + "/" +
									approvedStatus, cbk);		
		}
		function ctGetUserBasedApprovedType(approvedStatus, cbk)
		{
			ctCommonAjaxCall(ctGetUserBasedApprovedType_URL() + "/" +
									approvedStatus, cbk);		
		}
		function ctGetTripDetails(authToken, status, cbk)
		{
			ctCommonAjaxCall(ctGetTripDetails_URL() + "/" +
									status + "/" +
									authToken, cbk);
			
		}
		function ctGetTripDetailsPagination(authToken, status, startIndx, cbk)
		{
			ctCommonAjaxCall(ctGetTripDetailsPagination_URL() + "/" +
									status + "/" + startIndx + "/" +
									authToken, cbk);
			
		}
		function ctGetUpdateDetails(authToken, tripStatus, tripId, cbk)
		{
			ctCommonAjaxCall(ctGetUpdateDetails_URL() + "/" +
									tripStatus + "/" + tripId + "/" +
									authToken, 
									cbk);
		}
		function ctAddActivity(authToken, activityName, cbk)
		{
			ctCommonAjaxCall(ctGetAddActivity_URL() + "/" + 
								activityName +
								"/" +
								authToken,
								cbk);
									
		}
		function ctGetActivitys(authToken, activityStatus, cbk)
		{
			ctCommonAjaxCall(ctGetActivity_URL() + "/" + 
								activityStatus +
								"/" +
								authToken,
								cbk);	
		}
		function ctGetActivityDetailsPagination(authToken, activityStatus, startIndx, cbk)
		{
			ctCommonAjaxCall(ctGetActivitysPagination_URL() + "/" + 
								activityStatus +
								"/" +
								startIndx +
								"/" +
								authToken,
								cbk);	
		}
		function ctGetUpdateActivityStatus(authToken, activityId, status, cbk)
		{
			ctCommonAjaxCall(ctGetUpdateActivityStatus_URL() + "/" + 
								activityId +
								"/" +
								status +
								"/" +
								authToken,
								cbk);	
		}
		function ctGetVendorListSearchKey(authToken, userType, searchKey, cbk)
		{
			ctCommonAjaxCall(ctGetVendorListSearchKey_URL() + "/" + 
								searchKey +
								"/" +
								userType +
								"/" +
								authToken,
								cbk);		
		}
		function ctGetVendorListSearchKeyPagination(authToken, searchKey, 
														userType, startIndx, cbk)
		{
			ctCommonAjaxCall(ctGetVendorListSearchKeyPagination_URL() + "/" + 
								searchKey +
								"/" +
								userType +
								"/" +
								startIndx +
								authToken,
								cbk);		
		}
		function ctGetTripSearchKey(authToken, searchKey, status, cbk)
		{
			ctCommonAjaxCall(ctGetTripSearchKey_URL() + "/" + 
								searchKey +
								"/" +
								status +
								"/" +
								authToken,
								cbk);		
		}
		function ctGetTripSearchKeyPagination(authToken, 
										searchKey, startIndx, 
										status, cbk)
		{
			ctCommonAjaxCall(ctGetTripSearchKeyPagination_URL() + "/" + 
								searchKey +
								"/" +
								status +
								"/" +
								startIndx +
								"/" +
								authToken,
								cbk);	
		}
		function ctGetActivitySearch(authToken, status, searchKey, cbk)
		{
			ctCommonAjaxCall(ctGetActivitySearch_URL() + "/" + 
								searchKey +
								"/" +
								status +
								"/" +
								authToken,
								cbk);	
		}
		function ctGetTripDetailsBasedId(authToken, tripId, cbk)
		{
			ctCommonAjaxCall(ctGetTripDetailsBasedId_URL() + "/" + 
								tripId +
								"/" +
								authToken,
								cbk);	
		}




		
		
		function ctCommonAjaxCall(URL, cbk)
		{
			 var ajaxConfig = $http({
	            url: URL
	        });
			$rootScope.loader = true;	
			ajaxConfig.then( function(data){
				if(cbk)
				{
					data = JSON.parse(JSON.stringify(data))
					cbk(data);		
					$rootScope.loader = false;	
				}
			}, handleError )
			
		}
		function handleSuccess(data)
		{
			return data;
		}
		function handleError(errorResponse)
		{
			return errorResponse;
		}
		
		
	 };
})();

