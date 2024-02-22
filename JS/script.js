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
  scrollWheelZoom: false;

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: 'Made in Kyiv, Ukraine'
  }).addTo(map);

  var marker = L.marker([32.3029937, -90.1803325]).addTo(map); // You can adjust the marker location

  map.on('click', function() {
    map.scrollWheelZoom.enable();
  });

  // Disable scroll wheel zoom on mouseout
  map.on('mouseout', function() {
    map.scrollWheelZoom.disable();
  });
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


// center the hidden seciton in the service seciton 


document.querySelectorAll('.service-item').forEach(item => {
  item.addEventListener('click', function() {
    // Get the clicked service item's details container
    const detailId = this.getAttribute('data-target');
    const detailElement = document.getElementById(detailId);

    if (detailElement) {
      // Delay to allow any CSS animations to complete
      setTimeout(() => {
        // Get the bounding rectangle of the detail container
        const detailRect = detailElement.getBoundingClientRect();

        // Calculate the scroll position to center the detail on screen, then adjust by a fixed offset
        // Subtract a fixed number (e.g., 50 pixels) to move the scrolled position up a bit
        const offset = 50; // Adjust this value as needed to move the position higher
        const scrollPosition = detailRect.top + window.pageYOffset - (window.innerHeight / 2) + (detailRect.height / 2) - offset;

        // Scroll the window to the new position
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }, 300); // Match this delay with the duration of your CSS transitions
    }
  });
});

// document.querySelectorAll('.close-btn').forEach(btn => {
//   btn.addEventListener('click', function() {
//     const targetId = this.getAttribute('data-target');
//     const serviceItem = document.getElementById(targetId);

//     if (serviceItem) {
//       const detailElement = serviceItem.querySelector('.service-detail');
//       if (detailElement) {
//         detailElement.classList.remove('active');
//       }

//       // Get the bounding rectangle of the service item
//       const serviceItemRect = serviceItem.getBoundingClientRect();

//       // Check if the service item is fully in the viewport
//       const isFullyVisible = serviceItemRect.top >= 0 && serviceItemRect.bottom <= window.innerHeight;

//       // Only scroll if the service item is not fully visible
//       if (!isFullyVisible) {
//         // Calculate the position to scroll to the service item
//         // This will be the top of the service item minus half the window height plus half the height of the service item
//         // to center it in the viewport
//         const scrollPosition = window.pageYOffset + serviceItemRect.top - (window.innerHeight / 2) + (serviceItemRect.height / 2);

//         window.scrollTo({
//           top: scrollPosition,
//           behavior: 'smooth'
//         });
//       }
//     }
//   });
// });
