function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: -30.0346, lng: -51.2177 }, // Centro aproximado do RS
  });