(function() {
  var document = window.document;
  var $ = window.$;
  var d3 = window.d3;
  $(document).ready(function() {
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
    ecologicalEl.style.backgroundColor = scaleColor(window.fpiEcological);
    ecologicalEl.style.width = scaleWidth(window.fpiEcological) + '%';
    economicEl.style.backgroundColor = scaleColor(window.fpiEconomic);
    economicEl.style.width = scaleWidth(window.fpiEconomic) + '%';
    communityEl.style.backgroundColor = scaleColor(window.fpiCommunity);
    communityEl.style.width = scaleWidth(window.fpiCommunity) + '%';
    window.fpiIndicators.sort(function(a, b) {
        return Number(b.ecological) - Number(a.ecological);
    });
    rankEcologicalEl.innerHTML = window.fpiIndicators.map(o => o.id).indexOf(window.fpiId) + 1;
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
    window.fpiIndicators.sort(function(a, b) {
        return Number(b.economic) - Number(a.economic);
    });
    rankEconomicEl.innerHTML = window.fpiIndicators.map(o => o.id).indexOf(window.fpiId) + 1;
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
    window.fpiIndicators.sort(function(a, b) {
        return Number(b.community) - Number(a.community);
    });
    rankCommunityEl.innerHTML = window.fpiIndicators.map(o => o.id).indexOf(window.fpiId) + 1;
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
    function scaleWidth(value) {
      return 100 * ((value - 1) / 5);
    }
    function scaleColor(value) {
      if (value >= 4) return 'green';
      if (value >= 3) return 'yellow';
      return 'red';
    }
  });
})();
