$(function() {
  $(".menu-icon i").on("click", function() {
    $("ul.mv").slideToggle();
  });
  $(window).resize(function(){
    var a =$( window ).width();
    if (a>576) {
      $("ul.mv").hide();
    }

  });

});

//
// $(window).on("scroll", function() {
//   if ($(window).scrollTop()) {
//     $("nav").addClass("black");
//     $("h1").addClass("h");
//   }else {
//     $("nav").removeClass("black");
//     $("h1").removeClass("h");
//   }
// });
