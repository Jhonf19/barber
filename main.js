$(()=> {
  $(".btn-menu").on("click", ()=>{
    $(".btn-menu").toggleClass("btn-on-menu")
    $(".menu").slideToggle()
    // $(".btn-menu").toggleClass("btn btn-dark")
    // alert("WW")
  })
})
