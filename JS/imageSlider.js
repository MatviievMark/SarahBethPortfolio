const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');

let currentIndex = 0;
const slideWidth = sliderItems[0].clientWidth;
const slideMargin = 10; // Adjust this value based on your CSS margin
const visibleWidth = sliderWrapper.clientWidth;

// Duplicate the first few slides and append them to the end
const duplicateCount = Math.ceil(visibleWidth / (slideWidth + slideMargin));
for (let i = 0; i < duplicateCount; i++) {
  const duplicateItem = sliderItems[i].cloneNode(true);
  sliderWrapper.appendChild(duplicateItem);
}

const totalItems = sliderWrapper.childElementCount;

function slideToIndex(index) {
  sliderWrapper.style.transform = `translateX(-${index * (slideWidth + slideMargin)}px)`;
  currentIndex = index;
}

function slidePrev() {
  if (currentIndex === 0) {
    slideToIndex(totalItems - duplicateCount);
  } else {
    slideToIndex(currentIndex - 1);
  }
}

function slideNext() {
  if (currentIndex === totalItems - duplicateCount) {
    slideToIndex(0);
  } else {
    slideToIndex(currentIndex + 1);
  }
}

prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);