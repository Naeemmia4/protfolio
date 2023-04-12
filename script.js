var typed = new Typed(".typing", {
  strings: ["Web Designer", "Web Developer", "Digital Darketing", "SEO"],
  typeSpeed: 80,
  backSpeed: 80,
});
var typed = new Typed(".typing-2", {
  strings: ["Web Designer", "Web Developer", "Digital Darketing", "SEO"],
  typeSpeed: 80,
  backSpeed: 80,
});
// open and nev menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});
// clos nav menu
const closeNev = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};
closeBtn.addEventListener("click", closeNev);

// nav color chang

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});
