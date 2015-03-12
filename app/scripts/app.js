(function () {
    'use strict';

    angular
    	.module('jschallengeApp', [ 'ui.router' ])
    	.config( function( $stateProvider, $urlRouterProvider ) {
		    $urlRouterProvider.otherwise('/main');
		    $stateProvider
		        // main <- starting state
		        .state('main', {
		            url: '/main',
		            templateUrl: '../views/main.html',
		            controller: 'MainCtrl as main'
	        } );
		});
})();