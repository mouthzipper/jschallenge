( function () {
	'use strict';

	/* @ngInject */
	function dataservice( $http, $q, logger ) {
		var start = Date.now() + 24 * 3600 * 1000;
		var end = start + 2 * 3600 * 1000;
		var url = 'http://jschallenge.smove.sg/provider/1/availability?book_start=' + start + '&book_end=' + end;

		var service = {
			getData: getData
		};

		return service;

		function getData() {
			return $http.get( url )
				.then(success)
				.catch(fail);

			function success( response ) {
				return response.data;
			}

			function fail( error ) {
				var msg = 'query for posts failed. ' + error.data.description;
				return $q.reject(msg);
			}
		}
	}

	angular
		.module( 'jschallengeApp' )
		.factory( 'dataservice', dataservice );

} ) ();
