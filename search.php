<?php get_header(); ?>
<?php if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <div class="container">
      <?php get_search_form(); ?>
      <p><b><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></b></p>
    </div>
    <?php get_footer(); ?>
  <?php endwhile; ?>
<?php else : ?>
  <div class="container">
    <p>No matches.</p>
  </div>
  <?php get_footer(); ?>
<?php endif; ?>
