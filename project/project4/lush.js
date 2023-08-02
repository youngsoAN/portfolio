var swiper = new Swiper(".mySwiper", {
  // effect: "coverflow",
  // grabCursor: true,
  // centeredSlides: true,
  // slidesPerView: "auto",
  // coverflowEffect: {
  //   rotate: 40,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true,
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //
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
  var randomColor = getRandomColor(); // 랜덤한 색상 생성
  moveText.style.color = randomColor; // 글자 색상 변경
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
