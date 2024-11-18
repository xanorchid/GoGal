/*-----------------page 1---------------*/
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

// JavaScript to handle the location sharing toggle
document.addEventListener('DOMContentLoaded', function() {
    const locationSharingToggle = document.getElementById('locationSharing');

    locationSharingToggle.addEventListener('change', function() {
        if (this.checked) {
            console.log('Location sharing is ON');
            // Add your logic to enable location sharing
        } else {
            console.log('Location sharing is OFF');
            // Add your logic to disable location sharing
        }
    });
});