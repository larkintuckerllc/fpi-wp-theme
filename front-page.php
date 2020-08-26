<?php get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
<div
  class="jumbotron"
  <?php if( get_field('hero_background') ): ?>
    style="background-image: url(<?php the_field('hero_background'); ?>);"
  <?php endif; ?>
>
  <div id="home_body__hero" class="container">
    <?php if( get_field('hero_image') ): ?>
      <div id="home_body__hero__image" class="visible-md-block visible-lg-block">
        <img src="<?php the_field('hero_image'); ?>" />
      </div>
    <?php endif; ?>
    <div>
      <?php if( get_field('hero_title') ): ?>
        <h1><?php the_field('hero_title'); ?></h1>
      <?php endif; ?>
      <?php if( get_field('hero_subtitle') ): ?>
        <p><?php the_field('hero_subtitle'); ?></p>
      <?php endif; ?>
    </div>
  </div>
</div>
<?php endwhile; ?>
<div class="container">
  <div id="home_body__news" class="row">
    <?php $temp_query = $wp_query; ?>
    <?php query_posts( 'category_name=News&posts_per_page=4' ); ?>
    <?php while ( have_posts() ) : the_post(); ?>
      <div class="home_body__news__item col-sm-3">
        <div
          <?php if ( has_post_thumbnail() ): ?>
          style="background-image: url('<?php the_post_thumbnail_url('large'); ?>');"
          <?php endif ?>
          class="home_body__news__item__image"
          onclick="window.location.assign('<?php the_permalink(); ?>')"
        ></div>
        <?php the_excerpt(); ?>
      </div>
    <?php endwhile; ?>
    <?php $wp_query = $temp_query; ?>
  </div>
</div>
<?php get_footer(); ?>
