// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('nav-menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');

        // Update active class
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Search Bar Toggle
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

if (searchIcon) {
    searchIcon.addEventListener('click', (e) => {
        e.preventDefault();
        searchBar.classList.toggle('active');
    });
}

// Product Data (30 products)
const products = [
    // 1-8: Original products (kept for continuity)
    {
        id: 1,
        name: 'Oversized Blazer',
        category: 'Women',
        price: 89.99,
        originalPrice: 129.99,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=436&q=80',
        badge: 'Sale'
    },
    {
        id: 2,
        name: 'Premium Hoodie',
        category: 'Men',
        price: 59.99,
        originalPrice: 89.99,
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
        badge: 'New'
    },
    {
        id: 3,
        name: 'Leather Tote Bag',
        category: 'Accessories',
        price: 129.99,
        originalPrice: 179.99,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=869&q=80',
        badge: null
    },
    {
        id: 4,
        name: 'Silk Midi Dress',
        category: 'Women',
        price: 79.99,
        originalPrice: 119.99,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=746&q=80',
        badge: 'Sale'
    },
    {
        id: 5,
        name: 'Denim Jacket',
        category: 'Men',
        price: 69.99,
        originalPrice: 99.99,
        image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=765&q=80',
        badge: 'New'
    },
    {
        id: 6,
        name: 'Gold Watch',
        category: 'Accessories',
        price: 199.99,
        originalPrice: 249.99,
        image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
        badge: null
    },
    {
        id: 7,
        name: 'Knit Sweater',
        category: 'Women',
        price: 49.99,
        originalPrice: 79.99,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
        badge: 'Sale'
    },
    {
        id: 8,
        name: 'Classic Sneakers',
        category: 'Men',
        price: 89.99,
        originalPrice: 119.99,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=812&q=80',
        badge: 'New'
    },
    // 9-16: Previously added new products
    {
        id: 9,
        name: 'Smart Watch Pro',
        category: 'Accessories',
        price: 249.99,
        originalPrice: 299.99,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80',
        badge: 'Hot'
    },
    {
        id: 10,
        name: 'Aviator Sunglasses',
        category: 'Accessories',
        price: 129.99,
        originalPrice: 159.99,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80',
        badge: null
    },
    {
        id: 11,
        name: 'Cashmere Scarf',
        category: 'Women',
        price: 45.99,
        originalPrice: 69.99,
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80',
        badge: 'Sale'
    },
    {
        id: 12,
        name: 'Leather Backpack',
        category: 'Accessories',
        price: 179.99,
        originalPrice: 229.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        badge: 'New'
    },
    {
        id: 13,
        name: 'Hiking Boots',
        category: 'Men',
        price: 119.99,
        originalPrice: 159.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        badge: null
    },
    {
        id: 14,
        name: 'Wireless Earbuds Pro',
        category: 'Tech Gadgets',
        price: 89.99,
        originalPrice: 129.99,
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        badge: 'Sale'
    },
    {
        id: 15,
        name: 'Puffer Jacket',
        category: 'Men',
        price: 149.99,
        originalPrice: 199.99,
        image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        badge: 'Limited'
    },
    {
        id: 16,
        name: 'Minimalist Backpack',
        category: 'Accessories',
        price: 89.99,
        originalPrice: 119.99,
        image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        badge: 'New'
    },
    // 17-30: Additional 14 products
    {
        id: 17,
        name: 'Cotton T-Shirt',
        category: 'Men',
        price: 24.99,
        originalPrice: 39.99,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80',
        badge: 'Sale'
    },
    {
        id: 18,
        name: 'Silk Scarf',
        category: 'Accessories',
        price: 34.99,
        originalPrice: 54.99,
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80',
        badge: null
    },
    {
        id: 19,
        name: 'Running Shoes',
        category: 'Men',
        price: 79.99,
        originalPrice: 119.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        badge: 'New'
    },
    {
        id: 20,
        name: 'Leather Wallet',
        category: 'Accessories',
        price: 39.99,
        originalPrice: 59.99,
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        badge: 'Sale'
    },
    {
        id: 21,
        name: 'Smart Home Hub',
        category: 'Tech Gadgets',
        price: 149.99,
        originalPrice: 199.99,
        image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        badge: 'Hot'
    },
    {
        id: 22,
        name: 'Hooded Sweatshirt',
        category: 'Men',
        price: 54.99,
        originalPrice: 79.99,
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
        badge: 'New'
    },
    {
        id: 23,
        name: 'Fashion Ring',
        category: 'Accessories',
        price: 29.99,
        originalPrice: 49.99,
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        badge: 'Hot'
    },
    {
        id: 24,
        name: 'Plaid Shirt',
        category: 'Men',
        price: 44.99,
        originalPrice: 69.99,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
        badge: null
    },
    {
        id: 25,
        name: 'High Heels',
        category: 'Women',
        price: 89.99,
        originalPrice: 129.99,
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80',
        badge: 'Sale'
    },
    {
        id: 26,
        name: 'Stainless Steel Water Bottle',
        category: 'Accessories',
        price: 24.99,
        originalPrice: 34.99,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        badge: null
    },
    {
        id: 27,
        name: 'Yoga Pants',
        category: 'Women',
        price: 49.99,
        originalPrice: 69.99,
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        badge: 'New'
    },
    {
        id: 28,
        name: 'Bluetooth Headphones',
        category: 'Accessories',
        price: 89.99,
        originalPrice: 129.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        badge: 'Hot'
    },
    {
        id: 29,
        name: 'Formal Shirt',
        category: 'Men',
        price: 59.99,
        originalPrice: 89.99,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
        badge: null
    },
    {
        id: 30,
        name: 'Sunglasses Case',
        category: 'Accessories',
        price: 14.99,
        originalPrice: 24.99,
        image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        badge: 'Sale'
    }
];

