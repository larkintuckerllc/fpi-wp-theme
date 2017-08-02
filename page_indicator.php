<?php
  function fpi_indicator_add_scripts() {
    wp_register_script('d3',
      get_template_directory_uri() .
      '/node_modules/d3/build/d3.min.js',
      array(), '2017020101', true);
    wp_register_script('d3_geo',
      get_template_directory_uri() .
      '/node_modules/d3-geo/build/d3-geo.min.js',
      array('d3'), '2017020101', true);
    wp_register_style('fpi_indicator',
      get_template_directory_uri() .
      '/indicator/index.css',
      array('bootstrap', 'style'), '2016121701', 'all');
    wp_register_script('fpi_indicator',
      get_template_directory_uri() .
      '/indicator/index.js',
      array('jquery', 'd3', 'd3_geo'), '2017020101', true);
    wp_enqueue_style('fpi_indicator');
    wp_enqueue_script('d3');
    wp_enqueue_script('d3_geo');
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
<?php while (have_posts()) : the_post(); ?>
<?php get_header(); ?>
  <div id="fpi_indicator_root" class="container">
    <h3><a id="fpi_indicator_root__back">Back</a> &gt; <?php the_field('name') ?></h3>
    <div id="fpi_indicator_root__hero">
      <div id="fpi_indicator_root__hero__workaround">
        <svg
          id="fpi_indicator_root__hero__map"
          viewBox='-50 -50 100 100'
        ></svg>
      </div>
      <div
        id="fpi_indicator_root__hero__image"
        style="background-image: url(<?php the_field('image') ?>);"
      >
      </div>
    </div>
    <div id="fpi_indicator_root__content">
      <div id="fpi_indicator_root__content__data">
        <div class="fpi_indicator_root__content__data__indicator">
          <div class="fpi_indicator_root__content__data__indicator__title">Ecological</div>
          <div class="fpi_indicator_root__content__data__indicator__value">
            <div
              id="fpi_indicator_root__content__data__indicator__value__scale--ecological"
              class="fpi_indicator_root__content__data__indicator__value__scale"
              style="width: 0%;"
            >
            </div>
          </div>
        </div>
        <div
          class="fpi_indicator_root__content__data__ranking"
        >
          Ranked
          <span
            id="fpi_indicator_root__content__data__ranking__rank--ecological"
          ></span>
          out of
          <span
            id="fpi_indicator_root__content__data__ranking__total--ecological"
          ></span>
          fisheries.
        </div>
        <div
          id="fpi_indicator_root__content__data__comparison--ecological"
          class="fpi_indicator_root__content__data__comparison"
        >
        </div>
        <div class="fpi_indicator_root__content__data__indicator">
          <div class="fpi_indicator_root__content__data__indicator__title">Economic</div>
          <div class="fpi_indicator_root__content__data__indicator__value">
            <div
              id="fpi_indicator_root__content__data__indicator__value__scale--economic"
              class="fpi_indicator_root__content__data__indicator__value__scale"
              style="width: 0%;"
            >
            </div>
          </div>
        </div>
        <div
          class="fpi_indicator_root__content__data__ranking"
        >
          Ranked
          <span
            id="fpi_indicator_root__content__data__ranking__rank--economic"
          ></span>
          out of
          <span
            id="fpi_indicator_root__content__data__ranking__total--economic"
          ></span>
          fisheries.
        </div>
        <div
          id="fpi_indicator_root__content__data__comparison--economic"
          class="fpi_indicator_root__content__data__comparison"
        >
        </div>
        <div class="fpi_indicator_root__content__data__indicator">
          <div class="fpi_indicator_root__content__data__indicator__title">Community</div>
          <div class="fpi_indicator_root__content__data__indicator__value">
            <div
              id="fpi_indicator_root__content__data__indicator__value__scale--community"
              class="fpi_indicator_root__content__data__indicator__value__scale"
              style="width: 0%;"
            >
            </div>
          </div>
        </div>
        <div
          class="fpi_indicator_root__content__data__ranking"
        >
          Ranked
          <span
            id="fpi_indicator_root__content__data__ranking__rank--community"
          ></span>
          out of
          <span
            id="fpi_indicator_root__content__data__ranking__total--community"
          ></span>
          fisheries.
        </div>
        <div
          id="fpi_indicator_root__content__data__comparison--community"
          class="fpi_indicator_root__content__data__comparison"
        >
        </div>
      </div>
      <div
        id="fpi_indicator_root__content__overview"
      >
        <p><b>Species:</b> <?php the_field('species') ?></p>
        <div
          id="fpi_indicator_root__content__overview__description"
        >
          <?php the_field('description') ?>
        </div>
      </div>
    </div>
  </div>
  <script>
    window.baseUrl = '<?php echo get_template_directory_uri(); ?>/indicator/';
    window.fpiId = <?php the_ID(); ?>;
    window.fpiLatitude = <?php the_field('latitude'); ?>;
    window.fpiLongitude = <?php the_field('longitude'); ?>;
    window.fpiEcological = <?php the_field('ecological'); ?>;
    window.fpiEconomic = <?php the_field('economic'); ?>;
    window.fpiCommunity = <?php the_field('community'); ?>;
    window.fpiIndicators = <?php echo json_encode( $indicators ); ?>;
  </script>
  <?php get_footer(); ?>
<?php endwhile; ?>
