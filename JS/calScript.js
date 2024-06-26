document.addEventListener('DOMContentLoaded', function() {
  fetch('content-manager/calendar.json')
    .then(response => response.json())
    .then(calendarData => {
      const calendarElement = document.getElementById('calendar');
      // Expend button for mobile view
      if (window.innerWidth < 768) {
        const expandButton = document.createElement('button');
        expandButton.textContent = 'Expand Calendar';
        expandButton.className = 'expand-button';
        expandButton.addEventListener('click', function() {
          window.location.href = 'calBig.html';
        });
        calendarElement.insertBefore(expandButton, calendarElement.firstChild);
      }


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
      }
    })
    .catch(error => {
      console.log('Error fetching calendar data:', error);
    });
});