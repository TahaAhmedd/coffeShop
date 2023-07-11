const navbar = document.getElementById("navbar")
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  if(hamburger.classList.contains("active")){
    navbar.classList.add("bg-main")
  }
  else if(!hamburger.classList.contains("active") && window.scrollY < 100){
    navbar.classList.remove("bg-main")
  }
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

window.addEventListener('scroll',()=>{
  if(window.scrollY >= 100 ){
    navbar.classList.add("position-sticky")
    navbar.classList.add("bg-main")
  }
  else{
    navbar.classList.remove("position-sticky")
    navbar.classList.remove("bg-main")
  }
})