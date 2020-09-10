$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
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
