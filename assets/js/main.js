const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

const iframeBtn = document.getElementById("iframeBtn");
const iframe = document.getElementById("iframe");

iframeBtn.addEventListener("click", () => {
  iframe.classList.toggle("hidden");
});

const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
  // reset: true, // Animations repeat
});

sr.reveal(
  `.home__data, .home__img, .home__image, .about__img, .about__data, .visit__data`
);

sr.reveal(` .footer__img-1, .footer__img-2`, {
  rotate: { z: -15 },
});
sr.reveal(`.home__bread, .about__bread`, { rotate: { z: 15 } });
sr.reveal(`.home__footer`, { scale: 1, origin: "bottom" });

sr.reveal(`.new__card:nth-child(1) img`, { rotate: { z: -30 }, distance: 0 });
sr.reveal(`.new__card:nth-child(2) img`, {
  rotate: { z: 15 },
  distance: 0,
  delay: 600,
});
sr.reveal(`.new__card:nth-child(3) img`, {
  rotate: { z: -30 },
  distance: 0,
  delay: 900,
});

sr.reveal(`.footer__container`, { scale: 1 });
sr.reveal(`.favorite__card img`, {
  interval: 100,
  rotate: { z: 15 },
  distance: 0,
});
