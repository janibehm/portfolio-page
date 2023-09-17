const backButton = document.querySelector('#backToTop');
const header = document.querySelector('header');
const mobButton = document.querySelector('.mobile');
const nav = document.querySelector('nav ul')
const menuItems = document.querySelectorAll('nav ul li a')
const modalButton = document.querySelector('#modalButton')
const overlay = document.querySelector('.overlay')
const closeButton = document.querySelector('.close')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, smoothly scroll to the top of the document
function topFunction() {
  // Get the current scroll position
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
  // If the current scroll position is greater than 0, scroll to top smoothly
  if (currentScroll > 0) {
    window.requestAnimationFrame(topFunction);
    window.scrollTo(0, currentScroll - (currentScroll / 10));
  }
}

// When the user clicks on the "Contact" link, scroll to the bottom of the page
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

const mobMenu = () => {
    for (const link of menuItems) {
        link.addEventListener('click', mobMenu)
    }

    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive')
    } else {
        nav.classList.add('responsive')
    }
}

const modalShow = () => {
    overlay.classList.toggle('visible')
}

mobButton.addEventListener('click', mobMenu)

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});
