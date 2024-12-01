const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  const slider = document.querySelector('.slides');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[n].style.display = 'block';

}

showSlide(currentSlide);

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}



const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Handle underflow
  showSlide(currentSlide);
});

nextButton.addEventListener('click', nextSlide); // More concise way

setInterval(nextSlide, 5000);