const hamburger = document.querySelector(".ham");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})


function btn(){
  let btnS = document.getElementById("target");
  btnS.innerHTML = "Order received";
  btnS.style.color = "white";
  btnS.style.fontFamily = "cursive";
}

document.getElementById("btnOne").onclick = function(){
  btn();
}

document.getElementById("btnTwo").onclick = function(){
  btn();
}

document.getElementById("btnThree").onclick = function(){
  btn();
}
