<?php get_header(); ?>
<div
  class="jumbotron"
  style="background-image: url(<?php echo get_template_directory_uri() . '/img/hero.jpg'; ?>);"
>
  <div class="container">
    <h1>Placeholder</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3>Map</h3>
      <p>Donec id elit non mi porta gravida at eget metus.</p>
      <p><a class="btn btn-default" href="map" role="button">View details &raquo;</a></p>
    </div>
    <div class="col-sm-4">
      <h3>Data</h3>
      <p>Donec id elit non mi porta gravida at eget metus.</p>
      <p><a class="btn btn-default" href="data" role="button">View details &raquo;</a></p>
    </div>
    <div class="col-sm-4">
      <h3>Methodogy</h3>
      <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
      <p><a class="btn btn-default" href="methodology" role="button">View details &raquo;</a></p>
    </div>
  </div>
  <div id="home_body__news" class="row">
    <div class="col-sm-3">
      <div
        style="background-image: url('<?php echo get_template_directory_uri() . '/img/seafood.jpg'; ?>');"
        class="home_body__news__item__image"
      ></div>
      <p>Donec id elit non mi porta gravida at eget metus.</p>
    </div>
    <div class="col-sm-3">
      <div
        class="home_body__news__item__image"
      ></div>
      <p>Donec id elit non mi porta gravida at eget metus.</p>
    </div>
    <div class="col-sm-3">
      <div
        class="home_body__news__item__image"
      ></div>
      <p>Donec id elit non mi porta gravida at eget metus.</p>
    </div>
    <div class="col-sm-3">
      <div
        class="home_body__news__item__image"
      ></div>
      <p>Donec id elit non mi porta gravida at eget metus.</p>
    </div>
  </div>
</div>
<?php get_footer(); ?>
