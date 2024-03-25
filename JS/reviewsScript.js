console.log("reviewsScript.js is connected");
document.addEventListener('DOMContentLoaded', function() {
    fetch('content-manager/reviews.json')
      .then(response => response.json())
      .then(reviewsData => {
        const reviewsContainer = document.getElementById('reviewsContainer');

        reviewsData.reviews.forEach(review => {
          const slideElement = document.createElement('div');
          slideElement.classList.add('slide', 'swiper-slide');

          const imageElement = document.createElement('img');
          imageElement.src = review.image;
          imageElement.alt = '';
          imageElement.classList.add('testi-image');

          const textElement = document.createElement('p');
          textElement.textContent = review.text;
          textElement.classList.add('testi-text');

          const quoteIconElement = document.createElement('i');
          quoteIconElement.classList.add('bx', 'bxs-quote-alt-left', 'quote-icon');

          const detailsElement = document.createElement('div');
          detailsElement.classList.add('details');

          const nameElement = document.createElement('span');
          nameElement.textContent = review.name;
          nameElement.classList.add('name');

          const roleElement = document.createElement('span');
          roleElement.textContent = review.role;
          roleElement.classList.add('role');

          detailsElement.appendChild(nameElement);
          detailsElement.appendChild(roleElement);

          slideElement.appendChild(imageElement);
          slideElement.appendChild(textElement);
          slideElement.appendChild(quoteIconElement);
          slideElement.appendChild(detailsElement);

          reviewsContainer.appendChild(slideElement);
        });
      })
      .catch(error => {
        console.log('Error fetching reviews data:', error);
      });
  });