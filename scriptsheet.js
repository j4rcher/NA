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
