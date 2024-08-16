window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuBar = document.querySelector(".menu-bar");

  menuToggle.addEventListener("click", function () {
    menuBar.classList.toggle("show");
  });
});
