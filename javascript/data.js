const singaporeCoordinates = [1.3521, 103.8198];
const singaporeBounds = [[1.4486, 104.0034],[1.2643, 103.6404]];

function createSingaporeMap() {
  const map = L.map("map");
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    minZoom: 11,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  //map.maxBounds(singaporeBounds);
  map.setView(singaporeCoordinates, 12);
  return map;
}