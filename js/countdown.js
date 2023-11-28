// Get the countdown display elements
var daysDisplay = document.getElementById('days');
var hoursDisplay = document.getElementById('hours');
var minutesDisplay = document.getElementById('minutes');
var secondsDisplay = document.getElementById('seconds');

// Function to calculate the remaining time until the 30th of the current month
function calculateTimeRemaining() {
    var now = new Date();
    var endOfMonth = new Date(now.getFullYear(), now.getMonth(), 30);

    // Calculate the difference in milliseconds
    var difference = endOfMonth - now;

    // Convert to days, hours, minutes, and seconds
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Return the results
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

// Function to update the countdown display
function updateCountdown() {
    var timeRemaining = calculateTimeRemaining();

    // Update the display elements
    daysDisplay.textContent = timeRemaining.days;
    hoursDisplay.textContent = timeRemaining.hours;
    minutesDisplay.textContent = timeRemaining.minutes;
    secondsDisplay.textContent = timeRemaining.seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);