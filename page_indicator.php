<?php
  function fpi_indicator_add_scripts() {
    wp_register_script('d3',
      get_template_directory_uri() .
      '/bower_components/d3/d3.min.js',
      array(), '2017020101', true);
    wp_register_style('fpi_indicator',
      get_template_directory_uri() .
      '/indicator/index.css',
      array('bootstrap', 'style'), '2016121701', 'all');
    wp_register_script('fpi_indicator',
      get_template_directory_uri() .
      '/indicator/index.js',
      array('jquery', 'd3'), '2017020101', true);
    wp_enqueue_style('fpi_indicator');
    wp_enqueue_script('d3');
    wp_enqueue_script('fpi_indicator');
  }
  add_action('wp_enqueue_scripts', 'fpi_indicator_add_scripts');
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
  <div id="fpi_indicator_root" class="container">
    <div><a href="/global-scores/">
      <button type="button" class="btn btn-default btn-sm">Back</button>
    </a></div>
    <h3><?php the_field('name') ?></h3>
    <div id="fpi_indicator_root__image">
      <div
        id="fpi_indicator_root__image__image"
        style="background-image: url(<?php the_field('image') ?>);"
      >
      </div>
    </div>
    <div class="fpi_indicator_root__indicator">
      <div class="fpi_indicator_root__indicator__title">Ecological</div>
      <div class="fpi_indicator_root__indicator__value">
        <div
          id="fpi_indicator_root__indicator__value__scale--ecological"
          class="fpi_indicator_root__indicator__value__scale"
          style="width: 0%;"
        >
        </div>
      </div>
    </div>
    <div class="fpi_indicator_root__indicator">
      <div class="fpi_indicator_root__indicator__title">Economic</div>
      <div class="fpi_indicator_root__indicator__value">
        <div
          id="fpi_indicator_root__indicator__value__scale--economic"
          class="fpi_indicator_root__indicator__value__scale"
          style="width: 0%;"
        >
        </div>
      </div>
    </div>
    <div class="fpi_indicator_root__indicator">
      <div class="fpi_indicator_root__indicator__title">Community</div>
      <div class="fpi_indicator_root__indicator__value">
        <div
          id="fpi_indicator_root__indicator__value__scale--community"
          class="fpi_indicator_root__indicator__value__scale"
          style="width: 0%;"
        >
        </div>
      </div>
    </div>
        <div
      id="fpi_indicator_root__comparison--ecological"
      class="fpi_indicator_root__comparison"
    >
    </div>
  </div>
  <script>
    window.fpiId = <?php the_ID(); ?>;
    window.fpiEcological = <?php the_field('ecological'); ?>;
    window.fpiEconomic = <?php the_field('economic'); ?>;
    window.fpiCommunity = <?php the_field('community'); ?>;
    window.fpiIndicators = <?php echo json_encode( $indicators ); ?>;
  </script>
  <?php get_footer(); ?>
<?php endwhile; ?>
