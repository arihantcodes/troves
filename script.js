// Get references to the login button and login form
const loginButton = document.getElementById("loginButton");
const loginForm = document.getElementById("loginForm");

// Add an event listener to show/hide the login form when the button is clicked
loginButton.addEventListener("click", function() {
    if (loginForm.style.display === "none" || loginForm.style.display === "") {
        loginForm.style.display = "block";
    } else {
        loginForm.style.display = "none";
    }
});

// Handle the form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password match the credentials you want
    if (username === 'admin' && password === 'admin') {
        // If login is successful, you can redirect the user to a new page or perform other actions
        window.open('https://www.youtube.com/', '_blank');
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
