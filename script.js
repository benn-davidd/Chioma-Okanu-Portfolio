document.addEventListener("DOMContentLoaded", function toggleMenu() {
  // const menu = document.querySelector(".menu-links");
  const menuItems = document.querySelectorAll(".menu-items");
  // const icon = document.querySelector(".hamburger");
  const menuCheckbox = document.getElementById("sidebar-active");
  menuItems.forEach((link) => {
    link.addEventListener("click", function () {
      menuCheckbox.checked = false;
    });
  });
});

/* -- SCROLL REVEAL ANIMATION -- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: false,
});

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".section__text__p1", {});
sr.reveal(".title", {});

/* -- PROJECTS -- */
const srBottom = ScrollReveal({
  origin: "bottom",
  distance: "80px",
  duration: 2000,
  reset: false,
});

sr.reveal(".projects", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: false,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-left", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: false,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".contact-right", { delay: 100 });
