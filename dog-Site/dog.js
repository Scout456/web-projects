const iconMenu = document.querySelector(".hamburger-menuTwo");
const navbarTwo = document.querySelector(".navbarTwo");
iconMenu.addEventListener("click", () => {
  navbarTwo.classList.toggle("changeTwo")
})



/*------------------------------------------------------------------------------------------------*/

/*var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/




var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2200); // Change image every 2 seconds
}


const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", checkBoxes)

checkBoxes()

function checkBoxes(){
 const triggerBottom = window.innerHeight /5 * 4;

 boxes.forEach(box => {
   const boxTop = box.getBoundingClientRect().top

   if(boxTop < triggerBottom){
     box.classList.add("show")
   }else{
     box.classList.remove("show")
   }
 })
}


