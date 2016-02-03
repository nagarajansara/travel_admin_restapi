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
    }	

})();

