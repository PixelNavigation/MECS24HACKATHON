const categories = [
    "All",
    "Building & Construction",
    "Electronics & Electrical",
    "Drugs & Pharma",
    "Industrial Machinery",
    "Industrial Supplies",
    "Food & Vegetables"
];

const products = [
    { name: "Fresh Tomatoes", price: 220, image: "/api/placeholder/150/150", category: "Food & Vegetables" },
    { name: "Organic Carrots", price: 150, image: "/api/placeholder/150/150", category: "Food & Vegetables" },
    { name: "Local Honey", price: 450, image: "/api/placeholder/150/150", category: "Food & Vegetables" },
    { name: "Cement", price: 350, image: "/api/placeholder/150/150", category: "Building & Construction" },
    { name: "LED Bulbs", price: 180, image: "/api/placeholder/150/150", category: "Electronics & Electrical" },
    { name: "Paracetamol", price: 50, image: "/api/placeholder/150/150", category: "Drugs & Pharma" },
    { name: "Industrial Mixer", price: 15000, image: "/api/placeholder/150/150", category: "Industrial Machinery" },
    { name: "Safety Gloves", price: 120, image: "/api/placeholder/150/150", category: "Industrial Supplies" },
];

const services = [
    { name: "Gardening Service", price: 1900, image: "/api/placeholder/150/150" },
    { name: "Local Delivery", price: 750, image: "/api/placeholder/150/150" },
    { name: "Lawn Mowing", price: 2250, image: "/api/placeholder/150/150" },
];

let cart = [];
let currentCategory = "All";

function showProducts() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '<h2>Available Products</h2>';

    // Add category bar
    const categoryBar = document.createElement('div');
    categoryBar.className = 'category-bar';
    categories.forEach(category => {
        const categoryItem = document.createElement('span');
        categoryItem.className = `category-item ${category === currentCategory ? 'active' : ''}`;
        categoryItem.textContent = category;
        categoryItem.onclick = () => filterProducts(category);
        categoryBar.appendChild(categoryItem);
    });
    mainContent.appendChild(categoryBar);

    const productList = document.createElement('div');
    productList.className = 'product-list';
    mainContent.appendChild(productList);

    filterProducts(currentCategory);
}

function filterProducts(category) {
    currentCategory = category;
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';

    const filteredProducts = category === "All" ?
        products :
        products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });

    // Update active category in the category bar
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.toggle('active', item.textContent === category);
    });
}

// The rest of the JavaScript functions remain the same

// Initialize the page with product listings
document.addEventListener('DOMContentLoaded', showProducts);

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('login-modal')) {
        closeModal();
    }
}