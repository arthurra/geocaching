function initialize(){var e={zoom:30,disableDefaultUI:!0,mapTypeId:google.maps.MapTypeId.ROADMAP},t={path:google.maps.SymbolPath.CIRCLE,fillColor:"#7ca2ce",fillOpacity:1,scale:4,strokeColor:"transparent"},n={path:google.maps.SymbolPath.CIRCLE,fillColor:"white",fillOpacity:0,scale:.75,strokeColor:"#a5bfdd",strokeWeight:12},r={path:google.maps.SymbolPath.FORWARD_CLOSED_ARROW,fillColor:"#7ca2ce",fillOpacity:1,scale:5,strokeColor:"transparent",strokeWeight:5};map=new google.maps.Map(document.getElementById("map-canvas"),e);navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){var t=new google.maps.LatLng(e.coords.latitude,e.coords.longitude);map.setCenter(t)},function(){handleNoGeolocation(!0)}):handleNoGeolocation(!1)}function handleNoGeolocation(e){if(e)var t="Error: The Geolocation service failed.";else var t="Error: Your browser does not support geolocation.";var n={map:map,position:new google.maps.LatLng(60,105),content:t};map.setCenter(n.position)}var map;google.maps.event.addDomListener(window,"load",initialize);