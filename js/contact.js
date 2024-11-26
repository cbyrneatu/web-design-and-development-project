const root = document.getElementById("root");

function addBannerIfSubmitted() {
	// The form has been submitted if there is more than 0 parameters in the URL.
	const urlParams = new URLSearchParams(window.location.search);
	if (urlParams.size === 0) {
		return;
	}

	const banner = document.createElement("div");
	banner.className = "alert alert-success mb-4";
	banner.role = "alert";
	banner.textContent = "Thanks for your feedback! We will get back to you soon.";

	root.appendChild(banner);
}

addBannerIfSubmitted();
