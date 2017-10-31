<?php
  function fpi_create_post_type_data_custom() {
    $labels = array(
     'name' => __( 'Custom Choices', 'fpi' ),
     'singular_name' => __( 'Custom Choice', 'fpi' ),
     'add_new' => __( 'Add New' , 'fpi' ),
     'add_new_item' => __( 'Add New Custom Choice' , 'fpi' ),
     'edit_item' =>  __( 'Edit Custom Choice' , 'fpi' ),
     'new_item' => __( 'New Custom Choice' , 'fpi' ),
     'view_item' => __('View Custom Choice', 'fpi'),
     'search_items' => __('Search Custom Choice', 'fpi'),
     'not_found' =>  __('No Custom Choices found', 'fpi'),
     'not_found_in_trash' => __('No Custom Choices found in Trash', 'fpi'),
    );
    register_post_type( 'fpi_data_custom',
      array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-list-view',
      )
    );
  }
  function fpi_create_post_type_indicator() {
    $labels = array(
     'name' => __( 'Indicators', 'fpi' ),
     'singular_name' => __( 'Indicator', 'fpi' ),
     'add_new' => __( 'Add New' , 'fpi' ),
     'add_new_item' => __( 'Add New Indicator' , 'fpi' ),
     'edit_item' =>  __( 'Edit Indicator' , 'fpi' ),
     'new_item' => __( 'New Indicator' , 'fpi' ),
     'view_item' => __('View Indicator', 'fpi'),
     'search_items' => __('Search Indicators', 'fpi'),
     'not_found' =>  __('No Indicators found', 'fpi'),
     'not_found_in_trash' => __('No Indicators found in Trash', 'fpi'),
    );
    register_post_type( 'fpi_indicator',
      array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-list-view',
      )
    );
    if( function_exists( 'register_field_group' ) ) {
    	register_field_group(array (
    		'id' => 'acf_fpi_indicator',
    		'key' => 'acf_fpi_indicator',
    		'title' => 'FPI Indicator',
    		'fields' => array (
          array (
    				'key' => 'field_fpi_indicator_import_id',
    				'label' => 'Import Id',
    				'name' => 'import_id',
    				'type' => 'number',
    				'instructions' => 'The unique import id; used for matching.',
    				'required' => 1,
    				'default_value' => '',
    				'placeholder' => '',
    				'prepend' => '',
    				'append' => '',
    				'min' => '',
    				'max' => '',
    				'step' => '',
    			),
    			array (
    				'key' => 'field_fpi_indicator_name',
    				'label' => 'Name',
    				'name' => 'name',
    				'type' => 'text',
    				'instructions' => 'User-friendly name of the fishery.',
    				'required' => 1,
    				'default_value' => '',
    				'placeholder' => '',
    				'prepend' => '',
    				'append' => '',
    				'formatting' => 'none',
    				'maxlength' => '',
    			),
    			array (
    				'key' => 'field_fpi_indicator_species',
    				'label' => 'Species',
    				'name' => 'species',
    				'type' => 'text',
    				'instructions' => 'Related species.',
    				'required' => 1,
    				'default_value' => '',
    				'placeholder' => '',
    				'prepend' => '',
    				'append' => '',
    				'formatting' => 'none',
    				'maxlength' => '',
    			),
    			array (
    				'key' => 'field_fpi_indicator_image',
    				'label' => 'Image',
    				'name' => 'image',
    				'type' => 'image',
    				'instructions' => '300px by 200px image representing fishery.',
    				'required' => 1,
    				'save_format' => 'url',
    				'preview_size' => 'thumbnail',
    				'library' => 'all',
    			),
          array (
    				'key' => 'field_fpi_indicator_year',
    				'label' => 'Year',
    				'name' => 'year',
    				'type' => 'number',
    				'instructions' => 'Year.',
    				'required' => 1,
    				'default_value' => '',
    				'placeholder' => '',
    				'prepend' => '',
    				'append' => '',
    				'min' => '',
    				'max' => '',
    				'step' => '',
    			),
    			array (
    				'key' => 'field_fpi_indicator_latitide',
    				'label' => 'Latitude',
    				'name' => 'latitude',
    				'type' => 'number',
    				'instructions' => 'Latitude (+/- 90) representing fishery.',
    				'required' => 1,
    				'default_value' => '',
    				'placeholder' => '',
    				'prepend' => '',
    				'append' => '',
    				'min' => '-90',
    				'max' => 90,
    				'step' => '',
    			),
    			array (
    				'key' => 'field_fpi_indicator_longitude',
    				'label' => 'Longitude',
    				'name' => 'longitude',
    				'type' => 'number',
    				'instructions' => 'Longitude (+/- 180) representing fishery.',
    				'required' => 1,
    				'default_value' => '',
    				'placeholder' => '',
    				'prepend' => '',
    				'append' => '',
    				'min' => '-180',
    				'max' => 180,
    				'step' => '',
    			),
    			array (
    				'key' => 'field_fpi_indicator_ecological',
    				'label' => 'Ecological',
    				'name' => 'ecological',
    				'type' => 'number',
    				'instructions' => 'Ecological indicator (0-5) of the fishery.',
    				'required' => 1,
    				'default_value' => '',
    				'placeholder' => '',
    				'prepend' => '',
    				'append' => '',
    				'min' => 0,
    				'max' => 5,
    				'step' => '',
    			),
    			array (
    				'key' => 'field_fpi_indicator_economic',
    				'label' => 'Economic',
    				'name' => 'economic',
    				'type' => 'number',
    				'instructions' => 'Economic indicator (0-5) of the fishery.',
    				'required' => 1,
    				'default_value' => '',
    				'placeholder' => '',
    				'prepend' => '',
    				'append' => '',
    				'min' => 0,
    				'max' => 5,
    				'step' => '',
    			),
    			array (
    				'key' => 'field_fpi_indicator_community',
    				'label' => 'Community',
    				'name' => 'community',
    				'type' => 'number',
    				'instructions' => 'Community indicator (0-5) of the fishery.',
    				'required' => 1,
    				'default_value' => '',
    				'placeholder' => '',
    				'prepend' => '',
    				'append' => '',
    				'min' => 0,
    				'max' => 5,
    				'step' => '',
    			),
          array (
    				'key' => 'field_fpi_indicator_description',
    				'label' => 'Description',
    				'name' => 'description',
    				'type' => 'wysiwyg',
    				'default_value' => '',
    				'toolbar' => 'full',
    				'media_upload' => 'no',
    			),
          array (
            'key' => 'field_fpi_indicator_custom',
            'label' => 'Custom',
            'name' => 'custom',
            'type' => 'wysiwyg',
            'default_value' => '',
            'toolbar' => 'full',
            'media_upload' => 'yes',
          ),
    		),
    		'location' => array (
    			array (
    				array (
    					'param' => 'post_type',
    					'operator' => '==',
    					'value' => 'fpi_indicator',
    					'order_no' => 0,
    					'group_no' => 0,
    				),
    			),
    		),
    		'options' => array (
    			'position' => 'normal',
    			'layout' => 'no_box',
    			'hide_on_screen' => array (
    				0 => 'permalink',
    				1 => 'the_content',
    				2 => 'excerpt',
    				3 => 'discussion',
    				4 => 'comments',
    				5 => 'revisions',
    				6 => 'slug',
    				7 => 'author',
    				8 => 'format',
    				9 => 'featured_image',
    				10 => 'categories',
    				11 => 'tags',
    				12 => 'send-trackbacks',
    			),
    		),
    		'menu_order' => 0,
    	));
    }
  }
  function fpi_single_template( $single ) {
		global $post;
		if ($post->post_type == 'fpi_indicator'){
			return  get_template_directory() . '/page_indicator.php';
		}
		return $single;
	}
  function fpi_add_theme_scripts() {
    wp_deregister_script( 'jquery' );
    wp_register_style('bootstrap',
      get_template_directory_uri() .
      '/bower_components/bootstrap/dist/css/bootstrap-bootswatch.min.css',
      array(), '2016121701', 'all');
    wp_register_style('style', get_stylesheet_uri(),
      array(), '2017072802', 'all');
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
  function fpi_register_my_menus() {
    register_nav_menu('header-menu',__( 'Header Menu' ));
  }
  function fpi_add_rewrite_rules() {
    add_rewrite_rule( 'fpi-data-custom/(.*)', 'index.php?fpi_data_custom=$matches[1]', 'top' );
  }
  function fpi_query_vars( $query_vars ) {
    $query_vars[] = 'fpi_data_custom';
    $query_vars[] = 'fpi_embed';
    return $query_vars;
  }
  function fpi_parse_request( $query ) {
    if ( array_key_exists( 'fpi_data_custom', $query->query_vars ) ) {
      wp_insert_post(
        array(
          'post_type' => 'fpi_data_custom',
          'post_status' => 'publish',
          'post_title' => $query->query_vars['fpi_data_custom'],
        )
      );
      echo '{}';
      exit();
    }
  }
  add_theme_support( 'post-thumbnails' ); 
  add_action( 'init', 'fpi_create_post_type_data_custom' );
  add_action('wp_enqueue_scripts', 'fpi_add_theme_scripts');
  add_action( 'init', 'fpi_create_post_type_indicator' );
  add_action( 'init', 'fpi_register_my_menus' );
  add_action( 'single_template', 'fpi_single_template');
  add_action( 'init', 'fpi_add_rewrite_rules' );
  add_action( 'query_vars', 'fpi_query_vars' );
  add_action( 'parse_request', 'fpi_parse_request' );
