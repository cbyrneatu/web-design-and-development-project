const productsArea = document.getElementById("products-area");

function insertProducts() {
	for (const product of products) {
		const card = createProductCard(product);
		productsArea.appendChild(card);
	}
}

function createProductCard(product) {
	const container = document.createElement("div");
	container.className = "col";

	const card = document.createElement("div");
	card.className = "card";

	const body = document.createElement("div");
	body.className = "card-body";

	const image = document.createElement("img");
	image.src = "https://placehold.co/600x400";
	image.className = "card-img-top";

	const title = document.createElement("h5");
	title.textContent = product.name;

	const description = document.createElement("p");
	description.textContent = product.description;

	const button = document.createElement("button");
	button.className = "btn btn-primary w-100";
	button.textContent = "Add to Cart";
	button.onclick = () => addProductToCart(product.id);

	body.appendChild(title);
	body.appendChild(description);
	body.appendChild(button);
	card.appendChild(image);
	card.appendChild(body);
	container.appendChild(card);

	return container;
}

insertProducts();
