"use strict"

$(document).ready(function () {
  $(".show-side-btn").click(function () {
    $(".sidebar").toggleClass("sideshow")
  });
  $(window).resize(function () {
    if (window.matchMedia("(max-width: 800px)").matches) {
      $(".sidebar").addClass("sideshow")

    }
  });
})

/*-----------  start scroll-up  ---------*/

$(window).on("scroll", function () {
  var scrolltop = $(".scroll-top")
  if ($(window).scrollTop() >= 100) {
    scrolltop.fadeIn(400)
    console.log("ffffffffffffff")
  } else {
    scrolltop.fadeOut(400)
    console.log("scrolltop")

  }
})
// Back To 0 Scroll Top body
var scrolltop = $(".scroll-top")
scrolltop.on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    100
  )
})
