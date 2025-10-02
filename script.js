// JSON Data for Products and Catering Items
        const poultryProducts = [
            {
                id: 1,
                name: "Boiler chicken",
                description: "Fresh, free-range whole white chicken, perfect for roasting or your favorite recipes.",
                price: "#25,000",
                image: "image/download 1.jpg",
                type: "white-chicken"
            },
            {
                id: 2,
                name: "layers chicken",
                description: "Premium red chicken with richer flavor and texture, ideal for stews and curries.",
                price: "#20,000",
                image: "image/download 2.jpg",
                type: "red-chicken"
            },
            {
                id: 3,
                name: "Large Farm Eggs (Dozen)",
                description: "Dozen free-range large eggs with rich, golden yolks from our happy hens.",
                price: "#6,000",
                image: "image/download 3.jpg",
                type: "eggs"
            },
            {
                id: 4,
                name: "Medium Farm Eggs (Dozen)",
                description: "Dozen free-range medium eggs, perfect for everyday cooking and baking.",
                price: "#5,500",
                image: "image/images 1.jpg",
                type: "eggs"
            },
        ]
            

        const cateringItems = [
            {
                id: 1,
                name: "Chicken Egg Rolls",
                description: "Crispy egg rolls filled with seasoned chicken and fresh vegetables.",
                price: "#6,000 per dozen",
                image: "image/snacks 4.jpg",
                category: "savory"
            },
            {
                id: 2,
                name: "Meat Pies",
                description: "Flaky pastry filled with seasoned ground meat and vegetables.",
                price: "#8,000 per dozen",
                image: "image/snacks 3.jpg",
                category: "savory"
            },
            {
                id: 3,
                name: "Assorted Donuts",
                description: "Freshly made donuts in various flavors including glazed, chocolate, and sprinkles.",
                price: "#6,000 per dozen",
                image: "image/snacks 2.jpg",
                category: "sweet"
            },
            {
                id: 4,
                name: "Puff puff",
                description: "Assorted mini sandwiches with chicken, egg, and vegetable fillings.",
                price: "#3,000 per dozen",
                image: "image/snacks 1.jpg",
                category: "savory"
            },
            {
                id: 5,
                name: "Chinchin",
                description: "Crispy shapes pastries.",
                price: "#28,000 per dozen",
                image: "image/snacks 6.jpg",
                category: "savory"
            },
            {
                id: 6,
                name: "Fruit Tartlets",
                description: "Mini tart shells filled with pastry cream and topped with fresh seasonal fruits.",
                price: "#5,000 per dozen",
                image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "sweet"
            },
            {
                id: 7,
                name: "Fresh Lemonade",
                description: "Homemade lemonade with fresh lemons and a hint of mint.",
                price: "#12,000 per gallon",
                image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "drinks"
            },
            {
                id: 8,
                name: "Iced Tea Assortment",
                description: "Selection of freshly brewed iced teas in various flavors.",
                price: "#23,300 per gallon",
                image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "drinks"
            }
        ];

        // Page Navigation
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link, .cta-button, .door-button');
            const pageSections = document.querySelectorAll('.page-section');
            
            // Function to show a specific page and hide others
            function showPage(pageId) {
                pageSections.forEach(section => {
                    section.classList.remove('active');
                });
                document.getElementById(pageId).classList.add('active');
                
                // Load appropriate content based on page
                if (pageId === 'poultry') {
                    loadPoultryProducts('poultry-shop-products');
                } else if (pageId === 'catering') {
                    loadCateringItems('all');
                }
                
                // Scroll to top when changing pages
                window.scrollTo(0, 0);
            }
            
            // Add click event listeners to all navigation elements
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetPage = this.getAttribute('data-page');
                    if (targetPage) {
                        showPage(targetPage);
                    }
                });
            });
            
            // Load initial poultry products on home page
            loadPoultryProducts('poultry-products');
            
            // Simple cart functionality
            const cartCount = document.querySelector('.cart-count');
            const addToCartButtons = document.querySelectorAll('.product-button');
            
            // Simple tracker animation
            const trackerSteps = document.querySelectorAll('.tracker-step');
            trackerSteps.forEach((step, index) => {
                setTimeout(() => {
                    step.style.opacity = '1';
                    step.style.transform = 'translateY(0)';
                }, index * 300);
            });
            
            // Set initial styles for animation
            trackerSteps.forEach(step => {
                step.style.opacity = '0';
                step.style.transform = 'translateY(20px)';
                step.style.transition = 'opacity 0.5s, transform 0.5s';
            });
            
            // Contact form submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                });
            }
        });

        // Function to load poultry products
        function loadPoultryProducts(containerId) {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            
            poultryProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-content">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">${product.price}</div>
                        <button class="product-button">Add to Cart</button>
                    </div>
                `;
                container.appendChild(productCard);
            });
            
            // Add cart functionality to new buttons
            const addToCartButtons = document.querySelectorAll('.product-button');
            const cartCount = document.querySelector('.cart-count');
            
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    let currentCount = parseInt(cartCount.textContent);
                    cartCount.textContent = currentCount + 1;
                    
                    // Add a simple animation to the cart icon
                    const cartIcon = document.querySelector('.cart-icon');
                    cartIcon.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        cartIcon.style.transform = 'scale(1)';
                    }, 300);
                });
            });
        }

        // Function to load catering items
        function loadCateringItems(category) {
            const container = document.getElementById('catering-items');
            container.innerHTML = '';
            
            let filteredItems = cateringItems;
            if (category !== 'all') {
                filteredItems = cateringItems.filter(item => item.category === category);
            }
            
            filteredItems.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                menuItem.innerHTML = `
                    <div class="menu-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="menu-item-content">
                        <h3 class="menu-item-title">${item.name}</h3>
                        <p class="product-description">${item.description}</p>
                        <div class="menu-item-price">${item.price}</div>
                        <button class="product-button">Add to Order</button>
                    </div>
                `;
                container.appendChild(menuItem);
            });
            
            // Add cart functionality to new buttons
            const addToCartButtons = document.querySelectorAll('.product-button');
            const cartCount = document.querySelector('.cart-count');
            
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    let currentCount = parseInt(cartCount.textContent);
                    cartCount.textContent = currentCount + 1;
                    
                    // Add a simple animation to the cart icon
                    const cartIcon = document.querySelector('.cart-icon');
                    cartIcon.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        cartIcon.style.transform = 'scale(1)';
                    }, 300);
                });
            });
        }

        // Category filtering for catering menu
        document.addEventListener('DOMContentLoaded', function() {
            const categoryButtons = document.querySelectorAll('.category-button');
            
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Load items for selected category
                    const category = this.getAttribute('data-category');
                    loadCateringItems(category);
                });
            });
        });