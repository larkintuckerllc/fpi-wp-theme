<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>fpi</title>
    <?php wp_head() ?>
  </head>
  <body>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="<?php echo home_url(); ?>">
            <img width="83" height="28" alt="Brand"
              src="<?php echo get_template_directory_uri() . '/img/brand.png'; ?>">
          </a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <?php wp_nav_menu(array('theme_location' => 'header-menu', 'menu_class' => 'nav navbar-nav')); ?>
          <div class="navbar-form navbar-right">
            <?php wp_nav_menu(array('theme_location' => 'tool-menu', 'menu_class' => 'nav navbar-nav')); ?>
          </div>
        </div>
    </nav>
