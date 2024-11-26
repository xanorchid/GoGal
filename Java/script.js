/*-----------------register Page---------------*/
    document.getElementById('registerBtn').addEventListener('click', function() {
        // Redirect to registration page
        window.location.href = 'register.html'; // Change to your registration page URL
    });

    document.getElementById('loginBtn').addEventListener('click', function() {
        // Redirect to login page
        window.location.href = 'login.html'; // Change to your login page URL
    });


/*------------ Log in Page-------------- */
    document.getElementById('loginBtn').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic validation (you can enhance this)
        if (username === '' || password === '') {
            alert('Please fill in both fields.');
            return;
        }

        // Simulate a login process (replace with actual login logic)
        console.log('Logging in with:', username, password);
        alert('Logged in successfully!'); // Replace with actual login handling
        // Redirect to a different page or perform login action
        // window.location.href = 'home.html'; // Uncomment and replace with your home page URL
    });
    

/*----------profile page-----------*/
document.getElementById('editProfileBtn').addEventListener('click', function() {
    // Redirect to edit profile page or open a modal
    alert('Redirecting to edit profile page...'); // Replace with actual logic
    // window.location.href = 'edit-profile.html'; // Uncomment and replace with your edit profile page URL
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    // Log out logic
    alert('Logging out...'); // Replace with actual logout handling
    // window.location.href = 'login.html'; // Uncomment and replace with your login page URL
});
// JavaScript to handle location sharing
document.addEventListener('DOMContentLoaded', function() {
    const locationSharingToggle = document.getElementById('locationSharing');
    const getLocationBtn = document.getElementById('getLocationBtn');
    const locationDisplay = document.getElementById('locationDisplay');

    // Function to get the user's location
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            locationDisplay.textContent = "Geolocation is not supported by this browser.";
        }
    }

    // Function to display the location
    function showPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        locationDisplay.textContent = `Latitude: ${lat}, Longitude: ${lon}`;
    }

    // Function to handle errors
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                locationDisplay.textContent = "User  denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                locationDisplay.textContent = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                locationDisplay.textContent = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                locationDisplay.textContent = "An unknown error occurred.";
                break;
        }
    }

    // Event listener for the toggle switch
    locationSharingToggle.addEventListener('change', function() {
        if (this.checked) {
            getLocationBtn
