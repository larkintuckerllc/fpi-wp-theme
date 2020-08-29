// @flow
import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { scaleWidth, colorScale, initialZoom } from './util';
import './index.css';
import satellite from './img/satellite.png';
import topo from './img/topo.png';

const TILE_SRC = satellite;
const TILE_ALT = 'satellite';
const rootEl = document.getElementById('root');
const rootTile = document.createElement('div');
const rootTiles = document.createElement('div');
const rootTileImage = document.createElement('img');
let tileClosed = true;
let map = null;
let tileLayer = null;
// MAP
const rootMapEl = document.createElement('div');
rootMapEl.id = 'root__map';
// $FlowFixMe
rootEl.appendChild(rootMapEl);
// TILES
rootTiles.id = 'root__tiles';
rootTiles.className = 'root__tiles--closed';
rootTiles.innerHTML = `
  <img id="root__tiles__satellite" src="${satellite}" height="50" width="50" alt="satellite" />
  <img id="root__tiles__topo" src="${topo}" height="50" width="50" alt="topo" />
`;
// $FlowFixMe
rootEl.appendChild(rootTiles);
const rootTilesSatellite = document.getElementById('root__tiles__satellite');
const rootTilesTopo = document.getElementById('root__tiles__topo');
// $FlowFixMe
rootTilesSatellite.addEventListener('click', () => {
  rootTileImage.src = satellite;
  rootTileImage.alt = 'satellite';
  // $FlowFixMe
  tileLayer.removeFrom(map);
  tileLayer = L.tileLayer(
    'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    },
  ).addTo(map);
});
// $FlowFixMe
rootTilesTopo.addEventListener('click', () => {
  rootTileImage.src = topo;
  rootTileImage.alt = 'topo';
  // $FlowFixMe
  tileLayer.removeFrom(map);
  tileLayer = L.tileLayer(
    'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
    },
  ).addTo(map);
});
// TILE
rootTile.id = 'root__tile';
rootTile.addEventListener('click', () => {
  if (tileClosed) {
    rootTiles.className = '';
  } else {
    rootTiles.className = 'root__tiles--closed';
  }
  tileClosed = !tileClosed;
});
rootTileImage.src = TILE_SRC;
rootTileImage.alt = TILE_ALT;
rootTileImage.height = 50;
rootTileImage.width = 50;
rootTile.appendChild(rootTileImage);
// $FlowFixMe
rootEl.appendChild(rootTile);

// LEAFLET
map = L.map('root__map', { zoomControl: false }).setView([0, 0], initialZoom(window.innerWidth));
L.control.zoom({
  position: 'bottomright'
}).addTo(map);
tileLayer = L.tileLayer(
  'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  },
).addTo(map);
for (let i = 0; i < window.indicators.length; i += 1) {
  const indicator = window.indicators[i];
  const latLng = L.latLng(Number(indicator.latitude), Number(indicator.longitude));
  const icon = L.icon({
    iconUrl: indicator.image,
    iconSize: [30, 20],
    iconAnchor: [15, 10],
  });
  const marker = L.marker(
    L.latLng(latLng),
    {
      icon,
    },
  );
  const indicatorHtml = (name: string, value: number) => (`
    <div class="root_map__popup__indicator">
      <div class="root_map__popup__indicator__name">
        ${name}
      </div>
      <div class="root_map__popup__indicator__value">
        <div
          class="root_map__popup__indicator__value__container"
          style="width: ${scaleWidth(value)}%"
        >
          <div
            class="root_map__popup__indicator__value__container__bar"
            style="background-color: ${colorScale(value)}"
          >
          </div>
        </div>
      </div>
    </div>
  `);
  const html = `
    <div
      class="root_map__popup__hero"
      style="background-image: url(${indicator.image})"
    >
      <div
        class="root_map__popup__hero__name"
      >
        ${indicator.name}
      </div>
    </div>
    ${indicatorHtml('Ecological Performance', Number(indicator.ecological))}
    ${indicatorHtml('Economic Performance', Number(indicator.economic))}
    ${indicatorHtml('Community Performance', Number(indicator.community))}
    <div class="root_map__popup__scale">
      <div class="root_map__popup__scale__good">Good</div>
      <div>Poor</div>
    </div>
  `;
  const popup = L.popup()
    .setLatLng(latLng)
    .setContent(html);
  marker.bindPopup(popup);
  marker.addTo(map);
}
