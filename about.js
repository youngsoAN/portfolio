$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $("header").css("background", "#ffff");
      $("header").css("color", "#c75f5f");
    } else {
      $("header").css("background", "#ffdbdb");
      $("header").css("color", "#000");
    }
  });
});

const moving = (e) => {
  $(".dance").css({
    left: e.clientX - 40 + "px",
    top: e.clientY - 100 + "px",
  });
};

$(document).on("mousemove", () => {
  $(document).on("mousemove", moving);
  $(document).on("mouseup", () => {});
});

$(window).scroll(function () {
  // if ($(this).scrollTop() > 1000) {
  //   $(".skillBox").fadeIn(500);
  //   console.log("페이드인");
  // } else {
  //   $(".skillBox").fadeOut(500);
  //   console.log("페이드아웃");
  // }
});
