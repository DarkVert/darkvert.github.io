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

$(document).click(function (e) {
  if (
    $(e.target).closest(".burger-btns").length == 0 &&
    $(e.target).closest(".search__burger-checkbox").length == 0
  ) {
    $(".search__burger-checkbox").prop("checked", false);
  }

  if (
    $(e.target).closest(".main__left-column").length == 0 &&
    $(e.target).closest(".catalog-nav__checkbox").length == 0
  ) {
    $(".catalog-nav__checkbox").prop("checked", false);
  }
});
