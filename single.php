<?php get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
  <div class="container">
    <p><b><?php the_title(); ?></b><br />
    <i><?php the_time('F j, Y'); ?></i><br /></p>
    <?php the_content(); ?>
    <?php
    if (comments_open() || get_comments_number()) :
      comments_template();
    endif;
    ?>
  </div>
  <?php get_footer(); ?>
<?php endwhile; ?>
