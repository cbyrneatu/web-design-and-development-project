const products = [
	{
		id: "cpu",
		name: "CPU",
		description: "Upgrade your computer with this really fast CPU!",
		image: "images/cpu.png"
	},
	{
		id: "speakers",
		name: "Speakers",
		description: "Improve your sound quality with these high-quality speakers.",
		image: "images/speakers.png"
	},
	{
		id: "keyboard",
		name: "Keyboard",
		description: "This keyboard provides comfort and productivity.",
		image: "images/keyboard.png",
	},
	{
		id: "mouse",
		name: "Mouse",
		description: "Enhance your productivity with this ergonomic mouse.",
		image: "images/mouse.png"
	},
	{
		id: "headphones",
		name: "Headphones",
		description: "Listen to music without disturbing others around you!",
		image: "images/headphones.png"
	},
	{
		id: "graphics-card",
		name: "Graphics Card",
		description: "Play performance-intensive games with this graphics card.",
		image: "images/graphics-card.png"
	},
];


function createProductCard(product) {
	const container = document.createElement("div");
	container.className = "col";

	const card = document.createElement("div");
	card.className = "card";

	const body = document.createElement("div");
	body.className = "card-body";

	const image = document.createElement("img");
	image.src = product.image;
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
