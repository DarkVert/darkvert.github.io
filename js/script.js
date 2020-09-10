$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    navText: ["", ""],
    responsive: {
      0: {
        nav: false,
        items: 1,
      },
      480: {
        nav: true,
        items: 2,
      },
      980: {
        nav: true,
        items: 3,
      },
      1220: {
        nav: true,
        items: 4,
      },
    },
  });
});
