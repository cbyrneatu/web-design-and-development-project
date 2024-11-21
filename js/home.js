"use strict";

const products = [
    {
        id: "item-1",
        name: "Item 1",
        description: "This item is really good and you should buy it right now!"
    },
    {
        id: "item-2",
        name: "Item 2",
        description: "This item is really good and you should buy it right now!"
    },
    {
        id: "item-3",
        name: "Item 3",
        description: "This item is really good and you should buy it right now!"
    },
    {
        id: "item-4",
        name: "Item 4",
        description: "This item is really good and you should buy it right now!"
    },
    {
        id: "item-5",
        name: "Item 5",
        description: "This item is really good and you should buy it right now!"
    },
    {
        id: "item-6",
        name: "Item 6",
        description: "This item is really good and you should buy it right now!"
    }
]

const productsArea = document.getElementById("products-area");

function insertProducts() {
    for (const product of products) {
        const container = document.createElement("div");
        container.className = "col"

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

        body.appendChild(title);
        body.appendChild(description);
        card.appendChild(image);
        card.appendChild(body);
        container.appendChild(card);

        productsArea.appendChild(container);
    }
}

insertProducts();
