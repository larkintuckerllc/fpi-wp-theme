<?php get_header(); ?>
<div id="my_page" class="container">
  <h3>News</h3>
  <?php while (have_posts()) : the_post(); ?>
      <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
      <p><i><?php the_time('F j, Y'); ?></i></p>
    <?php the_excerpt(); ?>
  <?php endwhile; ?>
</div>
<?php get_footer(); ?>
