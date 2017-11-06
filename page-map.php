<?php
  function fpi_map_add_scripts() {
    wp_register_script('fpi_map_vendor',
      get_template_directory_uri() .
      '/map/dist/vendor.bundle.js',
      array(), '2017020101', true);
    wp_register_script('fpi_map_main',
      get_template_directory_uri() .
      '/map/dist/main.bundle.js',
      array('fpi_map_vendor'), '2017020101', true);
    wp_enqueue_script('fpi_map_vendor');
    wp_enqueue_script('fpi_map_main');
  }
  add_action('wp_enqueue_scripts', 'fpi_map_add_scripts');
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
<?php while (have_posts()) : the_post(); ?>
<?php get_header(); ?>
<div class="container">
  <h3><?php the_title(); ?></h3>
</div>
<div id="root"></div>
<script>
  window.indicators = <?php echo json_encode( $indicators ); ?>;
  window.baseUrl = '<?php echo get_template_directory_uri(); ?>/map/dist/';
</script>
<?php get_footer(); ?>
<?php endwhile; ?>
