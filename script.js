const products = [
    { name: "Fresh Tomatoes", price: 220, image: "https://3.imimg.com/data3/LB/JO/MY-3164894/227-large-250x250.jpg", category: "Vegetables & Fruits", store: "Green Grocers", contact: "+1234567890" },
    { name: "Organic Carrots", price: 150, image: "https://5.imimg.com/data5/SELLER/Default/2024/2/393404157/AB/XV/IV/51509864/fresh-organic-carrot-250x250.jpg", category: "Vegetables & Fruits", store: "Organic Farms", contact: "+1234567891" },
    { name: "Local Honey", price: 450, image: "https://5.imimg.com/data5/ANDROID/Default/2021/1/HG/LW/VV/40227165/product-jpeg-250x250.jpg", category: "Vegetables & Fruits", store: "Bee's Knees", contact: "+1234567892" },
    { name: "Hammer", price: 300, image: "https://5.imimg.com/data5/SELLER/Default/2023/11/363703407/ZG/OJ/CF/202646930/gi-claw-hammer-250x250.jpg", category: "Building & Construction", store: "ToolTime", contact: "+1234567893" },
    { name: "Smartphone", price: 15000, image: "https://5.imimg.com/data5/SELLER/Default/2024/7/435602320/BY/DP/DN/22035967/z4-golden-2-1-250x250.jpg", category: "Electronics & Electrical", store: "TechZone", contact: "+1234567894" },
    { name: "Paracetamol", price: 50, image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438555690/CZ/UF/EZ/10195860/evlop-650-paracetamol-650mg-tablets-250x250.png", category: "Drugs & Pharma", store: "HealthFirst", contact: "+1234567895" },
    { name: "Drill Machine", price: 5000, image: "https://5.imimg.com/data5/SELLER/Default/2022/3/EQ/LI/HS/46704934/20mm-cap-15-inch-center-drilling-machine-250x250.jpg", category: "Industrial Machinery", store: "PowerTools", contact: "+1234567896" },
    { name: "Safety Gloves", price: 200, image: "https://5.imimg.com/data5/SK/MU/MY-61395391/hand-gloves-250x250.jpg", category: "Industrial Supplies", store: "SafetyFirst", contact: "+1234567897" },
    { name: "Organic Apples", price: 180, image: "https://5.imimg.com/data5/SELLER/Default/2023/6/319892274/SN/ER/LW/136548335/kashmiri-apple-250x250.jpg", category: "Vegetables & Fruits", store: "Farmer's Market", contact: "+1987654321" },
    { name: "Whole Wheat Bread", price: 150, image: "https://5.imimg.com/data5/SELLER/Default/2024/2/389429535/HQ/SK/AC/1088776/loose-multigrain-bread-250x250.jpg", category: "Bakery", store: "Sunshine Bakery", contact: "+1122334455" },
    { name: "Free-range Eggs", price: 300, image: "https://5.imimg.com/data5/SELLER/Default/2022/4/RU/HX/WN/31816657/kadaknath-hatching-eggs-250x250.jpg", category: "Dairy & Eggs", store: "Happy Hens Farm", contact: "+1654987320" },
    { name: "Extra Virgin Olive Oil", price: 450, image: "https://5.imimg.com/data5/SELLER/Default/2021/11/CR/ZJ/YC/25828906/olivko-kids-olive-oil-250x250.jpeg", category: "Cooking Essentials", store: "Gourmet Grocers", contact: "+1765432198" },
    { name: " Salmon", price: 800, image: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJmcm9udGlmeS1maW5kZXIifSwicGF0aCI6ImloaC1oZWFsdGhjYXJlLWJlcmhhZFwvZmlsZVwvSGhleHdSaUVCYWJ0b1dFRWpUM1EuanBnIn0:ihh-healthcare-berhad:6Zk6UuetaajSDB-43bdLAoamTKKBCqQFMfjY38nWPbk?format=webp", category: "Seafood", store: "Ocean's Best", contact: "+1876543210" },
    { name: "Organic Spinach", price: 120, image: "https://5.imimg.com/data5/SELLER/Default/2024/5/423123207/CA/EQ/JN/220126434/fresh-normal-spinach-250x250.jpeg", category: "Vegetables & Fruits", store: "Green Grocers", contact: "+1234567890" },
    { name: "Greek Yogurt", price: 280, image: "https://5.imimg.com/data5/SELLER/Default/2023/7/325313717/WW/PV/IF/37746808/whatsapp-image-2023-07-14-at-3-10-44-pm-250x250.jpeg", category: "Dairy & Eggs", store: "Dairy Delights", contact: "+1456789012" },
    { name: "Roasted Almonds", price: 400, image: "https://5.imimg.com/data5/ANDROID/Default/2024/5/419170542/PP/NX/XC/61462851/product-jpeg-250x250.jpg", category: "Snacks", store: "Nut House", contact: "+1567890123" },
    { name: "Honey", price: 350, image: "https://5.imimg.com/data5/SELLER/Default/2022/9/UV/UI/NO/86964038/pure-natural-honey-250x250.jpg", category: "Condiments", store: "Bee's Knees Apiaries", contact: "+1678901234" },
    { name: "Avocado", price: 200, image: "https://5.imimg.com/data5/SELLER/Default/2024/7/435846883/ZP/ZA/AW/112080595/frozen-avocado-fruit-250x250.jpg", category: "Vegetables & Fruits", store: "Green Grocers", contact: "+1234567890" },
    { name: "Quinoa", price: 320, image: "https://5.imimg.com/data5/ANDROID/Default/2021/9/MZ/YE/NP/92331272/img-20210917-123943-jpg-250x250.jpg", category: "Grains", store: "Healthy Pantry", contact: "+1789012345" },
    { name: "Dark Chocolate", price: 250, image: "https://5.imimg.com/data5/PB/PE/ZB/GLADMIN-48480699/kg-chocolates-250x250.png", category: "Confectionery", store: "Sweet Treats", contact: "+1890123456" },
    { name: "Blueberries", price: 380, image: "https://5.imimg.com/data5/ANDROID/Default/2022/12/NU/PP/AM/97463469/product-jpeg-250x250.jpg", category: "Vegetables & Fruits", store: "Berry Good Farm", contact: "+1901234567" },
    { name: "Coconut Water", price: 180, image: "https://5.imimg.com/data5/SELLER/Default/2023/10/351429092/IJ/NV/EN/3234303/tender-coconut-water-250x250.png", category: "Beverages", store: "Tropical Drinks", contact: "+1012345678" },
    { name: "Goat Cheese", price: 420, image: "https://5.imimg.com/data5/ANDROID/Default/2021/10/RD/XB/XJ/121899387/product-jpeg-250x250.jpg", category: "Dairy & Eggs", store: "Cheese Paradise", contact: "+1123456789" },
    { name: "Sweet Potatoes", price: 160, image: "https://5.imimg.com/data5/ANDROID/Default/2024/1/374195681/YK/ZX/RN/193680421/product-jpeg-250x250.jpg", category: "Vegetables & Fruits", store: "Root Vegetable Co.", contact: "+1234567890" },
    { name: "Wild Rice", price: 290, image: "https://5.imimg.com/data5/SELLER/Default/2024/1/378587982/SS/IB/XO/197245260/dark-wild-rice-250x250.jpg", category: "Grains", store: "Healthy Pantry", contact: "+1789012345" },
    { name: "Organic Green Tea", price: 200, image: "https://5.imimg.com/data5/SELLER/Default/2022/12/RI/MW/TD/78528490/green-himalayan-premium-modified-250x250.png", category: "Beverages", store: "Tea Time", contact: "+1345678901" }
];

const services = [
    { name: "Gardening Service", price: 1900, image: "https://mltqyacicplq.i.optimole.com/w:1024/h:1024/q:mauto/f:avif/https://greenleaveslandscapes.in/wp-content/uploads/2022/02/gardening.jpg", store: "Green Thumb", contact: "+1234567898" },
    { name: "Local Delivery", price: 750, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScymRP5SPbveL8Y0u8RtSo4o_eDvfN2U1Liw&s", store: "QuickShip", contact: "+1234567899" },
    { name: "Lawn Mowing", price: 2250, image: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-mow-a-lawn-2023-hero.jpg", store: "Grass Masters", contact: "+1234567900" },
];

const categories = [
    "Building & Construction",
    "Electronics & Electrical",
    "Drugs & Pharma",
    "Industrial Machinery",
    "Industrial Supplies",
    "Vegetables & Fruits"
];

let cart = [];
let isLoggedIn = false;
let orders = [];
let currentPage = 'products';

const mainContent = document.getElementById('main-content');
const cartLink = document.getElementById('cart-link');
const trackingLink = document.getElementById('tracking-link');
const loginLink = document.getElementById('login-link');
const logoutLink = document.getElementById('logout-link');
const loginModal = document.getElementById('login-modal');
const navLinks = document.querySelectorAll('nav ul li a');

function createElementWithClass(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function createProductCard(item, isService = false) {
    const card = createElementWithClass('div', 'product-card');
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>₹${item.price.toFixed(2)}</p>
        <p>Store: ${item.store}</p>
        <p>Contact: ${item.contact}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">${isService ? 'Book Service' : 'Add to Cart'}</button>
    `;
    return card;
}

function getPhoneNumber(storeName, phoneNumber) {
    if (isLoggedIn) {
        showPhoneNumberPopup(storeName, phoneNumber);
    } else {
        alert('Please login to view the phone number');
        showLoginForm();
    }
}

function showPhoneNumberPopup(storeName, phoneNumber) {
    const popup = document.createElement('div');
    popup.className = 'phone-number-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h3>${storeName}</h3>
            <p>Phone: ${phoneNumber}</p>
            <button onclick="closePhoneNumberPopup()">Close</button>
        </div>
    `;
    document.body.appendChild(popup);
}

function closePhoneNumberPopup() {
    const popup = document.querySelector('.phone-number-popup');
    if (popup) {
        popup.remove();
    }
}

function updateNavigation() {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.id === `${currentPage}-link`) {
            link.classList.add('active');
        }
    });
}

function showProducts(category = null) {
    currentPage = 'products';
    updateNavigation();
    mainContent.innerHTML = '<h2>Available Products</h2>';

    const categoryList = createElementWithClass('div', 'category-list');
    const allCategoryItem = createElementWithClass('div', `category-item${category === null ? ' active' : ''}`);
    allCategoryItem.textContent = 'All';
    allCategoryItem.onclick = () => showProducts(null);
    categoryList.appendChild(allCategoryItem);

    categories.forEach(cat => {
        const categoryItem = createElementWithClass('div', `category-item${category === cat ? ' active' : ''}`);
        categoryItem.textContent = cat;
        categoryItem.onclick = () => showProducts(cat);
        categoryList.appendChild(categoryItem);
    });
    mainContent.appendChild(categoryList);

    const productList = createElementWithClass('div', 'product-list');
    products
        .filter(product => category === null || product.category === category)
        .forEach(product => productList.appendChild(createProductCard(product)));
    mainContent.appendChild(productList);
}

function showServices() {
    currentPage = 'services';
    updateNavigation();
    mainContent.innerHTML = '<h2>Available Services</h2>';
    const serviceList = createElementWithClass('div', 'product-list');
    services.forEach(service => serviceList.appendChild(createProductCard(service, true)));
    mainContent.appendChild(serviceList);
}

function showSellForm() {
    currentPage = 'sell';
    updateNavigation();
    mainContent.innerHTML = `
        <h2>Sell Item or Service</h2>
        <form id="sell-form" onsubmit="handleSellSubmit(event)">
            <input type="text" id="name" name="name" placeholder="Name" required>
            <select id="type" name="type" onchange="toggleCategoryField()" required>
                <option value="product">Product</option>
                <option value="service">Service</option>
            </select>
            <select id="category" name="category" required>
                ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
            </select>
            <input type="number" id="price" name="price" step="0.01" placeholder="Price (₹)" required>
            <textarea id="description" name="description" placeholder="Description" required></textarea>
            <input type="tel" id="contact" name="contact" placeholder="Contact Number" required>
            <input type="file" id="image" name="image" accept="image/*">
            <button type="submit">List Item/Service</button>
        </form>
    `;
}
function toggleCategoryField() {
    const type = document.getElementById('type').value;
    const categoryField = document.getElementById('category');
    categoryField.style.display = type === 'service' ? 'none' : 'block';
}

function handleSellSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const itemData = {
        name: form.name.value,
        type: form.type.value,
        category: form.category.value,
        price: parseFloat(form.price.value),
        description: form.description.value,
        contact: form.contact.value
    };
    
    const imageFile = form.image.files[0];
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            itemData.image = e.target.result;
            addNewItem(itemData);
        };
        reader.readAsDataURL(imageFile);
    } else {
        itemData.image = "/api/placeholder/150/150";
        addNewItem(itemData);
    }
}

