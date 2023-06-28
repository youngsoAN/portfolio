$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $("header").css("background", "#ffff");
    } else {
      $("header").css("background", "#ffdbdb");
    }
  });
});
