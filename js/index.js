const popular = document.getElementById("popular");

function showPopularProduct() {
    const product = products[0];
    const card = createProductCard(product);
    card.style.maxWidth = "300px";
    popular.appendChild(card);
}

showPopularProduct();