// @flow
import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { scaleWidth, colorScale } from './util';
import './index.css';

const map = L.map('root').setView([0, 0], 0);
L.tileLayer(
  'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  // 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    // attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap,
    // iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan,
    // METI, Esri China (Hong Kong), and the GIS User Community',
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
    <div class="root__popup__indicator">
      <div class="root__popup__indicator__name">
        ${name}
      </div>
      <div class="root__popup__indicator__value">
        <div
          class="root__popup__indicator__value__container"
          style="width: ${scaleWidth(value)}%"
        >
          <div
            class="root__popup__indicator__value__container__bar"
            style="background-color: ${colorScale(value)}"
          >
          </div>
        </div>
      </div>
    </div>
  `);
  const html = `
    <div
      class="root__popup__hero"
      style="background-image: url(${indicator.image})"
    >
      <div
        class="root__popup__hero__name"
      >
        ${indicator.name}
      </div>
    </div>
    ${indicatorHtml('Ecological Performance', Number(indicator.ecological))}
    ${indicatorHtml('Economic Performance', Number(indicator.economic))}
    ${indicatorHtml('Community Performance', Number(indicator.community))}
    <div class="root__popup__scale">
      <div class="root__popup__scale__good">Good</div>
      <div>Poor</div>
    </div>
  `;
  const popup = L.popup()
    .setLatLng(latLng)
    .setContent(html);
  marker.bindPopup(popup);
  marker.addTo(map);
}
