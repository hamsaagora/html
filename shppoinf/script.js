// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle active class on navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Handle "Add to Cart" button click
    const cart = [];
    const cartCounter = document.createElement('span');
    cartCounter.classList.add('cart-counter');
    cartCounter.textContent = '0';
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.appendChild(cartCounter);

    const updateCartCounter = () => {
        cartCounter.textContent = cart.length;
    };

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;
            cart.push({ name: productName, price: productPrice });
            alert(`${productName} has been added to your cart!`);
            updateCartCounter();
        });
    });

    // Display cart items when the cart icon is clicked
    cartIcon.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const cartItems = cart.map((item, index) => `${index + 1}. ${item.name} - ${item.price}`).join('\n');
        alert(`Your Cart:\n${cartItems}`);
    });

    // Handle "Shop Now" button click
    const shopNowButton = document.querySelector('.shop-now');
    shopNowButton.addEventListener('click', () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });

    // Submit contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        alert(`Thank you, ${name}! We have received your message.`);
        contactForm.reset();
    });
});
