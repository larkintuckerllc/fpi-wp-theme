<?php
  function fpi_metrics_add_scripts() {
    wp_register_style('fpi_metrics_style',
      get_template_directory_uri() .
      '/metrics/dist/styles.css',
      array(), '2017073001', 'all');
    wp_register_script('fpi_metrics_manifest',
      get_template_directory_uri() .
      '/metrics/dist/manifest.bundle.js',
      array(), '2017020101', true);
    wp_register_script('fpi_metrics_vendor',
      get_template_directory_uri() .
      '/metrics/dist/vendor.bundle.js',
      array('fpi_metrics_manifest'), '2017020101', true);
    wp_register_script('fpi_metrics_main',
      get_template_directory_uri() .
      '/metrics/dist/main.bundle.js',
      array('fpi_metrics_vendor'), '2017020101', true);
    wp_enqueue_style('fpi_metrics_style');
    wp_enqueue_script('fpi_metrics_manifest');
    wp_enqueue_script('fpi_metrics_vendor');
    wp_enqueue_script('fpi_metrics_main');
  }
  add_action('wp_enqueue_scripts', 'fpi_metrics_add_scripts');
?>
<?php get_header(); ?>
<div class="container">
  <h3>Methodology</h3>
  <div id="root"></div>
</div>
<?php get_footer(); ?>
