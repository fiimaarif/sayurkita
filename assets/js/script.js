const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("menu-active");
});

document.querySelectorAll(".menu li a").forEach((n) =>
  n.addEventListener("click", function () {
    menu.classList.remove("menu-active");
    menuToggle.classList.remove("active");
  })
);

window.onscroll = function () {
  menu.classList.remove("menu-active");
  if (window.scrollY > 1) {
    document.querySelector("header").classList.add("onscroll");
  } else {
    document.querySelector("header").classList.remove("onscroll");
  }
};
