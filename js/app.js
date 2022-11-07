$(document).ready(function (event) {
  $(".show-sidebar-btn").click(function () {
    $(".sidebar").animate({
      marginLeft: 0,
    });
  });

  $(".hide-sidebar-btn").click(function () {
    $(".sidebar").animate({
      marginLeft: "-100%",
    });
  });
});

$(".notebook-slide").slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".television-slide").slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

let screenHeight = $(window).height();

$(window).scroll(function () {
  let currentPosition = $(this).scrollTop();
  // console.log(currentPosition);
  if (currentPosition > screenHeight - 600) {
    $(".upbar").css("display", "block");
  } else {
    $(".upbar").css("display", "none");
  }
});

$(window).on("load", function () {
  $(".loader-container").fadeOut(500, function () {
    $(this).remove();
  });
});
