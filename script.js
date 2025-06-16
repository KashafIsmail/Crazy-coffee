// nav bar
  const bar = document.getElementById('bar');
  const navList = document.querySelector('nav ul');

  bar.addEventListener('click', () => {
    navList.classList.toggle('show');
    bar.classList.toggle('fa-xmark');
    bar.classList.toggle('fa-bars');
  });

// img slider
let currentIndex = 0;
const slider = document.getElementById("slider");
const dotsContainer = document.getElementById("dots");
const cards = document.querySelectorAll(".card");

let cardsPerSlide = getCardsPerSlide();
let totalSlides = Math.ceil(cards.length / cardsPerSlide);

createDots();

function updateSlider() {
  cardsPerSlide = getCardsPerSlide();
  totalSlides = Math.ceil(cards.length / cardsPerSlide);
  const slideWidth = cards[0].offsetWidth / cardsPerSlide;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  updateDots();
}

function slideLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

function slideRight() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlider();
  }
}

function getCardsPerSlide() {
  const width = window.innerWidth;
  if (width < 600) return 1;
  if (width < 900) return 2;
  return 3;
}

function createDots() {
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  }
  updateDots();
}

function updateDots() {
  dotsContainer.innerHTML = "";
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.toggle("active", i === currentIndex);
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  }
}

window.addEventListener("resize", updateSlider);
window.addEventListener("load", updateSlider);
