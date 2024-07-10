const menu = document.querySelector("#mobile-menu");
const menu__links = document.querySelector(".header__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menu__links.classList.toggle("active");
});
