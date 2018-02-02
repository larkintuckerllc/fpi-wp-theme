<?php
  $items = array();
  $args = array(
    'post_type' => 'fpi_menu',
    'posts_per_page' => -1,
    'orderby' => 'title',
    'order' => 'ASC'
  );
  $loop = new WP_Query( $args );
  while ( $loop->have_posts() ) {
    $loop->the_post();
    $items[] = array(
      'id' => get_the_ID(),
      'url' => get_field('url'),
      'image' => get_field('image'),
      'name' => get_field('name'),
    );
  }
  wp_reset_query();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<style>
  div {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    font-family: sans-serif;
    color: white;
  }
  #controls {
    position: fixed;
    display: flex;
    justify-content: space-around;
    bottom: 120px;
    left: 0px;
    width: 100%;
  }
  #controls__left {
    width: 0px;
    height: 0px;
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent;
    border-right: 90px solid white;
  }
  #controls__right {
    width: 0px;
    height: 0px;
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent;
    border-left: 90px solid white;
  }
  #frame {
    display: flex;
    position: absolute;
    align-items: center;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #frame__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .frame__container__item {
    margin: 40px;
    width: 300px;
  }
  .frame__container__item__image {
    width: 300px;
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .frame__container__item__name {
    width: 300px;
    padding: 20px;
  }
  .frame__container__item__name__text {
    text-align: center;
    font-size: 1.5em;
    white-space: nowrap;
    overflow: hidden;
  }
  .frame__container__item__name__text a {
    color: white;
    text-decoration: none;
  }
</style>
</head>
<body>
  <div id="frame">
    <div id="frame__container">
    </div>
  </div>
  <div id="controls">
    <div
      id="controls__left"
      style="display: none;"
    ></div>
    <div
      id="controls__right"
      style="display: none;"
    ></div>
  </div>
  <script>
    window.items = <?php echo json_encode( $items ); ?>;
    document.addEventListener("DOMContentLoaded", function() {
     function parseQueryString() {
       var parsed = {};
       var qs = window.location.search;
       if (!qs) {
         return parsed;
       }
       var qsArray = qs.substr(1).split('&');
       for (var i = 0; i < qsArray.length; ++i) {
         var parameterArray = qsArray[i].split('=', 2);
         if (parameterArray.length === 1) {
           parsed[parameterArray[0]] = '';
         } else {
           parsed[parameterArray[0]] =
           decodeURIComponent(parameterArray[1].replace(/\+/g, ' '));
         }
       }
       return parsed;
     };
      var MAX_ITEMS = 6;
      var parsed = parseQueryString();
      offset = Number(parsed.offset !== undefined ? Number(parsed.offset) : 0);
      function itemHTML(o) {
        var rows = [];
        rows.push('<div class="frame__container__item">');
        rows.push('<a href="' + o.url + '">');
        rows.push('<div style="background-image: url(\'' + o.image + '\')" class="frame__container__item__image"></div>');
        rows.push('</a>');
        rows.push('<div class="frame__container__item__name">');
        rows.push('<div class="frame__container__item__name__text">');
        rows.push('<a href="' + o.url + '">' + o.name + '</a>');
        rows.push('</div>');
        rows.push('</div>');
        rows.push('</div>');
        return rows.join('\n');
      }
      var itemsLength = window.items.length;
      var inner = window.items
        .filter(function(_, i) { return i >= offset && i < Math.min(itemsLength, offset + MAX_ITEMS); })
        .map(itemHTML)
        .join('\n');
      var frameContainerEl = document.getElementById('frame__container');
      var controlsLeftEl = document.getElementById('controls__left');
      var controlsRightEl = document.getElementById('controls__right');
      controlsLeftEl.addEventListener('click', function() {
        window.location.assign(window.location.pathname + '?offset=' + (offset - MAX_ITEMS).toString());
      });
      controlsRightEl.addEventListener('click', function() {
        window.location.assign(window.location.pathname + '?offset=' + (offset + MAX_ITEMS).toString());
      });
      frameContainerEl.innerHTML = inner;
      if (offset !== 0) controlsLeftEl.style.display = 'block';
      if ((offset + MAX_ITEMS) < itemsLength) controlsRightEl.style.display = 'block';
    });
  </script>
</body>
</html>
