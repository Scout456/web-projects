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

/*------------------------------------------------------------------------*/
/*
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
  setTimeout(showSlides, 2200); // Change image every 2.2 seconds
}*/

/*---------------------------------------------------------------------------------*/
/*const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes()

function checkBoxes(){
 const triggerBottom = window.innerHeight /5 * 4;

 boxes.forEach(box => {
   const boxTop = box.getBoundingClientRect().top;

   if(boxTop < triggerBottom){
     box.classList.add("show");
   }else{
     box.classList.remove("show");
   }
 })
}*/

/*--------------------------------------------------------------------*/



/*const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener("load", (event) => {
  boxElement = document.querySelector("#box");

  createObserver();
}, false);

function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (i = 1.0; i < numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
    }

    prevRatio = entry.intersectionRatio;
  });
}*/

/* Intersecrion Observer---------------------------------------------------------------------*/

"use strict";
const allSections = document.querySelectorAll("section");
console.log(allSections);

const options = {
  root: null,
  threshold: 0.3,
};

const sectionObserver = new IntersectionObserver(callback, options);

allSections.forEach((section) => {
  sectionObserver.observe(section);
});

document.querySelectorAll(".left-column").forEach((column) => {
  column.classList.add("hidden-left");
});
document.querySelectorAll(".right-column").forEach((column) => {
  column.classList.add("hidden-right");
});

document.querySelectorAll(".left-columnTwo").forEach((column) => {
  column.classList.add("hidden-leftTwo");
});
document.querySelectorAll(".right-columnTwo").forEach((column) => {
  column.classList.add("hidden-rightTwo");
});

document.querySelectorAll(".left-columnBottom").forEach((column) => {
  column.classList.add("hidden-leftBottom");
});

document.querySelectorAll(".right-columnBottom").forEach((column) => {
  column.classList.add("hidden-rightBottom");
});

function callback(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  //   get the class name of current section that is in view
  const curSectionsName = entry.target.getAttribute("class");
  //   Now select that specific target section
  const curSection = document.querySelector(`.${curSectionsName}`);
  curSection.lastElementChild.firstElementChild.classList.remove("hidden-left");
  curSection.lastElementChild.lastElementChild.classList.remove("hidden-right");
  curSection.lastElementChild.firstElementChild.classList.remove("hidden-leftTwo");
  curSection.lastElementChild.lastElementChild.classList.remove("hidden-rightTwo");
  curSection.lastElementChild.firstElementChild.classList.remove("hidden-leftBottom");
  curSection.lastElementChild.lastElementChild.classList.remove("hidden-rightBottom");

  observer.unobserve(entry.target);
}



/*function callBackFunction(entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    imgContent.classList.remove("hidden");
  } else {
    imgContent.classList.add("hidden");
  }
}*/









