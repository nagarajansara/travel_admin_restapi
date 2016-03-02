(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .controller('SubActivityController', SubActivityController);

    SubActivityController.$inject = ['$location', '$rootScope', '$scope', '$cookies', '$cookieStore',
																	'SubActivityService', 'ErrorService', 
																	'DAOServices', 'UtilServices', 
																	'$routeParams'];
    function SubActivityController($location, $rootScope, $scope, 
											$cookies, $cookieStore, 
									SubActivityService, ErrorService, 
									DAOServices, UtilServices, $routeParams) 
	{


		var ctAdmin = this;

		ctAdmin.subActivityMenu = true;
		$scope.subActivityStatusType = 'active';

		ctGetSubActivitys();

		$scope.ctAddSubActivity = function()
		{
			var subActivityName = ctAdmin.subActivityName;

			if(subActivityName)
			{
				ctAdmin.addLoader = true;
				ctAdmin.showSubActivity = false;
				SubActivityService.ctAddSubActivity(subActivityName, function(data){
					data = data.data;
					ctAdmin.subActivityName = "";
					if(data && data.responseStatus == 200)
					{
						ctAdmin.addLoader = false;
					}
					else
					{
						ctAdmin.addLoader = false;
						if(data.responseStatus == 3)
						{
							$location.path('/login'); 	
						}
						else
						{
							ctAdmin.showSubActivity = true;
							ctAdmin.subActivityResponse = "Duplicate entry";
						}
					}
					
				});
			}
		}
		$scope.ctUploadBulkSubActivity = function()
		{
			var file = $scope.myFile;
			ctAdmin.addBulkLoader = true;
			SubActivityService.
				ctUploadBulkSubActivity(file, function(data){
					if(data && data.responseStatus == 200)
					{
						ctAdmin.addBulkLoader = false;
					}
					else
					{
						ctAdmin.addBulkLoader = false;
						if(data.responseStatus == 3)
						{
							$location.path('/login'); 	
						}
					}
				});
		}
		$scope.DoCtrlPagingAct = function(text, page, pageSize, total) 
		{
	        ctGetSubActivityDetailsPagination(text, page, pageSize, total)
    	};
		$scope.ctGetSubActivityStatus = function()
		{

			var status = $scope.ctSubActivityStatus;
			$scope.subActivityStatusType = status;
			ctGetSubActivitys();
			
		}
		$scope.ctUpdateSubActivityStatus = function(selectedStatus)
		{
			$scope.subActivityStatusType = selectedStatus;
			ctUpdateSubActivityStatus(selectedStatus);
		}
		function ctUpdateSubActivityStatus(selectedStatus)
		{
			SubActivityService.
				ctUpdateSubActivityStatus(selectedStatus, function(data){
					data = data.data;
					if(data && data.responseStatus == 200)
					{
						console.log(data);
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
		function ctGetSubActivityDetailsPagination(text, page, pageSize, total)
		{
			var status = $scope.subActivityStatusType;
			SubActivityService.
				ctGetSubActivityDetailsPagination(status, page, 
						function(data){
						data = data.data;
						if(data && data.responseStatus == 200)
						{
							ctAdmin.subActivityDetails = data.responseData.subActivityDetails;
							ctAdmin.subActivityNumEntries = data.responseData.numEntries;
							$scope.total = ctAdmin.subActivityNumEntries;
							
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
		function ctGetSubActivitys()
		{
			var status = $scope.subActivityStatusType;
			SubActivityService.
				ctGetSubActivitys(status, function(data){
					data = data.data;
					if(data && data.responseStatus == 200)
					{
						ctAdmin.subActivityDetails = data.responseData.subActivityDetails;
						ctAdmin.subActivityNumEntries = data.responseData.numEntries;
						$scope.total = ctAdmin.subActivityNumEntries;
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

})();