// Function to create product card
function createProductCard(product) {
    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

    return `
        <div class="product-card">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button class="action-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    <button class="action-btn" onclick="addToWishlist(${product.id})" title="Add to Wishlist">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-btn" onclick="quickView(${product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    $${product.price.toFixed(2)}
                    ${product.originalPrice ? `<del>$${product.originalPrice.toFixed(2)}</del>` : ''}
                </div>
                ${discount > 0 ? `<small style="color: #4caf50; display: block; margin-top: 5px;">Save ${discount}%</small>` : ''}
            </div>
        </div>
    `;
}

// Load products into grid
const productGrid = document.getElementById('productGrid');
if (productGrid) {
    productGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Cart and Wishlist Logic
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
const cartCountElement = document.querySelector('.cart-count');
const wishlistCountElement = document.querySelector('.wishlist-count');
const cartOverlay = document.getElementById('cartOverlay');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotalPrice = document.getElementById('cartTotalPrice');

function updateCartDisplay() {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        cartCountElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartCountElement.style.transform = 'scale(1)';
        }, 200);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCartItems();
}

function updateWishlistDisplay() {
    const totalItems = wishlistItems.length;
    if (wishlistCountElement) {
        wishlistCountElement.textContent = totalItems;
        wishlistCountElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            if (wishlistCountElement) wishlistCountElement.style.transform = 'scale(1)';
        }, 200);
    }
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    renderWishlistItems();
}

// Initialize counts
updateCartDisplay();
updateWishlistDisplay();

function toggleCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
    }
}

if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCartSidebar);
if (cartOverlay) cartOverlay.addEventListener('click', toggleCartSidebar);

function toggleWishlistSidebar() {
    const wishlistSidebar = document.getElementById('wishlistSidebar');
    const wishlistOverlay = document.getElementById('wishlistOverlay');
    if (wishlistSidebar && wishlistOverlay) {
        wishlistSidebar.classList.toggle('active');
        wishlistOverlay.classList.toggle('active');
    }
}

