(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .controller('ActivityController', ActivityController);

	ActivityController.$inject = [	'$location', '$rootScope', '$scope', 
										'$cookies', '$cookieStore',
										'ActivityService',									 
										'DAOServices', 'UtilServices'
									];
    function ActivityController($location, $rootScope, $scope, 
									$cookies, $cookieStore , 
									ActivityService, 
									DAOServices, UtilServices) 
	{

		var ctAdmin = this;

		ctAdmin.activityMenu = true;
		$scope.activityStatusType = 'active';

		ctGetActivitys();

		$scope.ctAddActivity = function()
		{
			var activityName = ctAdmin.activityName;
			if(activityName)
			{
				ctAdmin.addLoader = true;	
				ActivityService.
						ctAddActivity(activityName, function(data){
							data = data.data;
							ctAdmin.activityName = "";
							if(data && data.responseStatus == 200)
							{
								ctAdmin.addLoader = false;											
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
		$scope.DoCtrlPagingAct = function(text, page, pageSize, total) 
		{
	        ctGetActivityDetailsPagination(text, page, pageSize, total)
    	};
		$scope.ctGetActivityStatus = function()
		{

			var status = $scope.ctActivityStatus;
			$scope.activityStatusType = status;
			ctGetActivitys();
			
		}
		$scope.ctGetUpdateActivityStatus = function(selectedStatus)
		{
			ActivityService.
				ctGetUpdateActivityStatus(selectedStatus, function(data){
													console.log(data);				
										});
		}
		$scope.ctActivitySearch = function()
		{
			$scope.activitySearchKey = $scope.ctActivitySearchTxt;
			ctGetActivitySearch();
		}
		function ctGetActivitys()
		{
			var status = $scope.activityStatusType;
			ActivityService.
				ctGetActivitys(status, function(data){
					data = data.data;
					if(data && data.responseStatus == 200)
					{
						ctAdmin.activityDetails = data.responseData.activityDetails;
						ctAdmin.activityNumEntries = data.responseData.numEntries;
						$scope.total = ctAdmin.activityNumEntries;
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
		function ctGetActivityDetailsPagination(text, page, pageSize, total)
		{
			var status = $scope.activityStatusType;
			ActivityService.
				ctGetActivityDetailsPagination(status, page, 
								function(data){
								data = data.data;
								if(data && data.responseStatus == 200)
								{
									ctAdmin.activityDetails = data.responseData.activityDetails;
									ctAdmin.activityNumEntries = data.responseData.numEntries;
									$scope.total = ctAdmin.activityNumEntries;
									
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
		function ctGetActivitySearch()
		{
			var status = $scope.activityStatusType,
				searchKey = $scope.activitySearchKey;
			if(searchKey)
			{
				ActivityService.
					ctGetActivitySearch(status, searchKey, function(data)
							{
								data = data.data;
								if(data && data.responseStatus == 200)
								{
									ctAdmin.activityDetails = data.responseData.activityDetails;
									ctAdmin.activityNumEntries = data.responseData.numEntries;
									$scope.total = ctAdmin.activityNumEntries;
									
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

    }	

})();

