<?php get_header(); ?>
<div class="container">
  <h3>News</h3>
  <?php while (have_posts()) : the_post(); ?>
      <div class="archive__root__news__item">
        <?php if ( has_post_thumbnail() ): ?>
        <img
          src="<?php the_post_thumbnail_url('thumbnail'); ?>"
          class="archive__root__news__item__image"
        />
        <?php endif ?>
        <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
        <p><i><?php the_time('F j, Y'); ?></i></p>
        <?php the_excerpt(); ?>
      </div>
  <?php endwhile; ?>
</div>
<?php get_footer(); ?>
