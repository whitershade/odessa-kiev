var map1;
var map2;
var marker1;
var marker2;

function initMap() {
  var myLatLng1 = {
    lat: 50.446882,
    lng: 30.521168
  };
  var myLatLng2 = {
    lat: 46.48273,
    lng: 30.739805
  };
  map1 = new google.maps.Map(document.getElementById('map-1'), {
    center: myLatLng1,
    zoom: 17,
    disableDoubleClickZoom: false,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    },
  });
  map2 = new google.maps.Map(document.getElementById('map-2'), {
    center: myLatLng2,
    zoom: 17,
    disableDoubleClickZoom: false,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    },
  });
  marker1 = new google.maps.Marker({
    map: map1,
    animation: google.maps.Animation.DROP,
    position: myLatLng1,
  });
  marker2 = new google.maps.Marker({
    map: map2,
    animation: google.maps.Animation.DROP,
    position: myLatLng2,
  });
  var infowindow1 = new google.maps.InfoWindow({
    content: "<h3 style='margin-top: 30px;'>Киев, ул. Хрещатик, дом 34</h3>"
  });
  var infowindow2 = new google.maps.InfoWindow({
    content: "<h3 style='margin-top: 30px;'>Одесса, ул. Греческая, дом 28</h3>"
  });
  marker1.addListener('click', function () {
    infowindow1.open(map1, marker1);
  });
  marker2.addListener('click', function () {
    infowindow2.open(map2, marker2);
  });
}

function playMarkerAnimation() {
  marker1.setAnimation(google.maps.Animation.DROP);
  marker2.setAnimation(google.maps.Animation.DROP);
}