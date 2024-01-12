// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");



menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');

// Get all the menu items
const navLinks = document.querySelectorAll('.menu-list li');


// Add click event listener to each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');
  });
});



siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  // When the user scrolls down 75px from the top of the document, show the button
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}




// Move to Top button
var moveTopBtn = document.getElementById("moveTopBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}



// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// Map 
document.addEventListener('DOMContentLoaded', (event) => {
  var map = L.map('map').setView([32.3029937, -90.1803325], 18); // You can adjust the coordinates and zoom level

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: 'Proudly made in Kyiv, Ukraine'
  }).addTo(map);

  var marker = L.marker([32.3029937, -90.1803325]).addTo(map); // You can adjust the marker location
});





document.addEventListener('DOMContentLoaded', () => {
  const servicesGrid = document.querySelector('.services-grid');
  const serviceItems = document.querySelectorAll('.service-item');
  const serviceDetails = document.querySelectorAll('.service-detail');
  const closeButtons = document.querySelectorAll('.close-btn');

  // Function to hide all service details
  function hideAllDetails() {
      serviceDetails.forEach(detail => {
          detail.classList.remove('active');
      });
  }

  // Function to show specific service detail
  function showDetail(detail) {
      hideAllDetails();
      detail.classList.add('active');
  }

  // Event listener for each service item
  serviceItems.forEach(item => {
      item.addEventListener('click', () => {
          const targetId = item.dataset.target;
          const targetDetail = document.getElementById(targetId);
          showDetail(targetDetail);
          servicesGrid.classList.add('hidden');
      });
  });

  // Event listener for each close button
  closeButtons.forEach(button => {
      button.addEventListener('click', () => {
          hideAllDetails();
          servicesGrid.classList.remove('hidden');
      });
  });
});
