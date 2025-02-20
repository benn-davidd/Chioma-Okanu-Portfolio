function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  // const menuItems = document.querySelectorAll(".menu-items");
  const icon = document.querySelector(".hamburger-icon");
  document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('sidebar-active').checked = false;
    });
  });
}

/* -- SCROLL REVEAL ANIMATION -- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.section__text__p1',{})
sr.reveal('.title',{})

/* -- PROJECTS -- */
const srBottom = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('.projects', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-left',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.contact-right',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
      document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)