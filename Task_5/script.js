const products = [
  // Fruits (previously groceries)
  { id: 1, name: "Apple", category: "fruits", price: 1.5, img: "apple.webp" },
  { id: 2, name: "Banana", category: "fruits", price: 0.5, img: "banana.jpeg" },
  { id: 3, name: "Orange", category: "fruits", price: 0.8, img: "orange.jpg" },
  { id: 4, name: "Mango", category: "fruits", price: 1.2, img: "mango.jpg" },
  { id: 5, name: "Grapes", category: "fruits", price: 2.0, img: "grapes.jpg" },
  { id: 6, name: "Kiwi", category: "fruits", price: 2.5, img: "kiwi.webp" },

  // Electronics
  { id: 11, name: "TV", category: "electronics", price: 300, img: "tv.jpg" },
  { id: 12, name: "Laptop", category: "electronics", price: 1200, img: "laptop.jpg" },
  { id: 13, name: "Smartphone", category: "electronics", price: 800, img: "phone.jpg" },
  { id: 14, name: "Headphones", category: "electronics", price: 150, img: "headphones.jpeg" },
  { id: 15, name: "Smartwatch", category: "electronics", price: 200, img: "watch.jpg" },
  { id: 16, name: "Tablet", category: "electronics", price: 400, img: "tablet.png" },

  // Clothes
  { id: 21, name: "T-Shirt", category: "clothes", price: 15, img: "t-shirt.jpg" },
  { id: 22, name: "Jeans", category: "clothes", price: 40, img: "jeans.webp" },
  { id: 23, name: "Jacket", category: "clothes", price: 60, img: "jacket.webp" },
  { id: 24, name: "Sweater", category: "clothes", price: 30, img: "sweater.jpg" },
  { id: 25, name: "Shorts", category: "clothes", price: 20, img: "shorts.jpeg" },
  { id: 26, name: "Cap", category: "clothes", price: 10, img: "cap.jpeg" },

  // Vegetables
  { id: 31, name: "Carrots", category: "vegetables", price: 2, img: "Carrot.webp" },
  { id: 32, name: "Tomatoes", category: "vegetables", price: 1.5, img: "tomato.jpg" },
  { id: 33, name: "Potatoes", category: "vegetables", price: 1.2, img: "potato.jpg" },
  { id: 34, name: "Onions", category: "vegetables", price: 1.0, img: "images.jpeg" },
  { id: 35, name: "Broccoli", category: "vegetables", price: 2.3, img: "bu.jpg" },
  { id: 36, name: "Cucumber", category: "vegetables", price: 1.7, img: "cucumber.jpg" }
];


let cart = [];
let wishlist = [];
let orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];

