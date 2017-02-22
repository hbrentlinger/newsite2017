jQuery(document).ready(function($) {
  "use strict";
  
  $(".toggle-canvas").click(function() {
    $(".offset-canvas").toggleClass("show-canvas");
  });
  $(".offset-canvas ul li a").click(function() {
    $(".offset-canvas").removeClass("show-canvas");
  });
});

/*
  First "click/function" is to show or hide responsive menu when clicking on the button.
  Second "click/function" is to hide the menu when a user clicks on a href in responsive menu. Usefull if you're using one page template.
*/






