// var generalBtn = document.getElementById('general-btn');
// var totalBtn = document.getElementById('total-btn');

let generalBtn = document.querySelector('#general-btn');
let totalBtn = document.querySelector('#total-btn');

generalBtn.addEventListener('click', function (evt) {
  generalBtn.classList.toggle('inbox__switcher-button--active');
  totalBtn.classList.toggle('inbox__switcher-button--active');
});

totalBtn.addEventListener('click', function (evt) {
  generalBtn.classList.toggle('inbox__switcher-button--active');
  totalBtn.classList.toggle('inbox__switcher-button--active');
});

function toggleMenu() {
  // var menu = document.querySelector('.menu');
  // var burger = document.querySelector('.burger');

  let menu = document.querySelector('.menu');
  let burger = document.querySelector('.burger');

  menu.classList.toggle('menu--open');
  burger.classList.toggle('burger--open');
}

function toggleMenuInbox() {
  // var inbox = document.querySelector('.inbox');
  // var burger2 = document.querySelector('.burger2');

  let inbox = document.querySelector('.inbox');
  let burger2 = document.querySelector('.burger2');

  inbox.classList.toggle('inbox--open');
  burger2.classList.toggle('burger2--open');
}
