var map = L.map("mapid").setView([-25.2744, 133.7751], 4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

var redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var headOfficeLatLng = [-32.1439, 115.9708];
var victoriaLatLng = [-38.00005, 145.25543];

var markers = [
  // Marker for 4 Bessemer Rd, FORRESTDALE, WA, 6112
  L.marker(headOfficeLatLng, { icon: redIcon }).bindPopup(
    "<b>Western Australia - Head Office</b",
    { autoClose: false }
  ),
  // Marker for 1A Technology Crt, Hallam, VIC, 3803
  L.marker(victoriaLatLng, { icon: redIcon }).bindPopup(
    "<b style='font-weight bold'>Victoria</b>",
    { autoClose: false }
  ),
];

for (var i = 0; i < markers.length; i++) {
  markers[i].addTo(map).openPopup();
}


L.polyline([headOfficeLatLng,victoriaLatLng]).addTo(map);
