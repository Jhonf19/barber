const navSlide = ()=>{
    const icon = document.querySelector('.menu-icon');
    const nav = document.querySelector('.nav-link');
    icon.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active')
    })
}
navSlide()
