(function () {
    'use strict';

    angular
        .module('traveladminApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$rootScope', '$scope', '$cookies', '$cookieStore',
																	'LoginService', 'ErrorService', 
																	'DAOServices', 'UtilServices'];
    function LoginController($location, $rootScope, $scope, $cookies, $cookieStore , 
									LoginService, ErrorService, 
									DAOServices, UtilServices) {
        var ctAdmin = this;

		ctAdmin.ctGetLoginValidate = ctGetLoginValidate;
		
		ctLoginInit();
		
		function ctLoginInit()
		{
			if(UtilServices.ctIsLoginValidated())
			{
				$location.path('/dashboard');
			}
		}
		function ctGetLoginValidate()
		{
			ctAdmin.loader = true;
			{
				LoginService.ctGetLoginValidate(ctAdmin.username, ctAdmin.password, function(data){
					ctAdmin.loader = false;
					data = data.data;
					if(data && data.responseStatus == 200)
					{
						$cookieStore.put("userId", data.responseData.userId);
						$cookieStore.put("authToken", data.responseData.authToken);
						$location.path('/dashboard');
					}
					else
					{
						ErrorService.Success(data.responseMsg);
					}
				});
			}
			
		}
    }

})();
