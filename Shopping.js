let products = [
    { name: "Chair", price: 499, img: "https://via.placeholder.com/200" },
    { name: "Curtain", price: 999, img: "https://via.placeholder.com/200" },
    { name: "Carpet", price: 799, img: "https://via.placeholder.com/200" },
    { name: "Toy", price: 299, img: "https://via.placeholder.com/200" }
];

let container = document.getElementById("productContainer");

products.forEach(product => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price}</p>
        <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;

    container.appendChild(card);
});

function addToCart(name) {
    alert(name + " added to cart!");
}