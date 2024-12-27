const usernameElement = document.getElementById("username");
const logoutBtn = document.getElementById("logout");
const addressForm = document.getElementById("address-form");

// If the user is not logged in, redirect them back to the homepage.
function redirectIfNotLoggedIn() {
    const username = getUserData().username;
    if (!username) {
        document.location.replace("index.html");
    }
}

function logout() {
    const data = getUserData();
    data.username = null;
    saveUserData(data);

    document.location.replace("login.html");
}

function fillInUserDetails() {
    const data = getUserData();
    usernameElement.textContent = data.username;

    const line1 = document.getElementById("line1");
    line1.value = data.address.line1;

    const line2 = document.getElementById("line2");
    line2.value = data.address.line2;

    const city = document.getElementById("city");
    city.value = data.address.city;

    const county = document.getElementById("county");
    county.value = data.address.county;

    const eircode = document.getElementById("eircode");
    eircode.value = data.address.eircode;
}

function updateAddress(event) {
    event.preventDefault();

    const userData = getUserData();

    const line1 = document.getElementById("line1").value;
    const line2 = document.getElementById("line2").value;
    const city = document.getElementById("city").value;
    const county = document.getElementById("county").value;
    const eircode = document.getElementById("eircode").value;

    userData.address = { line1: line1, line2: line2, city: city, county: county, eircode: eircode };
    saveUserData(userData);
}

logoutBtn.addEventListener("click", logout);
addressForm.onsubmit = updateAddress;

fillInUserDetails();
redirectIfNotLoggedIn();
