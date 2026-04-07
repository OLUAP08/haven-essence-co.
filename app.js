const products = [
    {
        id: 'midnight-crest',
        name: 'Midnight Crest',
        collection: 'mens',
        inspired: 'Inspired by Black Polo',
        desc: 'Bold, fresh, and undeniably powerful, Midnight Crest opens with crisp bergamot and spicy pepper, settling into deep amber and woody notes. It’s a scent of confidence and quiet intensity.',
        size: '50ml – sleek and travel-ready',
        uniqueness: 'A smoother, more refined take with added warmth, creating a balanced scent that lasts without overpowering.',
        image: 'assets/midnight_crest.jpg',
        family: 'Woody',
        price: 149
    },
    {
        id: 'aqua-verge',
        name: 'Aqua Verge',
        collection: 'mens',
        inspired: 'Inspired by Aqua de Gio',
        desc: 'Clean and invigorating, Aqua Verge captures the feeling of fresh air meeting cool waters. Bright citrus blends seamlessly with soft florals and musk for a crisp, modern finish.',
        size: '50ml – perfect for everyday wear',
        uniqueness: 'A lighter, more refreshing profile with a calm, airy quality that feels effortlessly sophisticated.',
        image: 'assets/aqua_verge.jpg',
        family: 'Fresh',
        price: 149
    },
    {
        id: 'wild-ember',
        name: 'Wild Ember',
        collection: 'mens',
        inspired: 'Inspired by Eros',
        desc: 'Passionate and energetic, Wild Ember ignites with fresh mint and green apple, layered over warm vanilla and tonka bean. It’s bold, seductive, and unforgettable.',
        size: '50ml – compact and stylish',
        uniqueness: 'A richer, smoother sweetness that enhances wearability while maintaining its powerful presence.',
        image: 'assets/wild_ember.jpg',
        family: 'Oriental',
        price: 149
    },
    {
        id: 'blanc-era',
        name: 'Blanc Era',
        collection: 'mens',
        inspired: 'Inspired by Men in Red',
        desc: 'Dark, smooth, and luxurious, Blanc Era blends rich fruits with deep woods and a sensual base. It’s mystery, elegance, and confidence in every note.',
        size: '50ml – refined and portable',
        uniqueness: 'A deeper, slightly smokier character that adds a modern edge to a classic masculine scent.',
        image: 'assets/blanc_era.jpg',
        family: 'Woody',
        price: 149
    },
    {
        id: 'obsidian-rush',
        name: 'Obsidian Rush',
        collection: 'mens',
        inspired: 'Inspired by Sauvage',
        desc: 'Fresh, aquatic, and energizing, Obsidian Rush reflects the power and calm of the ocean. Marine notes combine with citrus and soft woods for a clean, timeless aroma.',
        size: '50ml – ideal for daily refreshment',
        uniqueness: 'A smoother, longer-lasting aquatic blend with a subtle depth that elevates its freshness.',
        image: 'assets/obsidian_rush.jpg',
        family: 'Fresh',
        price: 149
    },
    {
        id: 'heavenly-mist',
        name: 'Heavenly Mist',
        collection: 'womens',
        inspired: 'Inspired by Cloud',
        desc: 'Soft, airy, and comforting, Heavenly Mist wraps you in a delicate blend of lavender, pear, and creamy coconut. Light and dreamy, it feels like floating in a serene cloud.',
        size: '50ml – elegant and travel-friendly',
        uniqueness: 'A more refined and airy sweetness, offering a smoother, less sugary finish for everyday elegance.',
        image: 'assets/heavenly_mist.jpg',
        filterClass: '',
        family: 'Floral',
        price: 149
    },
    {
        id: 'velvet-vanilla',
        name: 'Velvet Vanilla',
        collection: 'womens',
        inspired: 'Inspired by Vanilla Lace',
        desc: 'Warm and sensual, Velvet Vanilla is a rich embrace of creamy vanilla layered with soft florals and a gentle musk. It’s cozy, luxurious, and timeless.',
        size: '50ml – perfectly sized for daily use',
        uniqueness: 'A deeper, slightly toasted vanilla note that adds richness and a sophisticated warmth.',
        image: 'assets/velvet_vanilla.jpg',
        filterClass: '',
        family: 'Musk',
        price: 149
    },
    {
        id: 'purple-allure',
        name: 'Purple Allure',
        collection: 'womens',
        inspired: 'Inspired by Amethyste',
        desc: 'Graceful and enchanting, Purple Allure blends delicate florals with subtle fruity undertones. It’s feminine, elegant, and effortlessly captivating.',
        size: '50ml – compact and chic',
        uniqueness: 'A brighter, modern floral twist that enhances freshness while maintaining a soft, alluring trail.',
        image: 'assets/purple_allure.jpg',
        filterClass: '',
        family: 'Floral',
        price: 149
    },
    {
        id: 'rose-bliss',
        name: 'Rose Bliss',
        collection: 'womens',
        inspired: 'Inspired by Strawberries & Champagne',
        desc: 'Romantic and playful, Rose Bliss combines sweet berries with soft floral notes and a sparkling touch of elegance. It’s fresh, flirty, and luxurious.',
        size: '50ml – ideal for on-the-go glamour',
        uniqueness: 'A more balanced sweetness with a delicate rosy finish, making it feel refined rather than overly sugary.',
        image: 'assets/rose_bliss.jpg',
        filterClass: '',
        family: 'Floral',
        price: 149
    },
    {
        id: 'fresh-serenity',
        name: 'Fresh Serenity',
        collection: 'womens',
        inspired: 'Inspired by Cucumber Melon',
        desc: 'Clean, crisp, and refreshing, Fresh Serenity captures the essence of cool cucumber and juicy melon with a soft green finish. It’s light, uplifting, and effortlessly calming.',
        size: '50ml – refreshing and easy to carry',
        uniqueness: 'A more natural, dewy freshness that feels like a peaceful morning in nature.',
        image: 'assets/fresh_serenity.jpg',
        filterClass: '',
        family: 'Fresh',
        price: 149
    }
];

