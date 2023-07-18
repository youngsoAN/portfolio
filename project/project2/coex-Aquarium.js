$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  //console.log(scroll);
  if (scroll >= 500) {
    //console.log('a');
    $(".section3 .main-img .txt-hidden h2").addClass("change");
  } else {
    //console.log('a');
    $(".section3 .main-img .txt-hidden h2").removeClass("change");
  }
});
