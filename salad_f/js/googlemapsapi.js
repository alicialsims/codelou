// St Matthews Location
 function initialize() {
        var mapCanvas = document.getElementById('mapCanvas');
        var mapOptions = {
          center: new google.maps.LatLng(38.2521916,-85.6554282),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);

// Downtown Location

function initialize2() {
        var mapCanvas = document.getElementById('mapCanvas2');
        var mapOptions = {
          center: new google.maps.LatLng(38.2552316,-85.758192),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize2);

// Shelbyhurst Location

function initialize3() {
        var mapCanvas = document.getElementById('mapCanvas3');
        var mapOptions = {
          center: new google.maps.LatLng(38.2475255,-85.5765332),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize3);

// Nashville Location

function initialize4() {
        var mapCanvas = document.getElementById('mapCanvas4');
        var mapOptions = {
          center: new google.maps.LatLng(36.148202,-86.8084404),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize4);