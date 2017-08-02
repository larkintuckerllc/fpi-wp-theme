<?php while (have_posts()) : the_post(); ?>
  <?php get_header(); ?>
  <div class="container">
    <h3><?php the_title(); ?></h3>
    <?php the_content(); ?>
  </div>
  <?php get_footer(); ?>
<?php endwhile; ?>
