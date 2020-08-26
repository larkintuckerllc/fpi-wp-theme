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
  <div class="container">
    <div id="home_body__news" class="row">
      <div class="home_body__news__item col-sm-3">
        <?php if( get_field('highlight_1_image') ): ?>
          <div
            style="background-image: url('<?php the_field('highlight_1_image'); ?>');"
            class="home_body__news__item__image"
            <?php if( get_field('highlight_1_url') ): ?>
              onclick="window.location.assign('<?php the_field('highlight_1_url'); ?>')"
            <?php endif; ?>
          >
          </div>
          <?php if( get_field('highlight_1_title') ): ?>
            <div><b><?php the_field('highlight_1_title'); ?></b></div>
          <?php endif; ?>
          <?php if( get_field('highlight_1_subtitle') ): ?>
            <div><?php the_field('highlight_1_subtitle'); ?></div>
          <?php endif; ?>
        <?php endif; ?>
      </div>
    </div>
  </div>
<?php endwhile; ?>
<?php get_footer(); ?>
