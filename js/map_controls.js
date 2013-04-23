var map;

function initialize() {
  var mapOptions = {
    zoom: 25,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  
  var startMarker = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "#7ca2ce",
    fillOpacity: 1,
    scale: 4,
    strokeColor: "transparent"
  };

  var startMarkerHalo = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "white",
    fillOpacity: 0,
    scale: 0.75,
    strokeColor: "#a5bfdd",
    strokeWeight: 12
  };

  var locMarker = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    fillColor: "#7ca2ce",
    fillOpacity: 1,
    scale: 5,
    strokeColor: "transparent",
    strokeWeight: 5
  };


  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);


      // var marker = new google.maps.Marker({
      //   position: pos,
      //   icon: locMarker,
      //   map: map
      // });

      // var markerStart = new google.maps.Marker({
      //   position: pos,
      //   icon: startMarker,
      //   map: map
      // });

      // var markerStartHalo = new google.maps.Marker({
      //   position: pos,
      //   icon: startMarkerHalo,
      //   map: map
      // });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser does not support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);