//HAMBURGER BUTTON
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

$( document ).ready(function() {
  $('.phone-navigation').toggle();
});

$('.menu-btn').on('click', function () {
  $('.phone-navigation').toggle();
});

$('.phone-navigation').on('click', function () {
  $('.phone-navigation').toggle();
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});