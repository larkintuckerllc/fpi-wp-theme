<?php get_header(); ?>
<div
  class="jumbotron"
  style="background-image: url(<?php echo get_template_directory_uri() . '/img/hero.jpg'; ?>);"
>
  <div id="home_body__hero" class="container">
    <div id="home_body__hero__image" class="visible-md-block visible-lg-block">
      <img src="<?php echo get_template_directory_uri() . '/img/james_anderson.jpg'; ?>" />
    </div>
    <div>
      <h1>Jim Anderson</h1>
      <p>Professor and Director, Institute for Sustainable Food Systems</p>
    </div>
  </div>
</div>
<div class="container">
  <div id="home_body__news" class="row">
    <?php $temp_query = $wp_query; ?>
    <?php query_posts( 'category_name=News&posts_per_page=4' ); ?>
    <?php while ( have_posts() ) : the_post(); ?>
      <div class="home_body__news__item col-sm-3">
        <div
          <?php if ( has_post_thumbnail() ): ?>
          style="background-image: url('<?php the_post_thumbnail_url('medium-large'); ?>');"
          <?php endif ?>
          class="home_body__news__item__image"
        ></div>
        <?php the_excerpt(); ?>
      </div>
    <?php endwhile; ?>
    <?php $wp_query = $temp_query; ?>
  </div>
</div>
<?php get_footer(); ?>
