(function(){
    'use strict';

    function MainCtrl( dataservice ){
        var self = this;
        self.locations = {};

        getLocations();

        function getLocations() {
        	return dataservice.getData().then( function( data ) {
				self.locations = data;
				console.log( self.locations );
				return self.locations;
			});
        }
    } 
    angular
    	.module( 'jschallengeApp' )
    	.controller( 'MainCtrl', MainCtrl );
    MainCtrl.$inject = [ 'dataservice' ];
})();