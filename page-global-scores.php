<?php
  function add_global_scores_theme_scripts() {
    wp_register_script('global_scores_vendor',
      get_template_directory_uri() .
      '/global-scores/dist/vendor.bundle.js',
      array(), '2017020101', true);
    wp_register_script('global_scores_main',
      get_template_directory_uri() .
      '/global-scores/dist/main.bundle.js',
      array('global_scores_vendor'), '2017020101', true);
    wp_enqueue_script('global_scores_vendor');
    wp_enqueue_script('global_scores_main');
  }
  add_action('wp_enqueue_scripts', 'add_global_scores_theme_scripts');
?>
<?php
  $indicators = array();
  $args = array(
    'post_type' => 'fpi_indicator',
    'posts_per_page' => -1,
  );
  $loop = new WP_Query( $args );
  while ( $loop->have_posts() ) : $loop->the_post();
    $indicators[] = array(
      'id' => get_the_ID(),
      'link' => get_permalink(),
      'name' => get_field('name'),
      'image' => get_field('image'),
      'latitude' => get_field('latitude'),
      'longitude' => get_field('longitude'),
      'ecological' => get_field('ecological'),
      'economic' => get_field('economic'),
      'community' => get_field('community')
    );
  endwhile;
  wp_reset_query();
?>
<?php get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
  <div class="container">
    <?php the_content(); ?>
  </div>
  <div id="root"></div>
  <div class="container">
    After
  </div>
  <script>
    window.indicators = <?php echo json_encode( $indicators ); ?>;
    window.baseUrl = '<?php echo get_template_directory_uri(); ?>/global-scores/dist/';
  </script>
  <?php get_footer(); ?>
<?php endwhile; ?>
