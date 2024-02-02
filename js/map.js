var map = L.map('container-ubicacion-map').setView([-32.3117766, -58.0617662], 15)


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-32.3117766, -58.0617662]).addTo(map);