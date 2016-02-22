(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .controller('TripdetailsviewController', TripdetailsviewController);

	TripdetailsviewController.$inject = [	'$location', '$rootScope', '$scope', 
										'$cookies', '$cookieStore',
										'TripDetailsViewService',									 
										'DAOServices', 'UtilServices', '$routeParams'
									];
    function TripdetailsviewController($location, $rootScope, $scope, 
									$cookies, $cookieStore , 
									TripDetailsViewService, 
									DAOServices, UtilServices, $routeParams) 
	{

		var ctAdmin = this;
		$scope.tripStatusType = "active";

		ctGetTripDetailsBasedId()
		ctAdmin.uploaded_Trip_IMG_URL = UtilServices.
												ctGetUploadedTripImageURL();

		/************* MENUS ******************/
	
			ctAdmin.tripDetailsMenu = true;
			
		/************* MENUS ******************/
		
		function ctGetTripDetailsBasedId()
		{
			TripDetailsViewService.
				ctGetTripDetailsBasedId($routeParams.tripId, function(data){
					data = data.data;
					var responseData;
					if(data && data.responseStatus == 200)
					{
						if(data.responseData.length > 0)
						{
							responseData = data.responseData[0];
							ctAdmin.tripimages = responseData.tripimages;
							ctAdmin.tripimages = ctAdmin.tripimages.split(",");
							ctAdmin.tripTitle = responseData.title;
							ctAdmin.description = responseData.description;
							ctAdmin.price = responseData.price;
							ctAdmin.todate = responseData.todate;
							ctAdmin.fromdate = responseData.fromdate;
							ctAdmin.route = responseData.route;
							ctAdmin.guidelines = responseData.guidelines;
							ctAdmin.daywisedescription = responseData.daywisedescription;
							ctAdmin.daywisedescription = ctAdmin.daywisedescription.split("@@");
							ctAdmin.tripId = responseData.id;
							ctAdmin.isKeywords = responseData.keywords;
							if(ctAdmin.isKeywords == "EMPTY_TXT")
							{
								ctAdmin.isKeywordAddBtn = true;
								ctAdmin.isKeywordsUpdateBtn = false;
							}
							else
							{
								ctAdmin.metaKeywords = responseData.keywords;
								ctAdmin.isKeywordsUpdateBtn = true;
								ctAdmin.isKeywordAddBtn = false;
							}
							
						}
						else
						{
							console.log("ERROR Data");
						}
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
		$scope.ctAddMetaKeywords = function()
		{
			var keywords = ctAdmin.metaKeywords,
				tripId = ctAdmin.tripId;
			if(keywords && keywords.length > 0
				&& tripId)
			{
				ctAdmin.loader = true;
				TripDetailsViewService.
					ctAddMetaKeywords(keywords, tripId, function(data){
						ctAdmin.loader = false;			
						if(data && data.responseStatus == 200)
						{
							alert("Inserted successfully");
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
				alert("Please enter your keywords");
			}
		}
		$scope.ctUpdateMetaKeywords = function()
		{
			var keywords = ctAdmin.metaKeywords,
				tripId = ctAdmin.tripId;
			if(keywords && tripId)
			{
				ctAdmin.loader = true;
				TripDetailsViewService.
					ctUpdateMetaKeywords(keywords, tripId, function(data){
						ctAdmin.loader = false;			
						if(data && data.responseStatus == 200)
						{
							alert("Updateed successfully");
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
				alert("Please enter your keywords");
			}
		}
    }	

})();