if (closeWishlistBtn) closeWishlistBtn.addEventListener('click', toggleWishlistSidebar);
if (wishlistOverlay) wishlistOverlay.addEventListener('click', toggleWishlistSidebar);
window.closeCheckout = function() {
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
        checkoutModal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.processCheckout = function () {
    if (cartItems.length === 0) {
        showNotification('Your cart is empty. Add some items first!', 'info');
        return;
    }

    // Close Cart Sidebar
    toggleCartSidebar();

    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutContent = document.getElementById('checkoutContent');
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

    const orderItemsHtml = cartItems.map(item => `
        <div class="checkout-item">
            <div style="display: flex; align-items: center;">
                <img src="${item.image}" alt="${item.name}">
                <div class="checkout-item-details">
                    <h4 style="margin:0; font-size: 1.05rem; color: var(--primary-color);">${item.name}</h4>
                    <small style="color: #666; font-size: 0.9rem;">Qty: ${item.quantity}</small>
                </div>
            </div>
            <div class="checkout-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
    `).join('');

    if (checkoutContent) {
        checkoutContent.innerHTML = `
            <div style="animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);">
                <h2 style="margin-bottom: 40px; font-size: 2.2rem; color: var(--primary-color);">Secure Checkout</h2>
                
                <div class="checkout-grid">
                    <div class="checkout-form-section">
                        <form id="checkoutForm" onsubmit="event.preventDefault(); placeOrder();">
                            <!-- Shipping Details -->
                            <div style="margin-bottom: 40px;">
                                <h4 style="font-size: 1.3rem; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px;">1. Shipping Information</h4>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                                    <input type="text" placeholder="First Name" required style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; outline: none; font-size: 1rem; font-family: inherit;">
                                    <input type="text" placeholder="Last Name" required style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; outline: none; font-size: 1rem; font-family: inherit;">
                                </div>
                                <input type="email" placeholder="Email Address" required style="width: 100%; padding: 14px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 8px; outline: none; font-size: 1rem; font-family: inherit;">
                                <input type="text" placeholder="Shipping Address" required style="width: 100%; padding: 14px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 8px; outline: none; font-size: 1rem; font-family: inherit;">
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                    <input type="text" placeholder="City" required style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; outline: none; font-size: 1rem; font-family: inherit;">
                                    <input type="text" placeholder="Zip Code" required style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; outline: none; font-size: 1rem; font-family: inherit;">
                                </div>
                            </div>

                            <!-- Payment Methods -->
                            <div style="margin-bottom: 40px;">
                                <h4 style="font-size: 1.3rem; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px;">2. Payment Method</h4>
                                
                                <label class="payment-option" style="display: flex; align-items: center; padding: 18px; border: 2px solid var(--secondary-color); border-radius: 10px; margin-bottom: 12px; cursor: pointer; transition: all 0.3s ease;">
                                    <input type="radio" name="payment" value="card" checked style="margin-right: 15px; transform: scale(1.2); cursor: pointer;" onchange="togglePaymentDetails('card')">
                                    <i class="fas fa-credit-card" style="margin-right: 15px; font-size: 1.5rem; color: var(--primary-color);"></i> 
                                    <span style="font-weight: 500; font-size: 1.1rem;">Credit / Debit Card</span>
                                </label>
                                
                                <!-- Card Details Farm -->
                                <div id="cardDetailsForm" style="margin-bottom: 25px; padding: 25px; background: #f9f9f9; border-radius: 10px; border: 1px solid #eee;">
                                    <input type="text" placeholder="Card Number (16 digits)" required pattern="[0-9]{16}" style="width: 100%; padding: 14px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 8px; outline: none; font-size: 1rem; font-family: inherit;">
                                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                                        <input type="text" placeholder="MM/YY" required pattern="(0[1-9]|1[0-2])\\/([0-9]{2})" style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; outline: none; font-size: 1rem; font-family: inherit;">
                                        <input type="text" placeholder="CVV" required pattern="[0-9]{3,4}" style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; outline: none; font-size: 1rem; font-family: inherit;">
                                    </div>
                                </div>

                                <!-- UPI -->
                                <label class="payment-option" style="display: flex; align-items: center; padding: 18px; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px; margin-bottom: 12px; cursor: pointer; transition: all 0.3s ease;">
                                    <input type="radio" name="payment" value="upi" style="margin-right: 15px; transform: scale(1.2); cursor: pointer;" onchange="togglePaymentDetails('upi')">
                                    <i class="fab fa-google-pay" style="margin-right: 15px; font-size: 1.5rem; color: #4285F4;"></i> 
                                    <span style="font-weight: 500; font-size: 1.1rem;">UPI (Google Pay / PhonePe)</span>
                                </label>
                                <div id="upiDetailsForm" style="display: none; margin-bottom: 25px; padding: 25px; background: #f9f9f9; border-radius: 10px; border: 1px solid #eee;">
                                    <input type="text" placeholder="Enter UPI ID (e.g. user@okicici)" style="width: 100%; padding: 14px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 8px; outline: none; font-size: 1rem; font-family: inherit;">
                                </div>

                                <!-- PayPal -->
                                <label class="payment-option" style="display: flex; align-items: center; padding: 18px; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px; margin-bottom: 12px; cursor: pointer; transition: all 0.3s ease;">
                                    <input type="radio" name="payment" value="paypal" style="margin-right: 15px; transform: scale(1.2); cursor: pointer;" onchange="togglePaymentDetails('paypal')">
                                    <i class="fab fa-paypal" style="margin-right: 15px; font-size: 1.5rem; color: #003087;"></i> 
                                    <span style="font-weight: 500; font-size: 1.1rem;">PayPal</span>
                                </label>
                                <div id="paypalDetailsForm" style="display: none; margin-bottom: 25px; padding: 25px; background: #f9f9f9; border-radius: 10px; border: 1px solid #eee;">
                                    <p style="font-size: 1rem; color: #555;">You will be redirected to PayPal securely.</p>
                                </div>
                                
                                <!-- COD -->
                                <label class="payment-option" style="display: flex; align-items: center; padding: 18px; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px; cursor: pointer; transition: all 0.3s ease;">
                                    <input type="radio" name="payment" value="cod" style="margin-right: 15px; transform: scale(1.2); cursor: pointer;" onchange="togglePaymentDetails('cod')">
                                    <i class="fas fa-money-bill-wave" style="margin-right: 15px; font-size: 1.5rem; color: #2e7d32;"></i> 
                                    <span style="font-weight: 500; font-size: 1.1rem;">Cash on Delivery</span>
                                </label>
                                <div id="codDetailsForm" style="display: none; margin-bottom: 25px; padding: 25px; background: #f9f9f9; border-radius: 10px; border: 1px solid #eee;">
                                    <p style="font-size: 1rem; color: #555;">Pay in cash upon receiving your order.</p>
                                </div>
                            </div>
                            
                            <button type="submit" class="btn btn-primary" id="confirmOrderBtn" style="width: 100%; font-size: 1.2rem; padding: 18px; border-radius: 50px;">Confirm & Pay $${total}</button>
                        </form>
                    </div>

                    <!-- Order Summary Section -->
                    <div class="checkout-summary-section">
                        <h3 style="margin-bottom: 30px; font-size: 1.5rem; color: var(--primary-color);">Order Summary (<span id="checkoutItemCount">${cartItems.reduce((acc, i) => acc + i.quantity, 0)}</span> items)</h3>
                        <div style="max-height: 400px; overflow-y: auto; margin-bottom: 30px; padding-right: 15px;">
                            ${orderItemsHtml}
                        </div>
                        
                        <div style="border-top: 2px solid rgba(0,0,0,0.1); padding-top: 20px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 1.1rem; color: #666;">
                                <span>Subtotal</span>
                                <span>$${total}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 1.1rem; color: #666;">
                                <span>Shipping</span>
                                <span style="color: #4caf50;">Free</span>
                            </div>
                            <div class="checkout-total-row">
                                <span>Total to Pay</span>
                                <span style="color: var(--primary-color);">$${total}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        checkoutModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Function to toggle payment form logic
        window.togglePaymentDetails = function (method) {
            const options = document.querySelectorAll('.payment-option');
            
            options.forEach(opt => {
                opt.style.border = '1px solid rgba(0,0,0,0.1)';
                const input = opt.querySelector('input');
                const methodType = input.value;
                const form = document.getElementById(methodType + 'DetailsForm');
                
                if (methodType === method) {
                    opt.style.border = '2px solid var(--secondary-color)';
                    if(form) {
                        form.style.display = 'block';
                        form.querySelectorAll('input').forEach(i => i.setAttribute('required', 'true'));
                    }
                } else {
                    if(form) {
                        form.style.display = 'none';
                        form.querySelectorAll('input').forEach(i => i.removeAttribute('required'));
                    }
                }
            });
        };
    }
};

window.placeOrder = function () {
    const confirmBtn = document.getElementById('confirmOrderBtn');
    if (confirmBtn) {
        confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        confirmBtn.style.opacity = '0.7';
        confirmBtn.disabled = true;
    }

    setTimeout(() => {
        cartItems = [];
        updateCartDisplay();

        const orderCode = 'ORD-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        const checkoutContent = document.getElementById('checkoutContent');

        if (checkoutContent) {
            checkoutContent.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; animation: slideIn 0.3s ease; max-width: 600px; margin: 0 auto; min-height: 500px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <i class="fas fa-check-circle" style="font-size: 6rem; color: #4caf50; margin-bottom: 30px;"></i>
                    <h2 style="margin-bottom: 15px; font-size: 2.5rem; color: var(--primary-color);">Order Successful!</h2>
                    <p style="color: #666; font-size: 1.1rem; margin-bottom: 35px;">Thank you for your purchase. We are processing your order and will email you with tracking information soon.</p>
                    <div style="background: #f8f8f8; padding: 25px; border-radius: 12px; margin-bottom: 40px; border: 2px dashed var(--secondary-color); width: 100%;">
                        <p style="font-size: 1rem; color: #666; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Your Order Reference</p>
                        <h3 style="font-size: 2.2rem; font-weight: 800; color: var(--primary-color); margin: 0; letter-spacing: 2px;">${orderCode}</h3>
                    </div>
                    <button class="btn btn-primary" style="width: 100%; padding: 18px; font-size: 1.2rem; border-radius: 50px;" onclick="closeCheckout();">Continue Shopping</button>
                </div>
            `;
        }
        
        const cartTotalPrice = document.getElementById('cartTotalPrice');
        if (cartTotalPrice) {
            cartTotalPrice.textContent = '$0.00';
        }

        showNotification(`Order ${orderCode} placed successfully!`, 'success');
    }, 1500);
};

