# 🛒 Multi-Category Online Store Web App

This is a fully functional, responsive e-commerce web application built using only **HTML**, **CSS**, and **JavaScript** (no frameworks). It includes multiple product categories, shopping cart, wishlist, payment simulation, and order history functionality.

---

## 📦 Features

### 🏠 Homepage
- Clean and modern UI
- Displays product categories:
  - Fruits (formerly Groceries)
  - Electronics
  - Clothes
  - Vegetables
- Search bar and category filter

### 📄 Product Listing Page
Each product includes:
- Image
- Name/description
- Price
- “Add to Cart” button
- “Buy Now” button
- “Add to Wishlist” button

### 🛒 Cart Page
- View added items
- Update quantity or remove items
- View total cost

### ❤️ Wishlist Page
- View saved products
- Remove items from wishlist

### 💳 Payment Page
- Simulated checkout experience
- Collects: Name, Phone Number, Address
- Order total is displayed
- Payment summary on confirmation page

### 📜 Order History Page
- Shows list of previous orders (stored in `localStorage`)
- Includes customer info and order details

### 📱 Responsive Design
- Fully responsive for desktop and mobile
- Styled with clean, user-friendly layout

---

## 🗂 Project Structure

```bash
project/
│
├── index.html            # Homepage with categories
├── products.html         # Product listing page
├── cart.html             # Shopping cart page
├── wishlist.html         # Wishlist page
├── payment.html          # Simulated payment form
├── confirmation.html     # Confirmation page after payment
├── orders.html           # Order history page
│
├── style.css             # Global styles
└── script.js             # All dynamic functionality
