$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 10000,
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
