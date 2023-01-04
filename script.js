const nav =document.querySelector(".header-part");
const mobileNav =document.querySelector("nav.mobile-nav");
const menuIcon =document.querySelector(".menu-icon");
const closeIcon =document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer =document.querySelector(".mobile-menu-container");

window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 60){
        nav.classList.add("scrolled");
        mobileNav.classList.add("scrolled");
    }
    else{
        nav.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");
    }
});

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
});
closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
});

function scrollDown(){
    window.scrollTo(0, window.innerHeight);
}

// Text scrolling script
gsap.registerPlugin(ScrollTrigger);
let t1l2 = gsap.timeline();
t1l2.to("#first-text", {
  x:2000,
  duration:50,
  repeat:1,
  ease:'linear'
})
let t1l = gsap.timeline();
t1l.to('#first-text', {
  xPercent:-40,
  scrollTrigger:{
    trigger:"#first-text",
    scrub:1
  }
})
let t2l2 = gsap.timeline();
t2l2.to("#second-text", {
  x:500,
  duration:50,
  repeat:1,
  ease:'linear'
})
let t2l = gsap.timeline();
t2l.to('#second-text', {
  xPercent:40,
  scrollTrigger:{
    trigger:"#second-text",
    scrub:1
  }
})

// search button
let search_btn = document.getElementById('search');
let searchWindow = document.getElementById('search-bar');
search_btn.onclick = function() {
    searchWindow.style.display = "flex";
}
window.onclick = function(event) {
    if (event.target == searchWindow) {
      searchWindow.style.display = "none";
    }
}
let drop_btn = document.getElementById('drop');
let dropWindow = document.getElementById('dropdown-window');
drop_btn.onmouseenter = function() {
    dropWindow.style.display = "flex";
}
dropWindow.onmouseenter = function() {
    dropWindow.style.display = "flex";
}
dropWindow.onmouseleave = function() {
    dropWindow.style.display = "none";
}

let tunnel = document.getElementById('tunnel-b');

window.onscroll = function() {
  tunnel.style.display = "flex";
  setTimeout(function () {
    tunnel.style.display = "none";
  }, 500);
}