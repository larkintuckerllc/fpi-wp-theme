<?php
  function fpi_data_add_scripts() {
    wp_register_script('fpi_data_vendor',
      get_template_directory_uri() .
      '/data/dist/vendor.bundle.js',
      array(), '2017020101', true);
    wp_register_script('fpi_data_main',
      get_template_directory_uri() .
      '/data/dist/main.bundle.js',
      array('fpi_data_vendor'), '2017080201', true);
    wp_enqueue_script('fpi_data_vendor');
    wp_enqueue_script('fpi_data_main');
  }
  add_action('wp_enqueue_scripts', 'fpi_data_add_scripts');
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
<?php while (have_posts()) : the_post(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title><?php wp_title(); ?></title>
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
  <div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="<?php echo home_url(); ?>">
         <img alt="Brand" width="80" height="40" src="<?php echo get_template_directory_uri() . '/img/brand_jim_anderson.png'; ?>">
        </a>
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="navbar-collapse collapse" id="navbar-main">
        <?php wp_nav_menu(array('theme_location' => 'header-menu', 'menu_class' => 'nav navbar-nav navbar-right')); ?>
      </div>
    </div>
  </div>
  <div id="frame">
    <div class="frame-header container">
      <h3><?php the_title(); ?></h3>
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
<?php endwhile; ?>
