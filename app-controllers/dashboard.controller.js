(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$location', '$rootScope', '$scope', '$cookies', '$cookieStore', 
												'DashboardService', 'UtilServices'];
    function DashboardController($location, $rootScope, $scope, $cookies, $cookieStore, DashboardService, 
										UtilServices) {
		var ctAdmin = this;
		ctAdmin.ctGetDashboardData = ctGetDashboardData;


		/************* MENUS ******************/

			ctAdmin.dasboardMenu = true;
			
		/************* MENUS ******************/

		
		$scope.currentDefaultUserType = "all";
		


		ctDashboardInit();

		$scope.DoCtrlPagingAct = function(text, page, pageSize, total) 
		{
	        ctGetVendorListPagination(text, page, pageSize, total)
    	};
		$scope.ctUpdateApprovedStatus = function(selectedStatus)
		{
			DashboardService.
					ctUpdateApprovedStatus(selectedStatus, 
								selectedStatus, function(data){
					data = data.data;
					if(data && data.responseStatus == 200)
					{
						
					}
				});
		};
		$scope.ctVendorListSearch = function()
		{
			$scope.vendorSearchKey = $scope.ctVendorSearchTxt;
			ctGetVendorListSearchKey();
		};
		$scope.ctGetUserBasedApprovedType = function()
		{
			var userType = $scope.ctUserType;
			$scope.currentDefaultUserType = userType;
			if(userType)
			{

				if(true)
				{

					DashboardService.
							ctGetUserBasedApprovedType(userType, function(data){
								data = data.data;
								if(data && data.responseStatus == 200)
								{
									ctAdmin.names = data.responseData.vendorList;
									ctAdmin.vendorNumEntries = data.responseData.numEntries;
									$scope.total = ctAdmin.vendorNumEntries;
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
					ctGetVendorListSearchKey();		
				}
			}
			
		};
		function ctGetVendorListPagination(text, page, pageSize, total)
		{
			if($scope.currentDefaultUserType)
			{
				if($scope.vendorSearchKey && 
							$scope.vendorSearchKey.length > 0)
				{
					
					ctGetVendorListSearchKeyPagination(page);
					
				}
				else
				{
					DashboardService.
					ctGetVendorListPagination(UtilServices.
								ctGetCookieName('authToken'), 
								page,
								$scope.currentDefaultUserType,
								function(data){
									data = data.data;
									if(data && data.responseStatus == 200)
									{
										ctAdmin.names = data.responseData.vendorList;
										ctAdmin.vendorNumEntries = data.responseData.numEntries;
										$scope.total = ctAdmin.vendorNumEntries;
									}
									else
									{
										if(data.ctGetDashboardData == 3)
										{
											$location.path('/login'); 	
										}
										else
										{
											console.log(data);
										}
									}
										
								});
				}
			}
				
		};
		function ctDashboardInit()
		{
			ctAdmin.approvedStatus = DashboardService.ctGetApprovedDropDown();
			if(UtilServices.ctIsLoginValidated())
			{
					
				ctGetDashboardData();
				
			}
			else
			{
				$location.path('/login'); 
			}	
		}
		function ctGetDashboardData()
		{
			
			DashboardService.ctGetDashboardData(function(data){
				data = data.data
				if(data && data.responseStatus == 200)
				{
					ctAdmin.names = data.responseData.vendorList;
					ctAdmin.vendorNumEntries = data.responseData.numEntries;
					$scope.total = ctAdmin.vendorNumEntries;
				}
				else
				{
					if(data.ctGetDashboardData == 3)
					{
						$location.path('/login'); 	
					}
					else
					{
						console.log(data);
					}
				}
			});
		}
		function ctGetVendorListSearchKey()
		{
			var searchKey = $scope.vendorSearchKey;
			if(searchKey && searchKey.length > 0)
			{
				DashboardService.ctGetVendorListSearchKey(searchKey, $scope.currentDefaultUserType,
					function(data){
						data = data.data;
						if(data && data.responseStatus == 200)
						{
							ctAdmin.names = data.responseData.vendorList;
							ctAdmin.vendorNumEntries = data.responseData.numEntries;
							$scope.total = ctAdmin.vendorNumEntries;
						}
						else
						{
							if(data.ctGetDashboardData == 3)
							{
								$location.path('/login'); 	
							}
							else
							{
								console.log(data);
							}
						}
					});
			}
			else
			{
				console.log("No searchKey");
			}
		}
		function ctGetVendorListSearchKeyPagination(page)
		{
			var searchKey = $scope.vendorSearchKey;
			if(searchKey && searchKey.length > 0)
			{
				DashboardService.
					ctGetVendorListSearchKeyPagination(searchKey, 
							page, $scope.currentDefaultUserTyp,
							function(data){
								data = data.data;
								if(data && data.responseStatus == 200)
								{
									ctAdmin.names = data.responseData.vendorList;
									ctAdmin.vendorNumEntries = data.responseData.numEntries;
									$scope.total = ctAdmin.vendorNumEntries;
								}
								else
								{
									if(data.ctGetDashboardData == 3)
									{
										$location.path('/login'); 	
									}
									else
									{
										console.log(data);
									}
								}	
									
						});
				
			}
			else
			{
				console.log("No searchKeyPagination");
			}
		}
		
	}

})();

