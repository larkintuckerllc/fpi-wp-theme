<?php
  function fpi_create_post_type_menus() {
    $labels = array(
     'name' => __( 'Menu Choices', 'fpi' ),
     'singular_name' => __( 'Menu Choice', 'fpi' ),
     'add_new' => __( 'Add New' , 'fpi' ),
     'add_new_item' => __( 'Add New Menu Choice' , 'fpi' ),
     'edit_item' =>  __( 'Edit Menu Choice' , 'fpi' ),
     'new_item' => __( 'New Menu Choice' , 'fpi' ),
     'view_item' => __('View Menu Choice', 'fpi'),
     'search_items' => __('Search Menu Choice', 'fpi'),
     'not_found' =>  __('No Menu Choices found', 'fpi'),
     'not_found_in_trash' => __('No Menu Choices found in Trash', 'fpi'),
    );
    register_post_type( 'fpi_menu',
      array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-list-view',
      )
    );
    if ( function_exists( 'register_field_group' ) ) {
    	register_field_group(array (
    		'id' => 'acf_test',
    		'title' => 'Test',
    		'fields' => array (
    			array (
    				'key' => 'field_fpi_menu_name',
    				'label' => 'Name',
    				'name' => 'name',
    				'type' => 'text',
    				'required' => 1,
    				'default_value' => '',
    				'placeholder' => '',
    				'prepend' => '',
    				'append' => '',
    				'formatting' => 'html',
    				'maxlength' => '',
    			),
    			array (
    				'key' => 'field_fpi_menu_url',
    				'label' => 'URL',
    				'name' => 'url',
    				'type' => 'text',
    				'required' => 1,
    				'default_value' => '',
    				'placeholder' => '',
    				'prepend' => '',
    				'append' => '',
    				'formatting' => 'html',
    				'maxlength' => '',
    			),
    			array (
    				'key' => 'field_fpi_menu_image',
    				'label' => 'Image',
    				'name' => 'image',
    				'type' => 'image',
    				'required' => 1,
    				'save_format' => 'url',
    				'preview_size' => 'thumbnail',
    				'library' => 'all',
    			),
    		),
    		'location' => array (
    			array (
    				array (
    					'param' => 'post_type',
    					'operator' => '==',
    					'value' => 'fpi_menu',
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
      array(), '2017110101', 'all');
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
  function fpi_pre_get_posts( $query ) {
    if ( $query->is_archive() && $query->is_main_query() && !is_admin() ) {
      $query->set( 'posts_per_page', 1000 );
    }
  }
  add_theme_support( 'post-thumbnails' );
  add_action( 'init', 'fpi_create_post_type_data_custom' );
  add_action( 'init', 'fpi_create_post_type_menus' );
  add_action('wp_enqueue_scripts', 'fpi_add_theme_scripts');
  add_action( 'init', 'fpi_create_post_type_indicator' );
  add_action( 'init', 'fpi_register_my_menus' );
  add_action( 'single_template', 'fpi_single_template');
  add_action( 'init', 'fpi_add_rewrite_rules' );
  add_action( 'query_vars', 'fpi_query_vars' );
  add_action( 'parse_request', 'fpi_parse_request' );
  add_action( 'pre_get_posts', 'fpi_pre_get_posts' );


if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_5f46a4ab6a199',
	'title' => 'Home',
	'fields' => array(
		array(
			'key' => 'field_5f46a712e6716',
			'label' => 'Hero Background',
			'name' => 'hero_background',
			'type' => 'image',
			'instructions' => 'width 1500px, height 250px',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'return_format' => 'url',
			'preview_size' => 'medium',
			'library' => 'all',
			'min_width' => 1500,
			'min_height' => 250,
			'min_size' => '',
			'max_width' => 1500,
			'max_height' => 250,
			'max_size' => '',
			'mime_types' => '',
		),
		array(
			'key' => 'field_5f46aee961594',
			'label' => 'Hero Image',
			'name' => 'hero_image',
			'type' => 'image',
			'instructions' => 'width 150px, height 200px',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'return_format' => 'url',
			'preview_size' => 'medium',
			'library' => 'all',
			'min_width' => 150,
			'min_height' => 200,
			'min_size' => '',
			'max_width' => 150,
			'max_height' => 200,
			'max_size' => '',
			'mime_types' => '',
		),
		array(
			'key' => 'field_5f46b1231e155',
			'label' => 'Hero Title',
			'name' => 'hero_title',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5f46b23faa6e5',
			'label' => 'Hero Subtitle',
			'name' => 'hero_subtitle',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5f46b7394a217',
			'label' => 'Highlight 1 Image',
			'name' => 'highlight_1_image',
			'type' => 'image',
			'instructions' => 'image will automatically scale to fit',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'return_format' => 'url',
			'preview_size' => 'medium',
			'library' => 'all',
			'min_width' => '',
			'min_height' => '',
			'min_size' => '',
			'max_width' => '',
			'max_height' => '',
			'max_size' => '',
			'mime_types' => '',
		),
		array(
			'key' => 'field_5f46bb75b0185',
			'label' => 'Highlight 1 URL',
			'name' => 'highlight_1_url',
			'type' => 'url',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
		),
		array(
			'key' => 'field_5f46bc413ec5b',
			'label' => 'Highlight 1 Title',
			'name' => 'highlight_1_title',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5f46bc55a4781',
			'label' => 'Highlight 1 Subtitle',
			'name' => 'highlight_1_subtitle',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
				array(
			'key' => 'field_home_highlight_2_image',
			'label' => 'Highlight 2 Image',
			'name' => 'highlight_2_image',
			'type' => 'image',
			'instructions' => 'image will automatically scale to fit',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'return_format' => 'url',
			'preview_size' => 'medium',
			'library' => 'all',
			'min_width' => '',
			'min_height' => '',
			'min_size' => '',
			'max_width' => '',
			'max_height' => '',
			'max_size' => '',
			'mime_types' => '',
		),
		array(
			'key' => 'field_home_highlight_2_url',
			'label' => 'Highlight 2 URL',
			'name' => 'highlight_2_url',
			'type' => 'url',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
		),
		array(
			'key' => 'field_home_highlight_2_title',
			'label' => 'Highlight 2 Title',
			'name' => 'highlight_2_title',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_home_highlight_2_subtitle',
			'label' => 'Highlight 2 Subtitle',
			'name' => 'highlight_2_subtitle',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'page_type',
				'operator' => '==',
				'value' => 'front_page',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'seamless',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => array(
		0 => 'permalink',
		1 => 'the_content',
		2 => 'excerpt',
		3 => 'discussion',
		4 => 'comments',
		5 => 'revisions',
		6 => 'slug',
		7 => 'author',
		8 => 'format',
		9 => 'page_attributes',
		10 => 'featured_image',
		11 => 'categories',
		12 => 'tags',
		13 => 'send-trackbacks',
	),
	'active' => true,
	'description' => '',
));

endif;
