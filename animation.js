// Add any custom animations here
document.addEventListener("DOMContentLoaded", function () {
  // Example: Fade in elements on scroll
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1s ease";
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
});