function renderCartItems() {
    if (!cartItemsContainer || !cartTotalPrice) return;

    // Ensure footer is visible
    const cartFooter = document.querySelector('.cart-footer');
    if (cartFooter) {
        cartFooter.style.display = 'block';
    }

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; color:#666; margin-top:20px;">Your cart is empty.</p>';
        cartTotalPrice.textContent = '$0.00';
        return;
    }

    cartItemsContainer.innerHTML = cartItems.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <div class="item-price">$${item.price.toFixed(2)}</div>
                <div class="item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalPrice.textContent = `$${total.toFixed(2)}`;
}

window.updateQuantity = function (productId, change) {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            window.removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
};

window.removeFromCart = function (productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    updateCartDisplay();
};

function renderWishlistItems() {
    const container = document.getElementById('wishlistItemsContainer');
    if (!container) return;

    if (wishlistItems.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#666; margin-top:20px;">Your wishlist is empty.</p>';
        return;
    }

    container.innerHTML = wishlistItems.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <div class="item-price">$${item.price.toFixed(2)}</div>
                <div class="item-controls" style="margin-top: 10px;">
                    <button class="btn btn-primary" style="padding: 5px 15px; font-size: 0.8rem;" onclick="moveToCart(${item.id})">Move to Cart</button>
                    <button class="remove-item" style="margin-left: 10px;" onclick="removeFromWishlist(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
}

