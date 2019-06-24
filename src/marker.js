const map = require('./index');
const mapbox = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

function buildMarker(typeOfMarker, coordinates) {
  const newMarker = document.createElement('div');
  newMarker.style.width = '32px';
  newMarker.style.height = '39px';
  newMarker.style.backgroundImage = `url(${typeOfMarker})`;

  new mapboxgl.Marker(newMarker).setLngLat([coordinates]).addTo(map);
}

module.exports = buildMarker;
