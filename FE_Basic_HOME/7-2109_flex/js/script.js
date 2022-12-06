var generalBtn = document.getElementById('general-btn');
var totalBtn = document.getElementById('total-btn');

generalBtn.addEventListener('click', function (evt) {
  generalBtn.classList.toggle('inbox__switcher-button--active');
  totalBtn.classList.toggle('inbox__switcher-button--active');
});

totalBtn.addEventListener('click', function (evt) {
  generalBtn.classList.toggle('inbox__switcher-button--active');
  totalBtn.classList.toggle('inbox__switcher-button--active');
});

function toggleMenu() {
  var menu = document.querySelector('.menu');
  var burger = document.querySelector('.burger');

  menu.classList.toggle('menu--open');
  burger.classList.toggle('burger--open');
}

function toggleMenuInbox() {
  var menu = document.querySelector('.inbox');
  var burger = document.querySelector('.burger-inbox');

  menu.classList.toggle('inbox--open');
  burger.classList.toggle('burger-inbox--open');
}
