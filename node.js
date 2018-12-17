var slideIndex = 1;
var timer = null;
showSlides(slideIndex);


function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("home_slide");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
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
  timer = setTimeout(showSlides, 3000);
}

var btn1 = document.querySelector('#tb1');

btn1.onclick =  function () {
  document.querySelector('#tb1').style.backgroundColor = "#ff9933";
  document.querySelector('#tb2').style.backgroundColor = "#a0b3de";
  document.querySelector('#tb3').style.backgroundColor = "#a0b3de";
}

var btn2 = document.querySelector('#tb2');

btn2.onclick =  function () {
  document.querySelector('#tb2').style.backgroundColor = "#ff9933";
  document.querySelector('#tb1').style.backgroundColor = "#a0b3de";
  document.querySelector('#tb3').style.backgroundColor = "#a0b3de";

}

var btn3 = document.querySelector('#tb3');

btn3.onclick =  function () {
  document.querySelector('#tb3').style.backgroundColor = "#ff9933";
  document.querySelector('#tb1').style.backgroundColor = "#a0b3de";
  document.querySelector('#tb2').style.backgroundColor = "#a0b3de";
}





var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var email = document.getElementById("mail");


btn.onclick = function open() {
    modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
