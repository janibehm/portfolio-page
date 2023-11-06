const backButton = document.querySelector('#backToTop'),
  header = document.querySelector('header'),
  mobButton = document.querySelector('.mobile'),
  nav = document.querySelector('nav ul'),
  menuItems = document.querySelectorAll('nav ul li a'),
  modalButton = document.querySelector('#modalButton'),
  overlay = document.querySelector('.overlay'),
  closeButton = document.querySelector('.close');
function scrollFunction() {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (document.getElementById('topBtn').style.display = 'block')
    : (document.getElementById('topBtn').style.display = 'none');
}
function topFunction() {
  let o = document.documentElement.scrollTop || document.body.scrollTop;
  o > 0 &&
    (window.requestAnimationFrame(topFunction), window.scrollTo(0, o - o / 10));
}
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
window.onscroll = function () {
  scrollFunction();
};
const mobMenu = () => {
    for (const o of menuItems) o.addEventListener('click', mobMenu);
    nav.classList.contains('responsive')
      ? nav.classList.remove('responsive')
      : nav.classList.add('responsive');
  },
  modalShow = () => {
    overlay.classList.toggle('visible');
  };
mobButton.addEventListener('click', mobMenu),
  window.addEventListener('scroll', function () {
    document
      .querySelector('header')
      .classList.toggle('scrolled', window.scrollY > 0);
  });
