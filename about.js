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

//
// const moving = (e) => {
//   $(".dance").css({
//     left: e.clientX - 40 + "px",
//     top: e.clientY - 100 + "px",
//   });
// };

// $(document).on("mousemove", () => {
//   $(document).on("mousemove", moving);
//   $(document).on("mouseup", () => {});
// });
//

const circle = document.querySelector(".dance");

document.addEventListener("mousemove", (e) => {
  // mousemove이벤트를 이용해 움

  // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.

  // pageX, pageY와는 다름.

  const mouseX = e.clientX;

  const mouseY = e.clientY;

  circle.style.left = mouseX + "px";

  circle.style.top = mouseY + "px";
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

$(window).scroll(function () {
  $(".skillBox").each(function (i) {
    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_element) {
      $(this).animate({ opacity: "1" }, 900);
    }
  });
});
