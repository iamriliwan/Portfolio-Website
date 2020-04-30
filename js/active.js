// Use custom JavaScript here
(function($) {
  "use strict";

  // Preload
  $(window).on("load", function() {
    $(".preloader-wrapper").fadeOut();
  });

  // sidebar navigation
  $(".nav-button a").on("click", function(e) {
    e.preventDefault();
    $(".sidebar-navigation").toggleClass("active");
  });
  $(".side-nav-close-btn a").on("click", function(e) {
    e.preventDefault();
    $(".sidebar-navigation").toggleClass("active");
  });

  $(".side-nav-wrapper ul li a").on("click", function() {
    $(".sidebar-navigation").removeClass("active");
  });

  // Skill section animation
  $(window).on("scroll", function() {
    $(".percentage").each(function() {
      let element_height = $(this).offset().top + $(this).outerHeight();
      let window_height = $(window).scrollTop() + $(window).height();
      let bar_width_val = $(this).attr("data-value");
      if (window_height > element_height) {
        $(this).css({
          width: bar_width_val
        });
      }
    });
  });

  // Testimonial Carousel
  $(".owl-carousel.testimonial-carousel").owlCarousel({
    item: 1,
    loop: true,
    margin: 50,
    nav: true,
    navText: [
      '<i class="ion-ios-arrow-thin-left"></i>',
      '<i class="ion-ios-arrow-thin-right"></i>'
    ],
    // center: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // Counter
  $(".counter-number").counterUp({
    delay: 10,
    time: 1000
  });

  // magnific popup
  $(".popup-image-link").magnificPopup({
    type: "image"
  });

  // ScrollIt
  $.scrollIt();

  // scrollUp
  $.scrollUp({
    scrollText: '<i class=" ion-ios-arrow-up"></i>'
  });
})(jQuery);
