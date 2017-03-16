<?php
  function fpi_data_explorer_add_scripts() {
    wp_register_script('fpi_data_explorer_vendor',
      get_template_directory_uri() .
      '/data-explorer/dist/vendor.bundle.js',
      array(), '2017020101', true);
    wp_register_script('fpi_data_explorer_main',
      get_template_directory_uri() .
      '/data-explorer/dist/main.bundle.js',
      array('fpi_data_explorer_vendor'), '2017020101', true);
    wp_enqueue_script('fpi_data_explorer_vendor');
    wp_enqueue_script('fpi_data_explorer_main');
  }
  add_action('wp_enqueue_scripts', 'fpi_data_explorer_add_scripts');
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
      'species' => get_field('species'),
      'image' => get_field('image'),
      'country' => get_field('country'),
      'continent' => get_field('continent'),
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
  <div>&nbsp;</div>
  <div class="container">
    <div id="root"></div>
  </div>
  <script>
    window.indicators = <?php echo json_encode( $indicators ); ?>;
    window.baseUrl = '<?php echo get_template_directory_uri(); ?>/global-scores/dist/';
  </script>
  <?php get_footer(); ?>
<?php endwhile; ?>
