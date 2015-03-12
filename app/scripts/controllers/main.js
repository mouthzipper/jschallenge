( function () {
	'use strict';

	function MainCtrl( dataservice ) {

		var self = this;
		self.data = [];

	}

	angular
		.module( 'jschallengeApp' )
		.controller( 'MainCtrl', MainCtrl );

	MainCtrl.$inject = [ 'dataservice' ];
})();