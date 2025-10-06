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

// back to top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const images = document.querySelectorAll(".photo-grid img");
images.forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;";
    overlay.innerHTML = `<img src="${img.src}" style="max-width:90%;max-height:90%;border-radius:10px;">`;
    overlay.addEventListener("click", () => overlay.remove());
    document.body.appendChild(overlay);
  });
});

// fade in
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));