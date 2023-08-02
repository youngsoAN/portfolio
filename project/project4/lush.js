var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  slideToClickedSlide: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
});

// 햄버거메뉴
var burger = $("header .menu-trigger");

burger.each(function (index) {
  var $this = $(this);

  $this.on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active-" + (index + 2));
    $("header").toggleClass("active");
  });
});

// 클릭이벤트
function handleTextClick(event) {
  var moveText = event.target; // 클릭된 요소 가져오기
  var randomColor = getRandomColor();
  moveText.style.color = randomColor;
}

// 랜덤한 색상 생성 함수
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 모든 .move_text 클릭 이벤트 핸들러
var moveTextElements = document.getElementsByClassName("move_text");
for (var i = 0; i < moveTextElements.length; i++) {
  moveTextElements[i].addEventListener("click", handleTextClick);
}

// 마우스 따라다니는 이벤트
$(document).ready(function () {
  $(document).mousemove(function (event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;

    $(".follow_mouse").each(function () {
      var followmouse = $(this);
      var offsetX = parseInt(followmouse.attr("data-offsetX"));
      var offsetY = parseInt(followmouse.attr("data-offsetY"));

      followmouse.css({
        left: mouseX + offsetX + 5,
        top: mouseY + offsetY + 5,
      });
    });
  });
});

// 마우스 감추기
document.body.style.cursor = "none";

// 스크롤 부드럽게 이동
$(".scroll-link").click(function (event) {
  event.preventDefault();
  var target = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(target).offset().top,
    },
    500
  ); // 부드러운 스크롤 속도 (1초)
});
