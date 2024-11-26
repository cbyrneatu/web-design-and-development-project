const cartItemCount = document.getElementById("cart-item-count");

/**
 * Updates the cart item count element with the amount of items saved in the user's cart.
 */
function showCartItemCount(userData) {
	// For reference, the user's cart is structured like this:
	// { cart: { product_id: amount } }
	let itemsInCart = 0;

	// NOTE: The `in` will iterate over each key (product ID) within the cart object:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
	// It kinda looks like I'm trying to use `cart` as an array, but that would be `of` :)
	for (const product in userData.cart) {
		itemsInCart += userData.cart[product];
	}

	if (itemsInCart === 0) {
		// Instead of showing 0, just hide the badge.
		cartItemCount.textContent = "";
		return;
	}

	cartItemCount.textContent = itemsInCart;
}

/**
 * Adds a product ID to the user's cart.
 */
function addProductToCart(productId) {
	const userData = getUserData();

	// If this item is already in the cart, we can just increment the amount.
	if (userData.cart[productId]) {
		userData.cart[productId] += 1;
	} else {
		// Otherwise, we must set its value to one.
		// I tried doing just `userData.cart[productId] += 1;` in both cases, but it behaved weirdly by setting
		// the value to `null` in the first case, just a weird JavaScript quirk I think.
		userData.cart[productId] = 1;
	}

	saveUserData(userData);
}

/**
 * Removes a product from the user's cart.
 */
function removeProductFromCart(productId) {
	const userData = getUserData();

	// If there is no items for this product ID in the cart, there's nothing to do.
	if (!userData.cart[productId]) {
		return;
	}

	// If there is only one item in the cart, we can remove the product from the cart
	// entirely.
	if (userData.cart[productId] === 1) {
		// Using `delete` will remove the key from the object entirely, setting it to null
		// keeps the key around, which is *fine* but makes it harder to debug when looking at it in the
		// browser.
		delete userData.cart[productId];
	} else {
		// Otherwise, we can just decrease the quantity by one.
		userData.cart[productId] -= 1;
	}

	saveUserData(userData);
}

// Call the showCartItemCount function whenever the user's data is changed.
onUserDataChanged(showCartItemCount);

// Call the showCartItemCount function now with the current user data.
showCartItemCount(getUserData());
