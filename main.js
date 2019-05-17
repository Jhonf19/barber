$(()=> {
  $(".menu-icon").on("click", ()=>{
    $("header nav ul").slideToggle();
    // $(".btn-menu").toggleClass("btn-on-menu")
    // $(".menu").slideToggle()
    // $(".btn-menu").toggleClass("btn btn-dark")
    // alert("WW")
  })
  $(window).scroll(()=>{

    console.log($("#about").scrollTop());
  })
})