let cart = [];
let reviews = JSON.parse(localStorage.getItem('reviews')) || {};

function init() {
    renderProducts();
    updateCartCount();
    setupEventListeners();
}

function renderProducts() {
    const mensGrid = document.getElementById('mens-grid');
    const womensGrid = document.getElementById('womens-grid');

    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container" onclick="openProductModal('${p.id}')" style="cursor: pointer;" title="Click for more details">
                <img src="${p.image}" alt="${p.name}" class="product-image ${p.filterClass || ''}">
            </div>
            <div class="product-info">
                <div onclick="openProductModal('${p.id}')" style="cursor: pointer;" title="Click for more details">
                    <div class="product-header">
                        <h4>${p.name}</h4>
                        <span class="price">₱${p.price.toFixed(2)}</span>
                    </div>
                    <p class="subtitle">${p.family} · ${p.size.split(' ')[0]}</p>
                </div>
                <div class="actions-vertical">
                    <button class="btn btn-block btn-gold" onclick="addToCart('${p.id}')">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px; vertical-align: middle;">
                            <path d="M5 8L3.5 21H20.5L19 8H5Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
                            <path d="M8.5 9.5V5.5C8.5 3.567 10.067 2 12 2C13.933 2 15.5 3.567 15.5 5.5V9.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                            <circle cx="8.5" cy="9.5" r="2" fill="currentColor"/>
                            <circle cx="15.5" cy="9.5" r="2" fill="currentColor"/>
                        </svg>Add to Cart
                    </button>
                    <button class="btn btn-block btn-dark-full" onclick="buyNow('${p.id}')">Buy Now</button>
                </div>
            </div>
        `;
        if (p.collection === 'mens') mensGrid.appendChild(card);
        else womensGrid.appendChild(card);
    });
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#d4af37"/><path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartCount();
    showToast(`Added ${product.name} to cart!`);
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

let currentProductId = null;
let currentPvQty = 1;

function openProductModal(id) {
    const product = products.find(p => p.id === id);
    currentProductId = id;
    currentPvQty = 1;
    document.getElementById('pv-qty-val').textContent = currentPvQty;

    document.getElementById('pv-image').src = product.image;
    document.getElementById('pv-image').className = `product-image ${product.filterClass || ''}`;

    document.getElementById('pv-tag-collection').textContent = product.collection === 'mens' ? 'For Men' : 'For Women';
    document.getElementById('pv-tag-inspired').textContent = product.inspired;
    document.getElementById('pv-title').textContent = product.name;
    document.getElementById('pv-price').textContent = `₱${product.price.toFixed(2)}`;
    document.getElementById('pv-desc').textContent = product.desc;
    document.getElementById('pv-size').textContent = product.size;
    document.getElementById('pv-uniqueness').textContent = product.uniqueness;

    document.getElementById('home-view').style.display = 'none';
    document.getElementById('cart-view').style.display = 'none';
    document.getElementById('product-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    pvRenderReviews(id);
    resetPvStars();
}

function closeProductPage() {
    document.getElementById('product-view').style.display = 'none';
    document.getElementById('home-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.closeProductPage = closeProductPage;

window.updatePvQty = function (change) {
    currentPvQty += change;
    if (currentPvQty < 1) currentPvQty = 1;
    document.getElementById('pv-qty-val').textContent = currentPvQty;
}

window.addToCartPv = function () {
    const product = products.find(p => p.id === currentProductId);
    for (let i = 0; i < currentPvQty; i++) {
        cart.push(product);
    }
    updateCartCount();
    showToast(`Added ${currentPvQty}x ${product.name} to cart!`);
}

window.buyNowPv = function () {
    addToCartPv();
    document.getElementById('product-view').style.display = 'none';
    openCartPage();
}

window.openProductModal = openProductModal;
window.addToCart = addToCart;

window.buyNow = function (id) {
    addToCart(id);
    openCartPage();
}

window.removeFromCart = function (index) {
    cart.splice(index, 1);
    updateCartCount();
    openCartPage();
}

window.toggleGcashDetails = function() {
    const payment = document.querySelector('input[name="payment"]:checked').value;
    const gcashDetails = document.getElementById('gcash-details');
    if (gcashDetails) {
        gcashDetails.style.display = payment === 'gcash' ? 'block' : 'none';
    }
}

function closeCart() {
    document.getElementById('cart-view').style.display = 'none';
    document.getElementById('product-view').style.display = 'none';
    document.getElementById('home-view').style.display = 'block';
}
window.closeCart = closeCart;

function openCartPage() {
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('product-view').style.display = 'none';
    document.getElementById('cart-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const summary = document.getElementById('order-summary-page');
    const emptyState = document.getElementById('cart-empty-state');
    const filledState = document.getElementById('cart-filled-state');

    if (cart.length === 0) {
        emptyState.style.display = 'block';
        filledState.style.display = 'none';
        summary.innerHTML = '';
        return;
    }

    emptyState.style.display = 'none';
    filledState.style.display = 'flex';

    let total = 0;
    summary.innerHTML = cart.map((p, index) => {
        total += p.price;
        return `<div class="summary-item" style="display: flex; align-items: center; justify-content: space-between; padding: 15px; background: #fff; margin-bottom: 10px; border-radius: 8px; border: 1px solid #eee;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="${p.image}" style="width: 50px; height: 50px; object-fit: contain;">
                <span style="font-weight: 500; color:#111;">${p.name}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px;">
                <span style="font-weight: bold; color: var(--primary);">₱${p.price.toFixed(2)}</span>
                <button class="btn-remove" onclick="removeFromCart(${index})" title="Remove from cart">&times;</button>
            </div>
        </div>`;
    }).join('') + `<div class="summary-total" style="text-align: right; margin-top: 20px; font-size: 1.4rem; color:#111;"><strong>Total: ₱${total.toFixed(2)}</strong></div>`;
}

function pvRenderReviews(id) {
    const list = document.getElementById('pv-reviews-list');
    const countEl = document.getElementById('pv-reviews-count');
    const productReviews = reviews[id] || [];

    countEl.textContent = productReviews.length;

    if (productReviews.length === 0) {
        list.innerHTML = '<p class="empty-reviews">No reviews yet. Be the first to share your experience!</p>';
        return;
    }

    list.innerHTML = productReviews.map(r => `
        <div class="review-item">
            <strong>${r.name}</strong> <span style="color:#f5b041;">${'⭐'.repeat(r.rating || 5)}</span>
            <p>${r.text}</p>
        </div>
    `).join('');
}

let pvCurrentRating = 5;

function resetPvStars() {
    pvCurrentRating = 5;
    updatePvStarsDisplay();
    document.getElementById('pv-reviewer-name').value = '';
    document.getElementById('pv-review-text').value = '';
}

function updatePvStarsDisplay() {
    document.querySelectorAll('#pv-stars .star').forEach((star, index) => {
        if (index < pvCurrentRating) {
            star.textContent = '⭐';
            star.classList.add('active');
        } else {
            star.textContent = '☆';
            star.classList.remove('active');
        }
    });
}

window.submitReviewPv = function () {
    const nameStr = document.getElementById('pv-reviewer-name').value || 'Anonymous';
    const textStr = document.getElementById('pv-review-text').value;

    if (!textStr.trim()) return showToast("Please share your thoughts before submitting.");

    if (!reviews[currentProductId]) reviews[currentProductId] = [];
    reviews[currentProductId].push({ name: nameStr, text: textStr, rating: pvCurrentRating });
    localStorage.setItem('reviews', JSON.stringify(reviews));

    resetPvStars();
    pvRenderReviews(currentProductId);
}

function setupEventListeners() {
    document.getElementById('cartBtn').onclick = openCartPage;

    document.getElementById('pv-stars').addEventListener('click', (e) => {
        if (e.target.classList.contains('star')) {
            pvCurrentRating = parseInt(e.target.getAttribute('data-val'));
            updatePvStarsDisplay();
        }
    });

    document.getElementById('confirm-order').onclick = async () => {
        const nameInput = document.getElementById('customer-name');
        const emailInput = document.getElementById('customer-email');
        const addressInput = document.getElementById('customer-address');
        const name = nameInput ? nameInput.value.trim() : 'Unknown';
        const email = emailInput ? emailInput.value.trim() : '';
        const address = addressInput ? addressInput.value.trim() : 'Unknown';

        const payment = document.querySelector('input[name="payment"]:checked').value;
        const delivery = document.querySelector('input[name="delivery"]:checked').value;
        const gcashPhoneInput = document.getElementById('gcash-phone');
        const gcashPhone = gcashPhoneInput ? gcashPhoneInput.value.trim() : '';

        if (!name || !email || !address) {
            showToast('Please enter your Name, Email Address, and Delivery Address.');
            return;
        }

        if (payment === 'gcash' && !gcashPhone) {
            showToast('Please enter your GCash Phone Number to verify your payment.');
            return;
        }

        const confirmBtn = document.getElementById('confirm-order');
        confirmBtn.disabled = true;
        confirmBtn.textContent = 'Processing...';

        // Format cart nicely for the Google Sheet
        const productNames = cart.map(item => item.name).join(', ');
        const totalItems = cart.length;
        const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

        const finalPaymentDetails = payment === 'gcash' ? `GCash (${gcashPhone})` : 'Cash on Delivery';

        const orderPayload = {
            date: new Date().toLocaleString(),
            name: name,
            email: email,
            address: address,
            productName: productNames,
            quantity: totalItems,
            price: `₱${totalPrice}`,
            payment: finalPaymentDetails,
            gcashNumber: gcashPhone || 'N/A',
            delivery: delivery
        };

        const webhookUrl = 'https://script.google.com/macros/s/AKfycby4Hw6G6xnFZUpm5RIr93XgwGKzaUu5YbH0F5PtHIL8oDkSpgHBCSYnKEy8lRU9BRL1/exec'; // Replace this later with your Webhook URL

        try {
            // Sending text/plain prevents strict Google CORS blocking
            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(orderPayload)
            });

            // As long as no error is thrown, we assume success
            showToast(`Order confirmed, ${name}! Your signature scent is on the way!`);
            
            // Show email modal
            showEmailModal(name, email, cart);
            
            cart = [];
            updateCartCount();
            closeCart();
            if (nameInput) nameInput.value = '';
            if (emailInput) emailInput.value = '';
            if (addressInput) addressInput.value = '';
        } catch (error) {
            console.error('Error saving order:', error);
            showToast('Failed to process order. Please check your internet connection.');
        } finally {
            confirmBtn.disabled = false;
            confirmBtn.textContent = 'Confirm & Pay';
        }
    };
}

function showEmailModal(name, email, orderedItems) {
    const modal = document.getElementById('email-modal');
    if (!modal) return;
    
    document.getElementById('email-to-display').textContent = email;
    document.getElementById('email-body-text').textContent = `Thank you ${name} your perfume will be delivered around 2 - 3 days. We can't wait for you to enjoy your experience with our product.`;
    
    const uniqueItemsImageHtml = [];
    const seenIds = new Set();
    orderedItems.forEach(item => {
        if (!seenIds.has(item.id)) {
            seenIds.add(item.id);
            uniqueItemsImageHtml.push(`<img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px; border: 1px solid #ddd; box-shadow: 0 4px 10px rgba(0,0,0,0.08);" title="${item.name}">`);
        }
    });
    
    document.getElementById('email-product-images').innerHTML = uniqueItemsImageHtml.join('');
    
    modal.style.display = 'flex';
    // Small delay to allow display flex to apply before opacity transition
    setTimeout(() => {
        modal.style.opacity = '1';
        const modalContent = document.getElementById('email-modal-content');
        if(modalContent) modalContent.style.transform = 'translateY(0)';
    }, 10);
}

window.closeEmailModal = function() {
    const modal = document.getElementById('email-modal');
    if (!modal) return;
    modal.style.opacity = '0';
    const modalContent = document.getElementById('email-modal-content');
    if(modalContent) modalContent.style.transform = 'translateY(20px)';
    setTimeout(() => {
        modal.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
}

init();
