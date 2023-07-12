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
    left: e.clientX - 10,
    top: e.clientY - 10,
  });
};

$(document).on("mousedown", () => {
  $(document).on("mousemove", moving);
  $(document).on("mouseup", () => {});
});
