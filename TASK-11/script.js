const products = [
  { id: 1, name: "Headphones", price: 999, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Shoes", price: 1999, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Watch", price: 1499, image: "https://via.placeholder.com/200" }
];

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display products
function displayProducts() {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${p.image}" width="100%">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;

    container.appendChild(div);
  });
}

// Add to cart
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

// Display cart
function displayCart() {
  const container = document.getElementById("cart");
  const totalEl = document.getElementById("total");

  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;

    container.appendChild(div);
  });

  totalEl.textContent = "Total: ₹" + total;
}

// Remove item
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Run on home page
displayProducts();