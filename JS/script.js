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

// Bible verse scroll up animation 
window.addEventListener('scroll', function() {
  // Get the text box element
  var textBox = document.querySelector('.text-box');
  
  // Check if the textBox actually exists to avoid null reference errors
  if (textBox) {
    // Get the current scroll position
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Set the opacity based on the scroll position
    if (scrollPosition > 50) { // You can adjust '50' to be the threshold of when the text starts to fade out
      textBox.style.opacity = '0';
    } else {
      textBox.style.opacity = '1';
    }
  } else {
    console.log('The .text-box element was not found.');
  }
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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        hideAllDetails();
        servicesGrid.classList.remove('hidden');
    }
});
});

// PDF Modal 

document.addEventListener('DOMContentLoaded', (event) => {
  const studioPolicyBtn = document.getElementById('studioPolicy');
  const closeOverlayBtn = document.querySelector('.close-overlay-button');
  const overlay = document.getElementById('studioPolicyOverlay');
  const navbar = document.querySelector('.navbar'); // Adjust if your navbar has a different class or id

  // Function to disable scrolling and change navbar background color
  function openOverlay() {
    overlay.style.display = 'flex'; // Show the overlay
    document.body.classList.add('body-fixed');
    navbar.style.backgroundColor = 'var(--first-color)';
  }
  
  // Function to enable scrolling and revert navbar background color
  function closeOverlay() {
    overlay.style.display = 'none'; // Hide the overlay
    document.body.classList.remove('body-fixed');
    navbar.style.backgroundColor = ''; // Revert the navbar color

  }

  studioPolicyBtn.addEventListener('click', openOverlay);
  closeOverlayBtn.addEventListener('click', closeOverlay);
});


// Expand PDF animation 

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.expandable-image');
  const closeButton = document.querySelector('.close-expanded-image-button');
  const navbar = document.querySelector('.navbar'); // Adjust if your navbar has a different class or id

  images.forEach(image => {
    image.addEventListener('click', function() {
      // First, reset all images to their non-expanded state and show the navbar
      images.forEach(img => {
        if (img !== this) { // Check if the image is not the one being clicked
          img.classList.remove('expanded');
          img.style.display = 'none'; // Hide other images
        }
      });

      // Then, expand the clicked image and hide the navbar
      this.classList.add('expanded');
      this.style.display = 'block'; // Show the clicked image
      closeButton.style.display = 'block';
      navbar.style.display = 'none'; // Hide the navbar
      document.body.classList.add('body-fixed'); // Prevent background scrolling
    });
  });

  closeButton.addEventListener('click', function() {
    // When closing, reset all images back to their default state and show the navbar
    images.forEach(image => {
      image.classList.remove('expanded');
      image.style.display = 'block'; // Show all images again
    });
    this.style.display = 'none';
    navbar.style.display = ''; // Show the navbar
    document.body.classList.remove('body-fixed'); // Allow background scrolling
  });
});




// Calculate the height of the navbar 

// When the window has finished loading
window.addEventListener('load', function() {
  // Get the navbar element by its class or id
  var navbar = document.querySelector('.navbar');

  // Calculate the height of the navbar
  var navbarHeight = navbar.offsetHeight;

  // Get the studio policy header element
  var studioPolicyHeader = document.querySelector('.studio-policy-header');

  // Set the padding-top of the studio policy header to be a bit more than the navbar height
  studioPolicyHeader.style.paddingTop = (navbarHeight + 20) + 'px'; // Added 20px for some extra space
});

document.addEventListener('DOMContentLoaded', function () {
  // Select the menu
  var menu = document.querySelector('.navbar .menu-list');
  // Select menu items
  var menuItems = document.querySelectorAll('.navbar .menu-list li a');

  // Function to hide the menu
  function hideMenu() {
    menu.classList.remove('active'); // Assuming 'active' class toggles menu visibility
    document.querySelector('.icon.menu-btn').classList.remove('hide'); // Show the hamburger icon
    document.querySelector('.icon.cancel-btn').classList.remove('show'); // Hide the cancel icon
  }

  // Add click event to each menu item
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      hideMenu();
    });
  });

  // Add click event for the cancel button
  var cancelBtn = document.querySelector('.icon.cancel-btn');
  cancelBtn.addEventListener('click', function () {
    hideMenu();
  });

  // Add click event for the hamburger menu
  var hamburgerBtn = document.querySelector('.icon.menu-btn');
  hamburgerBtn.addEventListener('click', function () {
    menu.classList.add('active'); // Show the menu
    this.classList.add('hide'); // Hide the hamburger icon
    cancelBtn.classList.add('show'); // Show the cancel icon
  });
});


// // responsive js 
//   // Get the elements
//   const menuBtn = document.querySelector('.icon.menu-btn');
//   const menuList = document.querySelector('.navbar .menu-list');
//   const cancelBtn = document.querySelector('.icon.cancel-btn');

//   // Event listener for menu button click
//   menuBtn.addEventListener('click', function() {
//     menuList.classList.add('active'); // Show the menu
//     menuBtn.classList.add('hide'); // Hide the menu button
//     cancelBtn.classList.add('show'); // Show the cancel button
//   });

//   // Event listener for cancel button click
//   cancelBtn.addEventListener('click', function() {
//     menuList.classList.remove('active'); // Hide the menu
//     menuBtn.classList.remove('hide'); // Show the menu button
//     cancelBtn.classList.remove('show'); // Hide the cancel button
//   });