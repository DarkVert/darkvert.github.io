$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    center: false,
    autoWidth: false,
    navText: ["", ""],
    responsive: {
      0: {
        items: 2,
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
