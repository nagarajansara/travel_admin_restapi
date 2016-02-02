(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .controller('TripDetailsController', TripDetailsController);

	TripDetailsController.$inject = [	'$location', '$rootScope', '$scope', 
										'$cookies', '$cookieStore',
										'TripDetailsService',									 
										'DAOServices', 'UtilServices'
									];
    function TripDetailsController($location, $rootScope, $scope, 
									$cookies, $cookieStore , 
									TripDetailsService, 
									DAOServices, UtilServices) 
	{

		var ctAdmin = this;

		$scope.tripStatusType = "active";
		
		ctAdmin.TRIP_DETAILS_VIEW = "/admin/#/tripdetailsview";

		

		/************* MENUS ******************/
	
			ctAdmin.tripDetailsMenu = true;
			
		/************* MENUS ******************/

		ctGetTripDetails();

		$scope.DoCtrlPagingAct = function(text, page, pageSize, total) 
		{
	        ctGetTripDetailsPagination(text, page, pageSize, total)
    	};

		$scope.ctGetTripStatus = function()
		{
			var tripStatus = $scope.ctTripStatus;
			$scope.tripStatusType = tripStatus;
			ctGetTripDetails();
			
		}
		$scope.ctGetUpdateDetails = function(tripStatus_TripId)
		{
			TripDetailsService.
				ctGetUpdateDetails(tripStatus_TripId, function(data){
					data = data.data;
				});
		}
		$scope.ctTripSearch = function()
		{
			$scope.tripSearchKey = $scope.ctTripSearchTxt;
			ctGetTripSearchKey();
		}
		function ctGetTripDetails()
		{
			
			var status = $scope.tripStatusType;
			
			TripDetailsService.
				ctGetTripDetails(status, function(data){
					data = data.data;
					if(data && data.responseStatus == 200)
					{
						ctAdmin.tripDetails = data.responseData.tripDetails;
						ctAdmin.tripNumEntries =  data.responseData.numEntries;
						$scope.total = ctAdmin.tripNumEntries
					}
					else
					{
						if(data.responseStatus == 3)
						{
							$location.path('/login'); 	
						}
					}
				});
		}
		function ctGetTripDetailsPagination(text, page, pageSize, total)
		{
			
			var status = $scope.tripStatusType;
			var tripSearchKey = $scope.tripSearchKey;

			console.log("status :" +status);
			console.log("tripSearchKey :" +tripSearchKey);
			
			if(tripSearchKey && 
					tripSearchKey.length == 0)
			{
				ctGetTripSearchKeyPagination(page);
			}
			else
			{
				TripDetailsService.
					ctGetTripDetailsPagination(status, page, function(data){
						data = data.data;
						if(data && data.responseStatus == 200)
						{

							ctAdmin.tripDetails = data.responseData.tripDetails;
							ctAdmin.tripNumEntries =  data.responseData.numEntries;
							$scope.total = ctAdmin.tripNumEntries
						}
						else
						{
							if(data.responseStatus == 3)
							{
								$location.path('/login'); 	
							}
						}
					});
			}
			
		}
		function ctGetTripSearchKey()
		{
			var searchKey = $scope.ctTripSearchTxt,
				status = $scope.tripStatusType;
			if(searchKey)
			{
				TripDetailsService.
					ctGetTripSearchKey(searchKey, status, function(data){
							data = data.data;
							if(data && data.responseStatus == 200)
							{
								ctAdmin.tripDetails = data.responseData.tripDetails;
								ctAdmin.tripNumEntries =  data.responseData.numEntries;
								$scope.total = ctAdmin.tripNumEntries
							}
							else
							{
								if(data.responseStatus == 3)
								{
									$location.path('/login'); 	
								}
							}
					});
			}
			else
			{
				console.log("No searchkey");
			}
		}
		function ctGetTripSearchKeyPagination(page)
		{
			var searchKey = $scope.ctTripSearchTxt,
				status = $scope.tripStatusType;
			TripDetailsService.
				ctGetTripSearchKeyPagination(searchKey, page, status, function(data){
									cbk(data);
						});
		}
		
    }

})();
