const hamburger = document.querySelector(".ham");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})