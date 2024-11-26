/**
 * An array of callback functions to be called when the user data is updated.
 */
const userDataUpdateCallbacks = [];

/**
 * Reads the user's data from local storage, and returns null if the user is not logged in.
 */
function getUserData() {
	const data = localStorage.getItem("user-data");
	if (!data) {
		// If the user does not have any data in their local storage yet, we can just return
		// a default value.
		return { cart: {} };
	}

	return JSON.parse(data);
}

/**
 * Saves the user's data to the browser's local storage, and calls the update callbacks.
 */
function saveUserData(data) {
	const json = JSON.stringify(data);
	localStorage.setItem("user-data", json);

	// Call each one of the callback functions with the new data.
	for (const callback of userDataUpdateCallbacks) {
		callback(data);
	}
}

/**
 * Calls the callback function whenever the user data is changed.
 */
function onUserDataChanged(callback) {
	userDataUpdateCallbacks.push(callback);
}
