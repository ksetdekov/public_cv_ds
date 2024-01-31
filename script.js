$(document).ready(function() {
    // Add a smooth scroll to the links in the navigation menu
    $('a[href^="#"]').on('click', function() {
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 500);
      return false;
    });
  });
  