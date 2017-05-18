<?php
  function fpi_world_add_scripts() {
    wp_register_style('fpi_world_style',
      get_template_directory_uri() .
      '/world/dist/styles.css',
      array(), '2017051701', 'all');
    wp_register_script('fpi_world_main',
      get_template_directory_uri() .
      '/world/dist/main.bundle.js',
      array(), '2017051701', true);
    wp_enqueue_style('fpi_world_style');
    wp_enqueue_script('fpi_world_main');
  }
  add_action('wp_enqueue_scripts', 'fpi_world_add_scripts');
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
<div id="root"></div>
<script>
  window.indicators = <?php echo json_encode( $indicators ); ?>;
  window.baseUrl = '<?php echo get_template_directory_uri(); ?>/world/dist/';
  window.fpiEmbed = true;
</script>
<?php get_footer(); ?>
