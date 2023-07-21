$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $("header").css("background", "#d3e7ff");
      $("header").css("color", "#3b5691");
    } else {
      $("header").css("background", "#d3e7ff");
      $("header").css("color", "#000");
    }
  });
});
