jQuery(function ($) {
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
        },
      },
    ],
  });

  // function elementInViewport(el) {
  //   var bounds = el.getBoundingClientRect();
  //   return (
  //     bounds.top + bounds.height > 0 && // Елемент ниже верхней границы
  //     window.innerHeight - bounds.top > 0 && // Выше нижней
  //     bounds.left + bounds.width > 0 && // Правее левой
  //     window.innerWidth - bounds.left > 0 // Левее правой
  //   );
  // }
  // jQuery(window).on("scroll", (e) => {
  //   var el = jQuery(".consultation");
  //   var inViewport = elementInViewport(el[0]);
  //   if (inViewport) {
  //     jQuery(".object-cown").addClass("active");
  //   } else {
  //     jQuery(".object-cown").removeClass("active");
  //   }
  // });

  // // ask form
  // document.addEventListener(
  //   "wpcf7mailsent",
  //   function (event) {
  //     if ((event.detail.contactFormId == 38)) {
  //       jQuery(".ask-confirm").addClass("active");
  //     } else if ((event.detail.contactFormId == 39)) {
  //       jQuery(".consultation-confirm").addClass("active");
  //     }
  //   },
  //   false
  // );

  // jQuery("#ask-reset").click(function (e) {
  //   jQuery(".ask-confirm").removeClass("active");
  //   jQuery("#ask-form")[0].reset();
  // });

  // //consultation form
  // jQuery("#consultation-reset").click(function (e) {
  //   jQuery(".consultation-confirm").removeClass("active");
  //   jQuery("#consultation-form")[0].reset();
  // });
});
