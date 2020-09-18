function openMenu() {
  if (checkMobile())  {
    document.querySelector(".nav-menu").style.animation = "fade-in 0.5s forwards";
  }
  else {
    document.querySelector(".nav-menu").style.animation = "slide-in 0.5s forwards";
  }
}

function closeMenu()  {
  if (checkMobile())  {
    document.querySelector(".nav-menu").style.animation = "fade-out 0.5s forwards";
  }
  else {
    document.querySelector(".nav-menu").style.animation = "slide-out 0.5s forwards";
  }
}

function checkMobile()  {
  var intElementClientWidth = document.documentElement.clientWidth;
  if (intElementClientWidth < 600)  {
    return true;
  }
}

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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
