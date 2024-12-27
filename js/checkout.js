const cartItems = document.getElementById("cart-items");
const continueButton = document.getElementById("continue");

function insertCartItems() {
	// Clear the items in the cart container in-case they have already been populated.
	// (i.e. when updating the user's cart)
	cartItems.innerHTML = "";

	const cart = getUserData().cart;

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
	if (Object.keys(cart).length === 0) {
		// If there are no items in the cart, just add a message saying so.
		const message = document.createElement("p");
		message.textContent = "Your cart is empty! Go to the shop to add some items.";

		cartItems.appendChild(message);
		return;
	}

	continueButton.style.display = "inline-block";

	for (const productId in cart) {
		const card = createCartItemCard(productId, cart[productId]);
		cartItems.appendChild(card);
	}
}

function createCartItemCard(productId, quantity) {
	const product = products.find((it) => it.id === productId);

	const card = document.createElement("div");
	card.className = "card";

	const container = document.createElement("div");
	container.className = "row g-0 my-2";

	const imageContainer = document.createElement("div");
	imageContainer.className = "col";

	const image = document.createElement("img");
	image.src = "https://placehold.co/500x250";
	image.className = "img-fluid rounded";

	imageContainer.appendChild(image);

	const bodyContainer = document.createElement("div");
	bodyContainer.className = "col-md-8";

	const body = document.createElement("div");
	body.className = "card-body";

	const title = document.createElement("h5");
	title.textContent = product.name;

	const description = document.createElement("p");
	description.textContent = product.description;

	body.appendChild(title);
	body.appendChild(description);

	bodyContainer.appendChild(body);

	const actionsContainer = document.createElement("div");
	actionsContainer.className = "col-md-2 align-items-center row";

	const quantityContainer = document.createElement("div");
	quantityContainer.className = "input-group";

	const increaseButton = document.createElement("button");
	increaseButton.className = "btn btn-outline-secondary";
	increaseButton.textContent = "+";
	increaseButton.onclick = () => addProductToCart(productId);

	const quantityText = document.createElement("input");
	quantityText.type = "text";
	quantityText.className = "form-control border-secondary";
	quantityText.value = quantity;

	const decreaseButton = document.createElement("button");
	decreaseButton.className = "btn btn-outline-secondary";
	decreaseButton.textContent = "-";
	decreaseButton.onclick = () => removeProductFromCart(productId);

	quantityContainer.appendChild(increaseButton);
	quantityContainer.appendChild(quantityText);
	quantityContainer.appendChild(decreaseButton);

	actionsContainer.appendChild(quantityContainer);

	container.appendChild(imageContainer);
	container.appendChild(bodyContainer);
	container.appendChild(actionsContainer);

	card.appendChild(container);

	return card;
}

// Call the insertCartItems function whenever the user's data is changed.
onUserDataChanged(insertCartItems);

insertCartItems();
