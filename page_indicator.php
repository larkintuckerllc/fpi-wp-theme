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
<?php
  get_header();
?>
<?php while (have_posts()) : the_post(); ?>
  <div id="fpi_indicator_root" class="container">
    <h4><a id="fpi_indicator_root__back">Back</a> &gt; <?php the_field('name') ?></h4>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum iaculis nibh tempus condimentum. Sed libero tellus, euismod vitae orci at, faucibus malesuada erat. Nunc scelerisque cursus molestie. Mauris massa nibh, volutpat ac volutpat at, rutrum ac lectus. Nam nec pretium libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue sapien, mattis a mauris sit amet, dictum faucibus justo. Donec quam est, vulputate sed rutrum eget, dictum at lacus. Duis porta mollis pulvinar. Quisque placerat ante ac metus varius imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget mauris nisl. In placerat commodo libero ac varius. Curabitur blandit consectetur lacus ac imperdiet. Phasellus semper fermentum erat ut venenatis. Donec ultrices tincidunt enim pretium fermentum.</p>
        <p>In bibendum id tortor vitae sagittis. Suspendisse vulputate dui eget fermentum efficitur. Mauris dictum tincidunt mollis. In non mollis nisl. Mauris leo tortor, vulputate sed elit non, elementum hendrerit velit. Nulla lacinia mattis est, consectetur commodo felis eleifend id. Nulla tortor neque, ultrices et pellentesque non, facilisis at tortor. Nullam eu eros vitae mi auctor auctor nec id lorem. Donec a mattis ante, vehicula suscipit arcu. Aenean cursus neque nibh, eget vestibulum sem congue in.</p>
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
