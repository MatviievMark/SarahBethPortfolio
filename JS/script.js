// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
let overlayOpenCount = 0;
let overlayJustOpened = false; // Flag to track if overlay was just opened



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
const studioPolicyBtn = document.getElementById('studioPolicy');


// Function to open the studio policy overlay
function openStudioPolicyOverlay() {
  studioPolicyOverlay.style.display = 'flex';
  overlayOpenCount = 1;
  overlayJustOpened = true; // Set flag as overlay is just opened
  setTimeout(() => overlayJustOpened = false, 100); // Reset flag after short delay
}

// Function to close the studio policy overlay
function closeStudioPolicyOverlay() {
  studioPolicyOverlay.style.display = 'none';
  overlayOpenCount = 0;
  document.body.classList.remove('body-fixed');
  navbar.style.backgroundColor = ''; // Revert the navbar color

}

// Event listener for studioPolicyBtn
studioPolicyBtn.addEventListener('click', openStudioPolicyOverlay);

// Event listener for each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');

    // Close the studio policy overlay if it's open, and the clicked item is not studioPolicyBtn
    if (item.id !== 'studioPolicy' && studioPolicyOverlay.style.display === 'flex' && overlayOpenCount === 1) {
      if (!overlayJustOpened) { // Only close if the overlay wasn't just opened
        closeStudioPolicyOverlay();
      }
    }
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
   // Adjust if your navbar has a different class or id

  // Function to disable scrolling and change navbar background color
  function openOverlay() {
    overlay.style.display = 'flex';
    
    document.body.classList.add('body-fixed');
    navbar.style.backgroundColor = 'var(--first-color)';
  }
  
  // Function to enable scrolling and revert navbar background color
  function closeOverlay() {
    overlay.style.display = 'none';
    
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
    // Assuming '.studio-policy-overlay' is the class for the overlay that needs to be closed
    const studioPolicyOverlay = document.querySelector('.studio-policy-overlay');
  
    // Close the studio policy overlay
    if (studioPolicyOverlay) {
      studioPolicyOverlay.style.display = 'none';
    }
  
    // Show all images again (if necessary, depending on your use case)
    images.forEach(image => {
      image.style.display = 'block';
    });
  
    // Hide the close button itself
    this.style.display = 'none';
  
    // Show the navbar
    navbar.style.display = 'flex'; // Adjust the display value to whatever it was initially (e.g., 'flex', 'block')
  
    // Allow background scrolling
    document.body.classList.remove('body-fixed');
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