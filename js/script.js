$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    center: false,
    autoWidth: false,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
        center: false,
      },
      480: {
        items: 2,
        center: false,
      },
      980: {
        items: 3,
      },
      1220: {
        items: 4,
      },
    },
  });
});

let windowHeight = $(window).height();

$(window).scroll(function () {
  let x = $(window).scrollTop();

  let btn_pos = 10 + x * 0.1;

  if (windowHeight - btn_pos > 150) {
    $(".catalog-nav__button").css({
      top: btn_pos + "px",
    });
    $(".catalog-nav__checkbox").css({
      top: btn_pos + "px",
    });
  } 

});
