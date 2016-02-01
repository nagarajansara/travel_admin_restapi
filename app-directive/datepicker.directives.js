angular
        .module('traveladminApp')
        .directive('innerPageHeader', DatepickerDirective);
	function DatepickerDirective()
	{
		return {
	        restrict: 'E',
		    template: '<h1> Its workiing fine </h1>',
	      
	    }
	}	