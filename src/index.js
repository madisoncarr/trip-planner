console.log('i am in the index');
import { marker } from './marker';

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFkaXNvbmNhcnIiLCJhIjoiY2p4YWtqeWt5MDM1bDQwcWhrdThkMW9wdSJ9.f2_3hB4zb9YzW_T0D3FzrQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const chicagoOffice = document.createElement('div');
chicagoOffice.style.width = '32px';
chicagoOffice.style.height = '39px';
chicagoOffice.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(chicagoOffice).setLngLat([-87.6354, 41.8885]).addTo(map);

export { map };