function addNewItem(itemData) {
    if (itemData.type === 'product') {
        products.push({
            name: itemData.name,
            price: itemData.price,
            image: itemData.image,
            category: itemData.category,
            store: "User's Store",
            contact: itemData.contact
        });
    } else {
        services.push({
            name: itemData.name,
            price: itemData.price,
            image: itemData.image,
            store: "User's Service",
            contact: itemData.contact
        });
    }
    
    alert(`New ${itemData.type} listed: ${itemData.name} (${itemData.category || 'Service'}) for ₹${itemData.price}\nContact: ${itemData.contact}`);
    document.getElementById('sell-form').reset();
    if (itemData.type === 'product') {
        showProducts();
    } else {
        showServices();
    }
}

function handleSellSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const itemData = {
        name: form.name.value,
        type: form.type.value,
        category: form.category.value,
        price: parseFloat(form.price.value),
        description: form.description.value
    };
    
    const imageFile = form.image.files[0];
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            itemData.image = e.target.result;
            addNewItem(itemData);
        };
        reader.readAsDataURL(imageFile);
    } else {
        itemData.image = "/api/placeholder/150/150";
        addNewItem(itemData);
    }
}

function addToCart(name, price) {
    if (isLoggedIn) {
        cart.push({ name, price });
        alert(`${name} added to cart`);
    } else {
        alert('Please login to add items to cart');
        showLoginForm();
    }
}

