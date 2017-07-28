<?php get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
  <div id="my_page" class="container">
    <h3><?php the_title(); ?></h3>
    <p><i><?php the_time('F j, Y'); ?></i></p>
    <?php the_content(); ?>
  </div>
  <?php get_footer(); ?>
<?php endwhile; ?>
