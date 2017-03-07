(function() {
  var document = window.document;
  var $ = window.$;
  var d3 = window.d3;
  $(document).ready(function() {
    var ecologicalEl = document.getElementById('fpi_indicator_root__indicator__value__scale--ecological');
    var economicEl = document.getElementById('fpi_indicator_root__indicator__value__scale--economic');
    var communityEl = document.getElementById('fpi_indicator_root__indicator__value__scale--community');
    var comparisonEcologicalD3 = d3.select('#fpi_indicator_root__comparison--ecological');
    ecologicalEl.style.backgroundColor = scaleColor(window.fpiEcological);
    ecologicalEl.style.width = scaleWidth(window.fpiEcological) + '%';
    economicEl.style.backgroundColor = scaleColor(window.fpiEconomic);
    economicEl.style.width = scaleWidth(window.fpiEconomic) + '%';
    communityEl.style.backgroundColor = scaleColor(window.fpiCommunity);
    communityEl.style.width = scaleWidth(window.fpiCommunity) + '%';
    comparisonEcologicalD3
      .selectAll('.fpi_indicator_root__comparison__value')
      .data(window.fpiIndicators.sort(function(a, b) {
        return Number(b.community) - Number(a.community);
      }))
      .enter()
      .append('div')
      .classed('fpi_indicator_root__comparison__value', true)
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
