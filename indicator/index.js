(function() {
  const RADIUS = 50;
  var document = window.document;
  var $ = window.$;
  var d3 = window.d3;
  $(document).ready(function() {
    var backEl = document.getElementById('fpi_indicator_root__back');
    var ecologicalEl = document.getElementById('fpi_indicator_root__content__data__indicator__value__scale--ecological');
    var economicEl = document.getElementById('fpi_indicator_root__content__data__indicator__value__scale--economic');
    var communityEl = document.getElementById('fpi_indicator_root__content__data__indicator__value__scale--community');
    var rankEcologicalEl = document.getElementById('fpi_indicator_root__content__data__ranking__rank--ecological');
    var rankEconomicEl = document.getElementById('fpi_indicator_root__content__data__ranking__rank--economic');
    var rankCommunityEl = document.getElementById('fpi_indicator_root__content__data__ranking__rank--community');
    var totalEcologicalEl = document.getElementById('fpi_indicator_root__content__data__ranking__total--ecological');
    var totalEconomicEl = document.getElementById('fpi_indicator_root__content__data__ranking__total--economic');
    var totalCommunityEl = document.getElementById('fpi_indicator_root__content__data__ranking__total--community');
    var comparisonEcologicalD3 = d3.select('#fpi_indicator_root__content__data__comparison--ecological');
    var comparisonEconomicD3 = d3.select('#fpi_indicator_root__content__data__comparison--economic');
    var comparisonCommunityD3 = d3.select('#fpi_indicator_root__content__data__comparison--community');
    var mapD3 = d3.select('#fpi_indicator_root__hero__map');
    backEl.addEventListener('click', function() {
      window.history.back();
    });
    // MAP
    mapD3.append('rect')
      .attr('x', -1 * RADIUS)
      .attr('y', -1 * RADIUS)
      .attr('width', RADIUS * 2)
      .attr('height', RADIUS * 2)
      .attr('id', 'fpi_indicator_root__hero__map__globe');
    var mapCountriesD3 = mapD3.append('g');
    var projection = d3
      .geoOrthographic()
      .rotate([-1 * Number(window.fpiLongitude) + 20, -1 * Number(window.fpiLatitude), 0])
      .translate([0, 0])
      .scale(RADIUS);
    var path = d3.geoPath().projection(projection);
    d3.json(window.baseUrl + 'world-countries.json', function(countries) {
      window.console.log(countries);
      mapCountriesD3
        .selectAll('.fpi_indicator_root__hero__map__countries__feature')
        .data(countries.features)
        .enter()
        .append('path')
        .attr('class', 'fpi_indicator_root__hero__map__countries__feature')
        .attr('d', function(d) { return path(d); });
    });
    var indicator = d3.geoCircle()
      .center([Number(window.fpiLongitude), Number(window.fpiLatitude)])
      .radius(2)();
    mapD3
      .append('path')
      .attr('d', path(indicator))
      .attr('class', 'fpi_indicator_root__hero__map__indicator');
    // INDICATORS
    ecologicalEl.style.backgroundColor = scaleColor(window.fpiEcological);
    ecologicalEl.style.width = scaleWidth(window.fpiEcological) + '%';
    economicEl.style.backgroundColor = scaleColor(window.fpiEconomic);
    economicEl.style.width = scaleWidth(window.fpiEconomic) + '%';
    communityEl.style.backgroundColor = scaleColor(window.fpiCommunity);
    communityEl.style.width = scaleWidth(window.fpiCommunity) + '%';
    // COMPARISON ECOLOGICAL
    window.fpiIndicators.sort(function(a, b) {
        return Number(b.ecological) - Number(a.ecological);
    });
    rankEcologicalEl.innerHTML = window.fpiIndicators.map(function(o) { return o.id }).indexOf(window.fpiId) + 1;
    totalEcologicalEl.innerHTML = window.fpiIndicators.length;
    comparisonEcologicalD3
      .selectAll('.fpi_indicator_root__content__data__comparison__value')
      .data(window.fpiIndicators)
      .enter()
      .append('div')
      .classed('fpi_indicator_root__content__data__comparison__value', true)
      .style('height', function(d) {
        return scaleWidth(Number(d.ecological)) + '%';
      })
      .style('background-color', function(d) {
        return d.id === window.fpiId ? scaleColor(Number(d.ecological)) : 'rgb(204, 204, 204)';
      });
    // COMPARISON ECONOMIC
    window.fpiIndicators.sort(function(a, b) {
        return Number(b.economic) - Number(a.economic);
    });
    rankEconomicEl.innerHTML = window.fpiIndicators.map(function(o) { return o.id; }).indexOf(window.fpiId) + 1;
    totalEconomicEl.innerHTML = window.fpiIndicators.length;
    comparisonEconomicD3
      .selectAll('.fpi_indicator_root__content__data__comparison__value')
      .data(window.fpiIndicators)
      .enter()
      .append('div')
      .classed('fpi_indicator_root__content__data__comparison__value', true)
      .style('height', function(d) {
        return scaleWidth(Number(d.economic)) + '%';
      })
      .style('background-color', function(d) {
        return d.id === window.fpiId ? scaleColor(Number(d.economic)) : 'rgb(204, 204, 204)';
      });
    // COMPARISONCOMMUNITY
    window.fpiIndicators.sort(function(a, b) {
        return Number(b.community) - Number(a.community);
    });
    rankCommunityEl.innerHTML = window.fpiIndicators.map(function(o) { return o.id; }).indexOf(window.fpiId) + 1;
    totalCommunityEl.innerHTML = window.fpiIndicators.length;
    comparisonCommunityD3
      .selectAll('.fpi_indicator_root__content__data__comparison__value')
      .data(window.fpiIndicators)
      .enter()
      .append('div')
      .classed('fpi_indicator_root__content__data__comparison__value', true)
      .style('height', function(d) {
        return scaleWidth(Number(d.community)) + '%';
      })
      .style('background-color', function(d) {
        return d.id === window.fpiId ? scaleColor(Number(d.community)) : 'rgb(204, 204, 204)';
      });
    // HOISTED FUNCTIONS
    function scaleWidth(value) {
      return 100 * ((value - 1) / 4);
    }
    function scaleColor (value) {
      if (value <= 1.5) return '#ff0000';
      if (value <= 2.0) return '#ff5050';
      if (value <= 2.5) return '#ff7c80';
      if (value <= 3) return '#ff9999';
      if (value <= 3.5) return '#ffcc99';
      if (value <= 4) return '#ffff99';
      if (value <= 4.5) return '#66ff66';
      return '#00cc00';
    };
  });
})();
