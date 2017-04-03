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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>fpi</title>
  <?php wp_head() ?>
  <style>
    html, body {
      height: 100%;
    }
    #frame {
      height: 100%;
    }
    @media (min-width: 768px) {
      #frame {
        display: flex;
        flex-direction: column;
      }
      #frame__menu, #frame__footer {
        flex: 0 0 auto;
      }
      #root {
        flex: 1 1 auto;
      }
    }
  </style>
</head>
<body>
  <div id="frame">
    <div id="frame__header">
      <div class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <a href="../" class="navbar-brand">FPI</a>
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="navbar-collapse collapse" id="navbar-main">
            <?php wp_nav_menu(array('theme_location' => 'header-menu', 'menu_class' => 'nav navbar-nav')); ?>
            <?php wp_nav_menu(array('theme_location' => 'tool-menu', 'menu_class' => 'nav navbar-nav navbar-right')); ?>
          </div>
        </div>
      </div>
    </div>
    <div id="root" class="container">
    </div>
    <div id="frame__footer">
      <div id="my_footer" class="container">
        <hr>
        <footer>
          <p>&copy; 2017 fpi</p>
        </footer>
      </div>
    </div>
  </div>
  <script>
    window.indicators = <?php echo json_encode( $indicators ); ?>;
    window.baseUrl = '<?php echo get_template_directory_uri(); ?>/global-scores/dist/';
  </script>
  <?php wp_footer() ?>
</body>
</html>
