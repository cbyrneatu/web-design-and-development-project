const USERNAME = "my-username";
const PASSWORD = "password123";

const form = document.getElementById("login-form");
const error = document.getElementById("error");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Redirect the user to the requested page, or the user details page if no page was specified.
function redirect() {
    // If the redirect-to query parameter is set, redirect to that instead of the user details page.
    // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
    const urlParams = new URLSearchParams(window.location.search);
    const redirectTo = urlParams.get("redirect-to");
    if (redirectTo) {
        window.location.replace(redirectTo);
    } else {
        window.location.replace("user-details.html");
    }
}

// If the user is already logged in, redirect them to where they need to go.
function redirectIfLoggedIn() {
    const username = getUserData().username;
    if (username) {
        redirect();
    }
}

// Handles the submit button being pressed on the main form.
function handleLoginFormSubmit(event) {
    // Clear the error if it exists.
    error.textContent = "";

    // Stops the page from reloading when the form is submitted.
    event.preventDefault();

    if (usernameInput.value != USERNAME || passwordInput.value != PASSWORD) {
        error.textContent = "Invalid username or password.";
        return;
    }

    const userData = getUserData();
    userData.username = USERNAME;

    // Only fill in a default address if the user didn't change it before.
    if (!userData.address) {
        userData.address = { line1: "My House", line2: "My Village", city: "Athlone", county: "Westmeath", eircode: "N37 R600" };
    }

    saveUserData(userData);
    redirect();
}

redirectIfLoggedIn();

form.onsubmit = handleLoginFormSubmit;
