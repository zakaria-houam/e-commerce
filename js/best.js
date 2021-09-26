const show=document.querySelector(".nav_menu");
function showmenu(){
    show.classList.toggle("showmenu");
}
function removemenu(){
    show.classList.remove("showmenu");
}
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
function scrollTop(){
    const top = document.getElementById('scrolltop')
    
    if(this.scrollY >= 60) top.classList.add('scroll-top'); else top.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)

const themeButton=document.querySelector(".change-theme")
const darkTheme='dark-theme'

themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
})