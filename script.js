console.log("Website i zdrukthtarisë është aktiv!");

// Animate header on scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  toggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});