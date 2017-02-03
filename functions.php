<?php
  function create_post_type() {
    register_post_type( 'fpi_indicator',
      array(
        'labels' => array(
          'name' => __( 'Indicators' ),
          'singular_name' => __( 'Indicator' )
        ),
        'public' => true,
        'has_archive' => false,
      )
    );
  }
  function add_theme_scripts() {
    wp_deregister_script( 'jquery' );
    wp_register_style('bootstrap',
      get_template_directory_uri() .
      '/bower_components/bootstrap/dist/css/bootstrap-bootswatch.min.css',
      array(), '2016121701', 'all');
    wp_register_style('style', get_stylesheet_uri(),
      array(), '2016123001', 'all');
    wp_register_script('jquery',
      get_template_directory_uri() .
      '/bower_components/jquery/dist/jquery.min.js',
      array(), '2016110701', true);
    wp_register_script('bootstrap',
      get_template_directory_uri() .
      '/bower_components/bootstrap/dist/js/bootstrap.min.js',
      array('jquery'), '2016110701', true);
    wp_enqueue_style('bootstrap');
    wp_enqueue_style('style');
    wp_enqueue_script('jquery');
    wp_enqueue_script('bootstrap');
  }
  function register_my_menus() {
    register_nav_menu('header-menu',__( 'Header Menu' ));
    register_nav_menu('tool-menu',__( 'Tool Menu' ));
  }
  add_action('wp_enqueue_scripts', 'add_theme_scripts');
  add_action( 'init', 'create_post_type' );
  add_action( 'init', 'register_my_menus' );
// REMOVED CLOSING TAG PER WP CODING STANDARDS
