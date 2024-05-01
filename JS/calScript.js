document.addEventListener('DOMContentLoaded', function() {
  fetch('content-manager/calendar.json')
    .then(response => response.json())
    .then(calendarData => {
      const calendarElement = document.getElementById('calendar');
      calendarData.forEach(item => {
        const weekElement = document.createElement('div');
        weekElement.className = item.special ? 'week special' : 'week';
        weekElement.innerHTML = `<h2>${item.special ? item.dates : 'Week ' + item.week + ': ' + item.dates}</h2>`;
        calendarElement.appendChild(weekElement);
      });

      // Function to set the height of the calendar based on the registration form's height
      function matchHeights() {
        var registrationForm = document.getElementById('registrationForm');
        var calendar = document.getElementById('calendar');

        // Get the height of the registration form
        var formHeight = registrationForm.offsetHeight;
        console.log(formHeight);

        // Set the calendar's height to match the registration form's height
        calendar.style.height = formHeight + 'px';
      }

      // Check if the device is not mobile (e.g., screen width is 768px or more)
      if (window.innerWidth >= 768) {
        // Call the function to match heights only if not on a mobile display
        matchHeights();
      } else {
        // Remove the fixed height for mobile devices
        calendarElement.style.height = 'auto';
      }
    })
    .catch(error => {
      console.log('Error fetching calendar data:', error);
    });
});