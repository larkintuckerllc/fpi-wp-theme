<?php
  $fpi_embed = get_query_var('fpi_embed', false);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title><?php wp_title(); ?></title>
    <?php wp_head() ?>
  </head>
  <body
    <?php if ($fpi_embed) : ?>
      class="body--embed"
    <?php endif; ?>
  >
    <?php if (!$fpi_embed) : ?>
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
    <?php endif; ?>