function showCart() {
    currentPage = 'cart';
    updateNavigation();
    mainContent.innerHTML = '<h2>Your Cart</h2>';
    if (cart.length === 0) {
        mainContent.innerHTML += '<p>Your cart is empty</p>';
    } else {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        mainContent.innerHTML += `
            <ul>${cart.map(item => `<li>${item.name} - ₹${item.price.toFixed(2)}</li>`).join('')}</ul>
            <p>Total: ₹${total.toFixed(2)}</p>
            <div id="address-form">
                <h3>Delivery Address</h3>
                <textarea id="delivery-address" rows="4" placeholder="Enter your delivery address"></textarea>
            </div>
            <button onclick="checkout()">Checkout</button>
        `;
    }
}

function checkout() {
    const addressTextarea = document.getElementById('delivery-address');
    const address = addressTextarea ? addressTextarea.value.trim() : '';
    
    if (!address) {
        alert('Please enter a delivery address before checking out.');
        return;
    }

    const orderId = Math.floor(Math.random() * 1000000);
    const order = {
        id: orderId,
        items: [...cart],
        total: cart.reduce((sum, item) => sum + item.price, 0),
        status: 'Processing',
        address: address
    };
    orders.push(order);
    alert(`Thank you for your purchase! Your order ID is ${orderId}`);
    cart = [];
    showCart();
}


