
document.addEventListener("DOMContentLoaded", () => {
  // 1. Smooth Scroll Reveal for Sections
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => revealOnScroll.observe(el));

  // 2. Subtle Parallax Tilt on the Hero Visual
  const heroSection = document.querySelector(".hero-wrapper");
  const heroImg = document.querySelector(".hero-visual img");

  if (heroSection && heroImg) {
    heroSection.addEventListener("mousemove", (e) => {
      const { innerWidth, innerHeight } = window;
      const moveX = (e.clientX - innerWidth / 2) * 0.02;
      const moveY = (e.clientY - innerHeight / 2) * 0.02;
      heroImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    heroSection.addEventListener("mouseleave", () => {
      heroImg.style.transform = "translate(0px, 0px)";
    });
  }
});
