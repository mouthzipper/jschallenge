( function () {
	'use strict';
	angular
		.module( 'jschallengeApp' )
		.directive( 'myMap', function () {
		    // directive link function
		    var link = function( scope, element, attrs ) {
		        var map, infoWindow;
		        var markers = [];
		        
		        // map config
		        var mapOptions = {
		            center: new google.maps.LatLng(1.2800945, 103.8509491),
		            zoom: 12,
		            mapTypeId: google.maps.MapTypeId.ROADMAP,
		            scrollwheel: true
		        };
		        
		        // init the map
		        function initMap() {
		            if (map === void 0) {
		                map = new google.maps.Map(element[0], mapOptions);
		            }
		        }    
		        
		        // place a marker
		        function setMarker(map, position, title, content) {
		            var marker;
		            var markerOptions = {
		                position: position,
		                map: map,
		                title: title,
		                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
		            };

		            marker = new google.maps.Marker(markerOptions);
		            markers.push(marker); // add marker to array
		            
		            google.maps.event.addListener(marker, 'click', function () {
		                // close window if not undefined
		                if (infoWindow !== void 0) {
		                    infoWindow.close();
		                }
		                // create new window
		                var infoWindowOptions = {
		                    content: content
		                };
		                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
		                infoWindow.open(map, marker);
		            });
		        }

		        scope.$watch(function() { return scope.main.locations; }, function() {
				  initMap();              
				  // clear markers
				  for (var i = 0; i < markers.length; i++ ) {
				    markers[i].setMap(null);
				  }
				  markers = [];

				 angular.forEach( scope.main.locations, function(value, key){
		         	console.log( value );
				    // a single object in this example could be:
				    // { lat: 50, lon: 3, title: "my title", content: "my content" }
				    var location = new google.maps.LatLng(value.latitude, value.longitude);
				    console.log( location );
				    setMarker(map, location, value.parking_shortname, value.parking_name);
				  });
				});
		        // show the map and place some markers
		    //     initMap();
		    //     	// console.log( scope );
		    //      angular.forEach( scope.main.locations, function(value, key){
		    //      	console.log( value );
				  //   // a single object in this example could be:
				  //   // { lat: 50, lon: 3, title: "my title", content: "my content" }
				  //   var location = new google.maps.LatLng(value.latitude, value.longitude);
				  //   console.log( location );
				  //   setMarker(map, location, value.parking_shortname, value.parking_name);
				  // });
		        // setMarker(map, new google.maps.LatLng(51.508515, -0.125487), 'London', 'Just some content');
		        // setMarker(map, new google.maps.LatLng(52.370216, 4.895168), 'Amsterdam', 'More content');
		        // setMarker(map, new google.maps.LatLng(48.856614, 2.352222), 'Paris', 'Text here');
		    };
	    
		    return {
		        restrict: 'A',
		        template: '<div id="map_canvas"></div>',
		        replace: true,
		        link: link
		    };
		});

})();
