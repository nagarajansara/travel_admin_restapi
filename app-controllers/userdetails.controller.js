(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .controller('UserDetailsController', UserDetailsController);

    UserDetailsController.$inject = ['$location', '$rootScope', '$scope', '$cookies', '$cookieStore',
																	'UserDetailsService', 'ErrorService', 
																	'DAOServices', 'UtilServices', 
																	'$routeParams'];
    function UserDetailsController($location, $rootScope, $scope, $cookies, $cookieStore , 
									UserDetailsService, ErrorService, 
									DAOServices, UtilServices, $routeParams) {


			var ctAdmin = this;

			var userEmail = $routeParams.email;
			ctGetInitUserDetails();

			/************* MENUS ******************/
	
				ctAdmin.dasboardMenu = true;
			
			/************* MENUS ******************/

			function ctGetInitUserDetails()
			{
				UserDetailsService.
					ctGetUserDetailsBasedEmail(userEmail, function(data){

						data = data.data;
						if(data && data.responseStatus == 200)
						{
							var responseData = data.responseData[0];
							ctAdmin.email = responseData.email;
							ctAdmin.firstname = responseData.firstname;
							ctAdmin.lastname = responseData.lastname;
							ctAdmin.address = responseData.address;
							ctAdmin.phoneno = responseData.phoneno;
							ctAdmin.pancardno = responseData.pancardno;
							ctAdmin.pincode = responseData.pincode;
							ctAdmin.state = responseData.state;
							ctAdmin.mobile = responseData.mobile;
							ctAdmin.organizationname = responseData.organizationname;
							ctAdmin.crdits = responseData.crdits;
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
