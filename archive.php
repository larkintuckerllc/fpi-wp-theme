<?php get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
  <div class="container">
    <p><b><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></b><br />
    <i><?php the_time('F j, Y'); ?></i><br /></p>
    <?php the_content('', false); ?>
  </div>
  <?php get_footer(); ?>
<?php endwhile; ?>
