<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      body {
        font-family: sans-serif;
      }
      #frame {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
      }
      #frame__iframe {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: black;
      }
      #frame__cover {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 100px;
        background-color: black;
      }
      #frame__cover__menu {
        position: absolute;
        transform: translateY(-50%);
        left: 30px;
        top: 50%;
        font-size: 2em;
        color: white;
      }
      #frame__cover__close {
        position: absolute;
        transform: translateY(-50%);
        right: 30px;
        top: 50%;
        font-size: 2em;
        color: white;
      }
      #frame__here {
        position: absolute;
        display: none;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        border-radius: 10px;
        padding: 30px;
        background-color: white;
        font-size: 3em;
      }
    </style>
    <title>Cover</title>
  </head>
  <body>
    <div id="frame">
      <iframe
        id="frame__iframe"
        frameborder="0"
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts"
      >
      </iframe>
      <div id="frame__cover">
        <div id="frame__cover__menu">
          Menu
        </div>
        <div id="frame__cover__close">
          Close
        </div>
      </div>
      <div id="frame__here">
        I am here.
      </div>
    </div>
    <script>
      document.addEventListener('DOMContentLoaded', function(){
        var INACTIVE_TIMEOUT = 30 * 60 * 1000;
        var HERE_TIMEOUT = 30 * 1000;
        var MENU_URL = 'https://www.fpilab.org/menu';
        var CLOSE_URL = 'http://192.168.1.2/isfs-saver/';
        var menuEl = document.getElementById('frame__cover__menu');
        var closeEl = document.getElementById('frame__cover__close');
        var iFrameEl = document.getElementById('frame__iframe');
        var hereEl = document.getElementById('frame__here');
        var timeout = window.setTimeout(showHere, INACTIVE_TIMEOUT);
        iFrameEl.src = MENU_URL;
        menuEl.addEventListener('click', handleMenuClick);
        closeEl.addEventListener('click', handleCloseClick);
        hereEl.addEventListener('click', handleHereClick);
        function handleMenuClick() {
          iFrameEl.src = MENU_URL;
          hereEl.style.display = 'none';
        }
        function handleCloseClick() {
          window.open(CLOSE_URL, '_self');
        }
        function handleHereClick() {
          window.clearTimeout(timeout);
          hereEl.style.display = 'none';
          timeout = window.setTimeout(showHere, INACTIVE_TIMEOUT);
        }
        function showHere() {
          hereEl.style.display = 'block';
          timeout = window.setTimeout(handleCloseClick, HERE_TIMEOUT);
        }
      });
    </script>
  </body>
</html>
