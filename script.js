/* ==========================================
   NETFUSION CONFIGURATION & INTERACTION
   ========================================== */

// 1. WhatsApp number in international format for wa.me links.
const WHATSAPP_NUMBER = "27812521656";

// Switch Page View Function
function switchPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));

    // Show target page
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update Header Navigation Active State
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });

    // Update Mobile Bottom Nav Active State
    const mobileItems = document.querySelectorAll('.mobile-nav-item');
    mobileItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${pageId}`) {
            item.classList.add('active');
        }
    });

    // Close Mobile Dropdown Menu if open
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.remove('show');
    }

    // Scroll to Top Smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Open General WhatsApp Chat
function openWhatsAppGeneral() {
    const message = encodeURIComponent("Hi Netfusion! 👋 I am interested in ordering AirPods from your store. Could you please send me more information?");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
}

// Order Specific Product via WhatsApp Card Click
function orderProduct(productName, price) {
    const message = encodeURIComponent(`Hi Netfusion! 🎧 I would like to order the *${productName}* for *${price}*. Please send payment and delivery details.`);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
}

// Handle Custom Order Form Submission
function handleCustomOrder(event) {
    event.preventDefault();

    const name = document.getElementById('custName').value.trim();
    const product = document.getElementById('prodSelect').value;
    const city = document.getElementById('deliveryCity').value.trim();
    const note = document.getElementById('custNote').value.trim();

    let text = `*NEW ORDER - NETFUSION*\n\n`;
    text += `👤 *Customer Name:* ${name}\n`;
    text += `🎧 *Product:* ${product}\n`;
    text += `📍 *Delivery Address:* ${city}\n`;
    if (note) {
        text += `📝 *Notes:* ${note}\n`;
    }
    text += `\nPlease send payment instructions to finalize my order.`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    window.open(url, '_blank');
}

// Mobile Toggle Navigation Listener
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
});
