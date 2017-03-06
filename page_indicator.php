<?php get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
  <div id="my_page" class="container">
      <div>Name: <?php the_field('name') ?></div>
      <div><img src="<?php the_field('image') ?>" /></div>
      <div>Latitide: <?php the_field('latitude') ?></div>
      <div>Longitude: <?php the_field('longitude') ?></div>
      <div>Ecological: <?php the_field('ecological') ?></div>
      <div>Economic: <?php the_field('economic') ?></div>
      <div>Community: <?php the_field('community') ?></div>
  </div>
  <?php get_footer(); ?>
<?php endwhile; ?>
