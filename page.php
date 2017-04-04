<?php get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
  <div id="my_page" class="container">
    <h4><?php the_title(); ?></h4>
    <?php the_content(); ?>
  </div>
  <?php get_footer(); ?>
<?php endwhile; ?>
