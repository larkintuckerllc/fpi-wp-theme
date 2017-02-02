<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>fpi</title>
    <?php wp_head() ?>
  </head>
  <body>
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
