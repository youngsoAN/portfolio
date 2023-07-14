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

  $(".contact").on("scroll", () => {});

  // 마우스 따라 움직이는 꿀벌이미지
  const moving = (e) => {
    $(".dance").css({
      left: e.clientX - 40,
      top: e.clientY - 100,
    });
  };

  $(document).on("mousemove", () => {
    $(document).on("mousemove", moving);
    $(document).on("mouseup", () => {});
  });
});
