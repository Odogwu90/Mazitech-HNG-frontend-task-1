document.addEventListener('DOMContentLoaded', function() {
    // Function to update the clock every second
    function updateClock() {
        const now = new Date();
        const options = { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
        const formattedTime = now.toLocaleTimeString('en-US', options);
        document.getElementById('utcTime').textContent = formattedTime;
    }

    // Call the function to update the clock immediately
    updateClock();

    // Update the clock every second
    setInterval(updateClock, 1000);
});
