jQuery(function (jQuery) {
  jQuery("#mobile-menu-open").click(function (e) {
    jQuery(".mobile-menu").addClass("mobile-menu_open");
    jQuery("body").addClass("fixed");
  });
  jQuery("#mobile-menu-close").click(function (e) {
    jQuery(".mobile-menu").removeClass("mobile-menu_open");
    jQuery("body").removeClass("fixed");
  });

  jQuery(".accordion__head").click(function (e) {
    var elem = jQuery(e.target).closest(".accordion");
    if (elem.hasClass("accordion_active")) {
      elem.removeClass("accordion_active");
    } else {
      elem.addClass("accordion_active");
    }
  });

  //Настройки по выводу слайдов в зависимости от разрешения экрана
  jQuery(".projects-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });

  jQuery('body').append('<div class="upbtn"></div>');
  jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > 100) {
          jQuery('.upbtn').css({
              transform: 'scale(1)'
          });
          } else {
          jQuery('.upbtn').css({
              transform: 'scale(0)'
          });
      }
  });
  jQuery('.upbtn').on('click',function() {
      jQuery('html, body').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});
