// const swiper = new Swiper(".hero__swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: false,
//   slidesPerView: 4,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".hero__swiper-button-next",
//     prevEl: ".hero__swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     375: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },

//     768: {
//       slidesPerView: 4,
//       spaceBetween: 10,
//     },
//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 10,
//     },
//     1440: {
//       slidesPerView: 4,
//       spaceBetween: 20,
//     },
//   },
// });
var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

function showSlide() {
  // Скрытые все слайды
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Показываем текущий слайд
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showSlide();
}

function previousSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

// Показываем первый слайд при загрузке страницы
showSlide();