window.removeFromWishlist = function (productId) {
    wishlistItems = wishlistItems.filter(item => item.id !== productId);
    updateWishlistDisplay();
};

window.moveToCart = function (productId) {
    window.removeFromWishlist(productId);
    addToCart(productId);
    toggleWishlistSidebar();
};

// Product action functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cartItems.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                ...product,
                quantity: 1
            });
        }

        updateCartDisplay();
        showNotification(`${product.name} added to cart!`, 'success');

        // Add to cart animation
        const cartIconBtn = document.querySelector('.cart-icon');
        if (cartIconBtn) {
            cartIconBtn.style.animation = 'none';
            setTimeout(() => {
                cartIconBtn.style.animation = '';
            }, 10);
        }

        // Open the cart
        toggleCartSidebar();
    }
}

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = wishlistItems.find(item => item.id === productId);
        if (!existingItem) {
            wishlistItems.push(product);
            updateWishlistDisplay();
            showNotification(`${product.name} added to wishlist!`, 'success');

            // Icon animation
            const wishlistIconBtn = document.getElementById('wishlistIcon');
            if (wishlistIconBtn) {
                wishlistIconBtn.style.animation = 'none';
                setTimeout(() => {
                    wishlistIconBtn.style.animation = 'scaleIn 0.3s ease';
                }, 10);
            }
        } else {
            showNotification(`${product.name} is already in your wishlist!`, 'info');
        }
    }
}

