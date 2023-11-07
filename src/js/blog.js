// function slideShow(params) {
//   let currentSlide = 0;
//   const slides = document.querySelector(".slides");
//   const slideIndicators = document.querySelectorAll(".slide-indicator");

//   function goToSlide(slideIndex) {
//     currentSlide =
//       (slideIndex + slides.children.length) % slides.children.length;
//     updateSlidePosition();
//   }

//   function updateSlidePosition() {
//     const offset = -currentSlide * 100;
//     slides.style.transform = `translateX(${offset}%)`;
//   }
// }
// // Initialize the slide indicators
