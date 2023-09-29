/***открытие бургера***/
const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page");
const menuMobile = document.querySelector(".header__mobile");

burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  menuMobile.classList.toggle("header__mobile_open");
  scrollLock.classList.toggle("lock");
});

const linksNavMenu = document.querySelectorAll(".header__link");

function toggleClass() {
  linksNavMenu.forEach((el) => {
    el.classList.remove("active");
  });

  this.classList.add("active");
}

linksNavMenu.forEach((el) => {
  el.addEventListener("click", toggleClass);
});

/*липкий хедер*/
window.onscroll = function showHeader() {
  let header = document.querySelector(".header__wrapper");
  let burgerFixed = document.querySelector(".header__burger");

  if (window.pageYOffset > 200) {
    header.classList.add("header__fixed");
    burgerFixed.classList.add("header__burger-fixed");
  } else {
    header.classList.remove("header__fixed");
    burgerFixed.classList.remove("header__burger-fixed");
  }
};
