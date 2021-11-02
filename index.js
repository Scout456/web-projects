
//Introduction
/*function load(message){
  alert("Hello, welcome to my webpage. " + message);
}*/

document.getElementById("IntroLoad").onload = function(){
  alert(" Here's the date and time: " + Date())
}



//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  } 
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}  

/*Slide opens menu*/
function openNav(){
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav(){
  document.getElementById("mySidenav").style.width = "0";
}



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunction() {
  document.getElementById("dropdown-hospital-content").classList.toggle("show");

  }





// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  
  
  if (!event.target.matches('.dropbtn-hospital')) {
    var dropdowns = document.getElementsByClassName("down-arrow");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

  /*Changes background color of Chandler regional medical center when down arrow clicked*/
  function start() {
    var submit = document.getElementById("down-arrow");
    submit.addEventListener("click", toggle);
  };

  function toggle() {
    var color = document.getElementById("hospital-container");
     
    if(color.style.backgroundColor==='orange')
      color.style.backgroundColor='';
       
    else
    color.style.backgroundColor = "orange";
     
  
  };

  start();

  







   



/*function myFunction(){
  document.getElementById("hospital-container").style.backgroundColor = "red";
}*/
/*
 document.getElementById("dropbtn-hospital").onclick = function(){
  document.getElementById("hospital-container").style.backgroundColor = "#CE661D";
}*/


  