function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let modal = document.getElementById('quickViewModal');
    let overlay = document.getElementById('quickViewOverlay');
    let content = document.getElementById('quickViewContent');

    // Auto-create modal elements in case the browser did not refresh index.html properly
    if (!modal || !overlay || !content) {
        document.body.insertAdjacentHTML('beforeend', `
            <div class="quick-view-overlay" id="quickViewOverlay"></div>
            <div class="quick-view-modal" id="quickViewModal">
                <button class="close-modal" id="closeQuickViewBtn" onclick="closeQuickView()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="quick-view-content" id="quickViewContent"></div>
            </div>
        `);
        modal = document.getElementById('quickViewModal');
        overlay = document.getElementById('quickViewOverlay');
        content = document.getElementById('quickViewContent');
        overlay.addEventListener('click', closeQuickView);
    }

    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

    content.innerHTML = `
        <div class="quick-view-media">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="quick-view-details">
            <div class="quick-view-category">${product.category}</div>
            <h2 class="quick-view-title">${product.name}</h2>
            <div class="quick-view-price">
                $${product.price.toFixed(2)}
                ${product.originalPrice ? `<del>$${product.originalPrice.toFixed(2)}</del>` : ''}
                ${discount > 0 ? `<span style="color: #4caf50; font-size: 0.9rem; margin-left:10px;">Save ${discount}%</span>` : ''}
            </div>
            <p class="quick-view-desc">
                Experience premium quality with our ${product.name}. Designed for both comfort and aesthetic appeal, 
                this piece belongs in your wardrobe. It features durable materials and meticulous craftsmanship that 
                ensures it will last for seasons.
            </p>
            <button class="btn btn-primary" onclick="addToCart(${product.id}); closeQuickView();" style="width: 100%; padding: 15px; font-size: 1.1rem;">
                <i class="fas fa-shopping-cart" style="margin-right: 10px;"></i> Add to Cart
            </button>
        </div>
    `;

    modal.classList.add('active');
    overlay.classList.add('active');
}

window.closeQuickView = function () {
    const modal = document.getElementById('quickViewModal');
    const overlay = document.getElementById('quickViewOverlay');
    if (modal) modal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
};

const quickViewOverlay = document.getElementById('quickViewOverlay');
if (quickViewOverlay) {
    quickViewOverlay.addEventListener('click', window.closeQuickView);
}

// Notification function
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#2196f3'};
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideIn 0.3s ease;
        font-weight: 500;
        font-size: 0.9rem;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animation style
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(notificationStyle);

// Newsletter form handling
const newsletterForm = document.getElementById('newsletterForm');
const formMessage = document.getElementById('formMessage');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;

        if (email && validateEmail(email)) {
            formMessage.textContent = '🎉 Thank you for subscribing! Check your inbox for exclusive offers.';
            formMessage.className = 'form-message success';
            newsletterForm.reset();

            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        } else {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.className = 'form-message error';

            setTimeout(() => {
                formMessage.textContent = '';
            }, 3000);
        }
    });
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 100;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Sticky header with scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
const animateElements = document.querySelectorAll('.category-card, .product-card, .feature-item, .arrival-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Image lazy loading with Intersection Observer
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
});

// Add hover effect for category cards
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Initialize cart count
updateCartDisplay();

// Click events are now handled directly in HTML via onclick attributes

// Export functions for global use
window.addToCart = addToCart;
window.addToWishlist = addToWishlist;
window.quickView = quickView;

// Preloader (optional)
window.addEventListener('load', () => {
    document.body.style.opacity = '1';

    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section, footer');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                if (section.hasAttribute('id')) {
                    current = section.getAttribute('id');
                }
            }
        });

        if (current) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        }
    });
});

// Dynamic year in footer
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
    yearElement.innerHTML = `&copy; ${new Date().getFullYear()} Urban Cart. All rights reserved.`;
}