function init() {
    var el = document.getElementById('mapcanvas');
    var myLocation = new google.maps.LatLng(41.880692, -87.674370);
    var mapOptions = {
	  center: myLocation,
	  zoom: 15,
	  mapTypeId: google.maps.MapTypeId.SATELLITE,
	  mapTypeControlOptions: {
	  position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);
    var marker = new google.maps.Marker({
	  position: myLocation,
	  map: myMap,
      animation: google.maps.Animation.DROP,
      icon:'img/b-ball.png'
    });


    var contentString = ='<h1>United Center</h1><p>The United Center is the home stadium where the Chicago Bulls go to play their games</p>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
    });
    }
    google.maps.event.addDomListener(window, 'load', init);