function showTracking() {
    currentPage = 'tracking';
    updateNavigation();
    mainContent.innerHTML = `
        <h2>Order Tracking</h2>
        <div class="tracking-container">
            <div class="tracking-form">
                <input type="text" id="order-number" placeholder="Order Number">
                <button onclick="trackOrder()">Track Order</button>
            </div>
            <div id="tracking-result"></div>
        </div>
    `;
    if (orders.length > 0) {
        const orderList = createElementWithClass('div', 'order-list');
        orders.forEach(order => {
            const orderItem = createElementWithClass('div', 'order-item');
            orderItem.innerHTML = `
                <h3>Order ID: ${order.id}</h3>
                <p>Total: ₹${order.total.toFixed(2)}</p>
                <p>Status: ${order.status}</p>
                <div class="order-progress">
                    <div class="progress-step ${order.status === 'Processing' ? 'active' : ''}">Processing</div>
                    <div class="progress-step ${order.status === 'Shipped' ? 'active' : ''}">Shipped</div>
                    <div class="progress-step ${order.status === 'Delivered' ? 'active' : ''}">Delivered</div>
                </div>
            `;
            orderList.appendChild(orderItem);
        });
        mainContent.querySelector('.tracking-container').appendChild(orderList);
    }
}

function trackOrder() {
    const orderNumber = document.getElementById('order-number').value;
    const order = orders.find(o => o.id == orderNumber);
    const resultDiv = document.getElementById('tracking-result');
    if (order) {
        resultDiv.innerHTML = `
            <div class="order-details">
                <h3>Order ${order.id}</h3>
                <p>Total: ₹${order.total.toFixed(2)}</p>
                <p>Status: ${order.status}</p>
                <div class="order-progress">
                    <div class="progress-step ${order.status === 'Processing' ? 'active' : ''}">Processing</div>
                    <div class="progress-step ${order.status === 'Shipped' ? 'active' : ''}">Shipped</div>
                    <div class="progress-step ${order.status === 'Delivered' ? 'active' : ''}">Delivered</div>
                </div>
                <h4>Items:</h4>
                <ul>${order.items.map(item => `<li>${item.name} - ₹${item.price.toFixed(2)}</li>`).join('')}</ul>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `<p class="error-message">No order found with ID ${orderNumber}</p>`;
    }
}

function search() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const results = [...products, ...services].filter(item => 
        item.name.toLowerCase().includes(searchTerm) || 
        (item.category && item.category.toLowerCase().includes(searchTerm))
    );

    mainContent.innerHTML = `<h2>Search Results for "${searchTerm}"</h2>`;
    const resultList = createElementWithClass('div', 'product-list');
    results.forEach(item => resultList.appendChild(createProductCard(item)));
    mainContent.appendChild(resultList);
}

function showLoginForm() {
    loginModal.style.display = 'block';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('create-account-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'none';
}

function closeModal() {
    loginModal.style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        isLoggedIn = true;
        cartLink.style.display = 'inline-block';
        trackingLink.style.display = 'inline-block';
        loginLink.style.display = 'none';
        logoutLink.style.display = 'inline-block';
        closeModal();
        alert('Login successful!');
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function showCreateAccount() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('create-account-form').style.display = 'block';
    document.getElementById('forgot-password-form').style.display = 'none';
}

function showForgotPassword() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('create-account-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'block';
}

function handleCreateAccount(event) {
    event.preventDefault();
    const username = document.getElementById('new-username').value;
    const email = document.getElementById('email').value;
    alert(`Account created for ${username} with email ${email}`);
    closeModal();
}

function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById('forgot-email').value;
    alert(`Password reset link sent to ${email}`);
    closeModal();
}

function logout() {
    isLoggedIn = false;
    cart = [];
    cartLink.style.display = 'none';
    trackingLink.style.display = 'none';
    loginLink.style.display = 'inline-block';
    logoutLink.style.display = 'none';
    showProducts();
    alert('You have been logged out.');
}

document.addEventListener('DOMContentLoaded', showProducts);
window.onclick = (event) => {
    if (event.target == loginModal) {
        closeModal();
    }
};

window.showProducts = showProducts;
window.showServices = showServices;
window.showSellForm = showSellForm;
window.showCart = showCart;
window.showTracking = showTracking;
window.showLoginForm = showLoginForm;
window.logout = logout;
window.search = search;
window.handleLogin = handleLogin;
window.handleCreateAccount = handleCreateAccount;
window.handleForgotPassword = handleForgotPassword;
window.showCreateAccount = showCreateAccount;
window.showForgotPassword = showForgotPassword;
window.closeModal = closeModal;
window.addToCart = addToCart;
window.checkout = checkout;
window.trackOrder = trackOrder;