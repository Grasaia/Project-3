  let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 41.880692, lng: -87.674370 },
    zoom: 8,
  });
}

initMap();

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