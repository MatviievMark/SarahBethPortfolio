const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');

let currentIndex = 0;
const slideWidth = sliderItems[0].clientWidth;
const slideMargin = 10; // Adjust this value based on your CSS margin
const visibleWidth = sliderWrapper.clientWidth;

// Duplicate slides on both ends
const duplicateCount = Math.ceil(visibleWidth / (slideWidth + slideMargin));
const totalItems = sliderItems.length;

// Duplicate slides at the beginning
for (let i = totalItems - duplicateCount; i < totalItems; i++) {
  const duplicateItem = sliderItems[i].cloneNode(true);
  sliderWrapper.insertBefore(duplicateItem, sliderItems[0]);
}

// Duplicate slides at the end
for (let i = 0; i < duplicateCount; i++) {
  const duplicateItem = sliderItems[i].cloneNode(true);
  sliderWrapper.appendChild(duplicateItem);
}

// Update the total number of items after duplication
const updatedTotalItems = sliderWrapper.children.length;

// Set the initial position of the slider
currentIndex = duplicateCount;
slideToIndex(currentIndex);

function slideToIndex(index) {
  sliderWrapper.style.transform = `translateX(-${index * (slideWidth + slideMargin)}px)`;
  currentIndex = index;
}

function slidePrev() {
  if (currentIndex === duplicateCount) {
    slideToIndex(updatedTotalItems - duplicateCount);
  } else {
    slideToIndex(currentIndex - 1);
  }
}

function slideNext() {
  if (currentIndex === updatedTotalItems - duplicateCount) {
    slideToIndex(duplicateCount);
  } else {
    slideToIndex(currentIndex + 1);
  }
}

prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);