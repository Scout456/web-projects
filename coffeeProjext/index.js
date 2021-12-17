const hamburger = document.querySelector(".ham");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})


/*function btn(){
  let btnS = document.getElementById("target");
  
  btnS.innerHTML = "Order received";
  btnS.style.color = "white";
  btnS.style.fontFamily = "cursive";
    
}

document.getElementById("btnOne").onclick = function(){
  btn();
}*/

/*let btns = document.querySelectorAll('button');
target= document.querySelector(".target");
target.style.color = "white";
target.style.fontFamily = "cursive";

btns.forEach(function(i){
  i.addEventListener('click',function(){
    document.querySelector('.target').innerHTML = "Order received";
    
  });
});*/


function sub(){
  let order = document.getElementById("submit");
  order.innerHTML = " Information sent Thank You";
}

document.getElementById("submit").onclick = function(){
  sub();
}




