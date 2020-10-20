var slideIndex = 0;
showSlides(slideIndex);          //aktivira funkciju za slajd


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);             // na klik se ubacuje 1,-1
}

// Thumbnail image controls
function currentSlide(n) {       // tocke definiraju poziciju u html
  showSlides(slideIndex = n);
}

function showSlides(n) { //n = slide index = 1

  var i;                                        // na pocetku undefined
  var slides = document.getElementsByClassName("mySlides");//cita koliko ima slideova
  var dots = document.getElementsByClassName("dot");        //cita koliko ima dot-a i ispisuje koja je bila aktivirana prije
console.log(dots);
  if (n > slides.length) {slideIndex = 1}              // u slucaju kad se stisne strelica za sljedeci slajd na zadnjem slajdu prebacit ce na prvi
  if (n < 1) {slideIndex = slides.length}              // takodjer ako se ide u nazad
  hideSlides(slides);
  activedots(dots);
  slides[slideIndex-1].style.display = "block";           //
  dots[slideIndex-1].className += " active";
}

function hideSlides(slides) {                               //sakriva slideove
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
}
function activedots(dots) {
  for (i = 0; i < dots.length; i++) {                                 // ispisuje koja tocka je aktivna
      dots[i].className = dots[i].className.replace(" active", "");

  }
}
autoslides();
 function autoslides() {


  var i;
  var slides = document.getElementsByClassName("mySlides");

  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(autoslides,10000); // Change image every 2 seconds
}


function myFunction() {
  var x = document.getElementById("myTopnav");
  console.log(x);
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
