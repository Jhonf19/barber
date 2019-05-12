$(function() {

  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });

});


$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
    $("h1").addClass("h");
  }else {
    $("nav").removeClass("black");
    $("h1").removeClass("h");
  }
});
