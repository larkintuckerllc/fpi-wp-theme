<?php while (have_posts()) : the_post(); ?>
  <?php get_header(); ?>
  <div class="container">
    <?php if ( has_post_thumbnail() ): ?>
    <div
      class="single__root__image"
      style="background-image: url('<?php the_post_thumbnail_url('large'); ?>');"
    >
    </div>
    <?php endif ?>
    <h3><?php the_title(); ?></h3>
    <p><i><?php the_time('F j, Y'); ?></i></p>
    <?php the_content(); ?>
  </div>
  <?php get_footer(); ?>
<?php endwhile; ?>