function displayProducts(filter = 'all') {
  document.getElementById("product-list").style.display = 'flex';
  document.getElementById("cart").style.display = 'none';
  document.getElementById("wishlist").style.display = 'none';
  document.getElementById("payment").style.display = 'none';
  document.getElementById("confirmation").style.display = 'none';

  const container = document.getElementById("product-list");
  container.innerHTML = "";
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  filtered.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.img}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="buyNow(${product.id})">Buy Now</button>
        <button onclick="toggleWishlist(${product.id})">❤ Wishlist</button>
      </div>`;
  });
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  updateCartCount();
}

function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(w => w !== id);
  } else {
    wishlist.push(id);
  }
  updateWishlistCount();
}

function showCart() {
  document.getElementById("product-list").style.display = 'none';
  document.getElementById("wishlist").style.display = 'none';
  document.getElementById("payment").style.display = 'none';
  document.getElementById("confirmation").style.display = 'none';

  const container = document.getElementById("cart");
  container.style.display = 'block';
  container.innerHTML = '<h2>Your Cart</h2>';

  if (!cart.length) return container.innerHTML += '<p>Cart is empty.</p>';

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    container.innerHTML += `
      <div>
        <strong>${item.name}</strong> x ${item.qty} = $${(item.price * item.qty).toFixed(2)}
        <button onclick="removeFromCart(${item.id})">Remove</button>
      </div>`;
  });
  container.innerHTML += `<p>Total: <strong>$${total.toFixed(2)}</strong></p>`;
  container.innerHTML += `<button onclick="proceedToPayment()">Proceed to Payment</button>`;
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartCount();
  showCart();
}

function showWishlist() {
  document.getElementById("product-list").style.display = 'none';
  document.getElementById("cart").style.display = 'none';
  document.getElementById("payment").style.display = 'none';
  document.getElementById("confirmation").style.display = 'none';

  const container = document.getElementById("wishlist");
  container.style.display = 'block';
  container.innerHTML = '<h2>Your Wishlist</h2>';

  if (!wishlist.length) return container.innerHTML += '<p>No items in wishlist.</p>';

  wishlist.forEach(id => {
    const p = products.find(prod => prod.id === id);
    container.innerHTML += `<p>${p.name} - $${p.price.toFixed(2)} <button onclick="addToCart(${id})">Add to Cart</button></p>`;
  });
}

function proceedToPayment() {
  document.getElementById("product-list").style.display = 'none';
  document.getElementById("cart").style.display = 'none';
  const container = document.getElementById("payment");
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.textAlign = 'center';

  let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  container.innerHTML = `
    <div style="background:#fff; padding:2em; border-radius:10px; max-width:400px; width:90%; box-shadow:0 0 10px rgba(0,0,0,0.1);">
      <h2>Payment Details</h2>
      <p><input id="cust-name" style="width: 100%; padding: 0.5em; margin: 0.5em 0;" placeholder="Full Name" required /></p>
      <p><input id="cust-phone" style="width: 100%; padding: 0.5em; margin: 0.5em 0;" placeholder="Phone Number" required /></p>
      <p><input id="cust-address" style="width: 100%; padding: 0.5em; margin: 0.5em 0;" placeholder="Shipping Address" required /></p>
      <p>Total Amount: <strong>$${total.toFixed(2)}</strong></p>
      <button onclick="completePayment()" style="padding: 0.75em 2em; margin-top: 1em; background: #333; color: white; border: none; cursor: pointer; border-radius: 5px;">Pay Now</button>
    </div>`;
}

function completePayment() {
  const name = document.getElementById("cust-name").value;
  const phone = document.getElementById("cust-phone").value;
  const address = document.getElementById("cust-address").value;
  if (!name || !phone || !address) {
    alert("Please fill out all fields.");
    return;
  }

  const order = {
    name,
    phone,
    address,
    items: [...cart],
    total: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    date: new Date().toLocaleString()
  };

  orderHistory.push(order);
  localStorage.setItem("orderHistory", JSON.stringify(orderHistory));

  cart = [];
  updateCartCount();
  document.getElementById("payment").style.display = 'none';
  const container = document.getElementById("confirmation");
  container.style.display = 'block';
  container.innerHTML = `
    <h2>Thank you for your purchase!</h2>
    <p>Order Summary:</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
    <button onclick="showOrderHistory()">View Order History</button>
  `;
}

function showOrderHistory() {
  const container = document.getElementById("confirmation");
  container.innerHTML = '<h2>Your Order History</h2>';
  if (!orderHistory.length) {
    container.innerHTML += '<p>No previous orders.</p>';
    return;
  }
  orderHistory.forEach(order => {
    container.innerHTML += `
      <div style="margin: 1em 0; padding: 1em; border: 1px solid #ccc; border-radius: 8px; background: #fff;">
        <p><strong>Date:</strong> ${order.date}</p>
        <p><strong>Name:</strong> ${order.name}</p>
        <p><strong>Phone:</strong> ${order.phone}</p>
        <p><strong>Address:</strong> ${order.address}</p>
        <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
        <p><strong>Items:</strong></p>
        <ul>
          ${order.items.map(item => `<li>${item.name} x ${item.qty} = $${(item.price * item.qty).toFixed(2)}</li>`).join('')}
        </ul>
      </div>`;
  });
}

function buyNow(id) {
  cart = [];
  addToCart(id);
  proceedToPayment();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateWishlistCount() {
  document.getElementById("wishlist-count").textContent = wishlist.length;
}

function filterCategory(category) {
  displayProducts(category);
}

displayProducts();
