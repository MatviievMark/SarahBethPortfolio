



document.addEventListener('DOMContentLoaded', function() {
    const calendarData = [
        { week: 1, dates: "Aug. 21-25", special: false },
        { week: 2, dates: "Aug. 28-Sept. 1", special: false },
        { week: "Special", dates: "Labor Day: Sep. 4", special: true },
        { week: 3, dates: "Sept. 5-8", special: false },
        { week: 4, dates: "Sept. 11-15", special: false },
        { week: 5, dates: "Sept. 18-22", special: false },
        { week: 6, dates: "Sept. 25-29", special: false },
        { week: "Special", dates: "Performance Opportunity: Sept. 30", special: true },
        { week: 7, dates: "Oct. 2-6", special: false },
        { week: 8, dates: "Oct. 9-13", special: false },
        { week: 9, dates: "Oct. 16-20", special: false },
        { week: 10, dates: "Oct. 23-27", special: false },
        { week: 11, dates: "Oct. 30-Nov. 3", special: false },
        { week: "Special", dates: "Performance Opportunity: Nov. 4", special: true },
        { week: 12, dates: "Nov. 6-10", special: false },
        { week: 13, dates: "Nov. 13-17", special: false },
        { week: "Special", dates: "Thanksgiving Break: Nov. 20-24", special: true },
        { week: 14, dates: "Nov. 27-Dec. 1", special: false },
        { week: 15, dates: "Dec. 4-8", special: false },
        { week: "Special", dates: "Makeup Lessons: Dec. 11-15", special: true },
        { week: "Special", dates: "Christmas Break: Dec. 16-31", special: true },
        { week: "Special", dates: "New Year's Break: Jan. 1-7", special: true },
        { week: 16, dates: "Jan. 8-12", special: false },
        { week: "Special", dates: "MLK Day: Jan. 15", special: true },
        { week: 17, dates: "Jan. 16-19", special: false },
        { week: 18, dates: "Jan. 22-26", special: false },
        // ... Continue for all weeks and special days for the Spring Semester
        { week: "Special", dates: "Spring Break: Mar. 11-17", special: true },
        { week: "Special", dates: "Easter Holiday: Mar. 29-Apr. 1", special: true },
        // ... Continue until the end of the Spring Semester
        { week: "Special", dates: "Makeup Lesson: Apr. 29-30", special: true },
    ];

    const calendarElement = document.getElementById('calendar');
    calendarData.forEach(item => {
        const weekElement = document.createElement('div');
        weekElement.className = item.special ? 'week special' : 'week';
        weekElement.innerHTML = `<h2>${item.special ? item.dates : 'Week ' + item.week + ': ' + item.dates}</h2>`;
        calendarElement.appendChild(weekElement);
    });
});




document.addEventListener('DOMContentLoaded', function() {
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

    // Call the function to match heights
    matchHeights();
});