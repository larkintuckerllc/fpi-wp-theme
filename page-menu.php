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
    background-color: yellow;
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
    font-size: 2em;
    white-space: nowrap;
    overflow: hidden;
  }
  .frame__container__item__name__text a {
    color: white;
    text-decoration: none;
  }
</style>
</head>
</body>
  <div id="frame">
    <div id="frame__container">
      <?php
      $args = array(
        'post_type' => 'fpi_menu',
        'posts_per_page' => -1,
        'orderby' => 'title'
      );
      $loop = new WP_Query( $args );
      while ( $loop->have_posts() ) : $loop->the_post();
        ?>
        <div class="frame__container__item">
          <a href="<?php echo get_field('url'); ?>">
            <div
              style="background-image: url('<?php echo get_field('image'); ?>');"
              class="frame__container__item__image"
            ></div>
          </a>
          <div class="frame__container__item__name">
            <div class="frame__container__item__name__text">
              <a href="<?php echo get_field('url') ?>"><?php echo get_field('name'); ?></a>
            </div>
          </div>
        </div>
        <?php
      endwhile;
      ?>
    </div>
  </div>
</body>
</html>
