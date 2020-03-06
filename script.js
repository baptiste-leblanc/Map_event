// votre code JS
var mymap = L.map('mapid').setView([48.8534, 2.3488], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianVsaWVua29tcCIsImEiOiJjanR1NGFuYjkxMmNvNDBucGI1aXZ4Y285In0.hiSplFD5CODUd9yxRO_qkg'
}).addTo(mymap)


var marker = L.marker([48.856156, 2.307890]).addTo(mymap);
marker.bindPopup("Ecole Supérieure<br>du Digital").openPopup();

var marker = L.marker([48.852994, 2.349897]).addTo(mymap);
marker.bindPopup("Notre Dame<br>de Paris").openPopup();

