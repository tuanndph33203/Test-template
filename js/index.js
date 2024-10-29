let currentIndex = 0;
const promotionRow = document.querySelector('.sale-primary');
const products = document.querySelectorAll('.product-card');
const totalSlides = products.length;
const visibleSlides = 8;

document.querySelector('.right-primary').addEventListener('click', () => {
  if (currentIndex < totalSlides - visibleSlides && currentIndex < 4) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlidePosition();
});

document.querySelector('.left-primary').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = 4;
  }
  updateSlidePosition();
});

function updateSlidePosition() {
  promotionRow.style.transform = `translateX(-${
    currentIndex * (100 / visibleSlides) + 4
  }%)`;
  console.log(currentIndex * (100 / visibleSlides));
}
const promotionRow2 = document.querySelector('.sale-secondary');
let currentIndex2 = 0;

document.querySelector('.right-secondary').addEventListener('click', () => {
  if (currentIndex2 < totalSlides - visibleSlides && currentIndex2 < 4) {
    currentIndex2++;
  } else {
    currentIndex2 = 0;
  }
  updateSlidePosition2();
});

document.querySelector('.left-secondary').addEventListener('click', () => {
  if (currentIndex2 > 0) {
    currentIndex2--;
  } else {
    currentIndex2 = 4;
  }
  updateSlidePosition2();
});

function updateSlidePosition2() {
  promotionRow2.style.transform = `translateX(-${
    currentIndex2 * (100 / visibleSlides) + 4
  }%)`;
}
