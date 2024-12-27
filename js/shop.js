const productsArea = document.getElementById("products-area");

function insertProducts() {
	for (const product of products) {
		// createProductCard is from the products.js file.
		const card = createProductCard(product);
		productsArea.appendChild(card);
	}
}

insertProducts();
