( function () {
	'use strict';

	/* @ngInject */
	function dataservice( $http, $q ) {
		var start = Date.now() + 24 * 3600 * 1000;
		var end = start + 2 * 3600 * 1000;
		var url = 'http://jschallenge.smove.sg/provider/1/availability?book_start=' + start + '&book_end=' + end;

		function getData() {
			return $http.get( url )
				.then( function ( response ) {
					return response.data;
				} )
				.catch( function ( error ) {
					var msg = 'query for datas failed. ' + error.data.description;
					return $q.reject( message );
				} );
		}

		var service = {
			getData: getData
		};

		return service;

	}

	angular
		.module( 'jschallengeApp' )
		.factory( 'dataservice', dataservice );

} ) ();
