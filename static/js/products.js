const products = [
    {
        id: 1,
        name: "Trimblend",
        category: "Women Health",
        price: 450,
        image: "Trimblend.png",
        badge: "Best Seller",
        badgeColor: "#2d5f2e",
        rating: 4.9,
        reviews: "1k+ Reviews",
        sizes: ["110g"],
        info: {
              description: "A metabolism-supporting nutrition blend.",
              benefits: "Supports weight balance and energy levels.",
              nutrients: "Protein, Fiber, Vitamins",
              whoCanUse: "Adults, women-focused diets",
              whoShouldAvoid: "Pregnant women (consult doctor)"
              }
    },
    {
        id: 2,
        name: "Coconut Breadmix",
        category: "Made with Cocounut",
        price: 600,
        image: "coconut bread mix.png",
        badge: "6% GST OFF",
        badgeColor: "#2d5f2e",
        rating: 4.9,
        reviews: "2k+ Reviews",
        sizes: ["400g"],
        info: {
              description: "A metabolism-supporting nutrition blend.",
              benefits: "Supports weight balance and energy levels.",
              nutrients: "Protein, Fiber, Vitamins",
              whoCanUse: "Adults, women-focused diets",
              whoShouldAvoid: "Pregnant women (consult doctor)"
              }
    },
    {
        id: 3,
        name: "Creamy Spinach Instant Soupmix",
        category: "Healthy Soup",
        price: 499,
        image: "spinach soup.png",
        badge: "Trending",
        badgeColor: "#ff8c00",
        rating: 4.9,
        reviews: "248 Reviews",
        sizes: ["110g"],
        info: {
              description: "A metabolism-supporting nutrition blend.",
              benefits: "Supports weight balance and energy levels.",
              nutrients: "Protein, Fiber, Vitamins",
              whoCanUse: "Adults, women-focused diets",
              whoShouldAvoid: "Pregnant women (consult doctor)"
              }
    },
    {
        id: 4,
        name: "Curry Leaves instant Soup Mix",
        category: "Instant Soup",
        price: 499,
        image: "curry soup.png",
        badge: "Must Try",
        badgeColor: "#7b3ff2",
        rating: 4.9,
        reviews: "163 Reviews",
        sizes: ["110 g"],
        info: {
              description: "A metabolism-supporting nutrition blend.",
              benefits: "Supports weight balance and energy levels.",
              nutrients: "Protein, Fiber, Vitamins",
              whoCanUse: "Adults, women-focused diets",
              whoShouldAvoid: "Pregnant women (consult doctor)"
              }
    },
    {
        id: 5,
        name: "Choco Almond Butter cup",
        category: "Instant Soup",
        price: 650,
        image: "Choco_Almond.png",
        badge: "Must Try",
        badgeColor: "#7b3ff2",
        rating: 4.9,
        reviews: "163 Reviews",
        sizes: ["110 g"],
        info: {
              description: "A metabolism-supporting nutrition blend.",
              benefits: "Supports weight balance and energy levels.",
              nutrients: "Protein, Fiber, Vitamins",
              whoCanUse: "Adults, women-focused diets",
              whoShouldAvoid: "Pregnant women (consult doctor)"
              }
    },
    {
        id: 6,
        name: "Instant Seed Drumstick Soup Mix",
        category: "Instant Soup",
        price: 499,
        image: "Drumstick_soup.png",
        badge: "Must Try",
        badgeColor: "#7b3ff2",
        rating: 4.9,
        reviews: "163 Reviews",
        sizes: ["110 g"],
        info: {
              description: "A metabolism-supporting nutrition blend.",
              benefits: "Supports weight balance and energy levels.",
              nutrients: "Protein, Fiber, Vitamins",
              whoCanUse: "Adults, women-focused diets",
              whoShouldAvoid: "Pregnant women (consult doctor)"
              }
    },
    {
        id: 7,
        name: "Chocolate Smoothie Mix",
        category: "Smoothie",
        price: 649,
        image: "Choclate_smoothie_mix.png",
        badge: "Must Try",
        badgeColor: "#7b3ff2",
        rating: 4.9,
        reviews: "163 Reviews",
        sizes: ["200 g"],
        info: {
              description: "A metabolism-supporting nutrition blend.",
              benefits: "Supports weight balance and energy levels.",
              nutrients: "Protein, Fiber, Vitamins",
              whoCanUse: "Adults, women-focused diets",
              whoShouldAvoid: "Pregnant women (consult doctor)"
              }
    },
    {
        id: 8,
        name: "Guava Smoothie Mix",
        category: "Smoothie",
        price: 649,
        image: "Guava_smoothie.png",
        badge: "Must Try",
        badgeColor: "#7b3ff2",
        rating: 4.9,
        reviews: "163 Reviews",
        sizes: ["200 g"],
        info: {
              description: "A metabolism-supporting nutrition blend.",
              benefits: "Supports weight balance and energy levels.",
              nutrients: "Protein, Fiber, Vitamins",
              whoCanUse: "Adults, women-focused diets",
              whoShouldAvoid: "Pregnant women (consult doctor)"
              }
    },
    {
        id: 9,
        name: "Amla_Gooseberry",
        category: "green",
        price: 649,
        image: "Amla_Gooseberry.png",
        badge: "Must Try",
        badgeColor: "#7b3ff2",
        rating: 4.9,
        reviews: "163 Reviews",
        sizes: ["200 g"],
        info: {
              description: "A metabolism-supporting nutrition blend.",
              benefits: "Supports weight balance and energy levels.",
              nutrients: "Protein, Fiber, Vitamins",
              whoCanUse: "Adults, women-focused diets",
              whoShouldAvoid: "Pregnant women (consult doctor)"
              }
    },
    
];

class ProductCarousel {
    constructor() {
        this.currentIndex = 0;
        this.itemsPerView = this.getItemsPerView();
        this.init();
    }

    getItemsPerView() {
        const width = window.innerWidth;
        if (width < 576) return 1;      // Mobile
        if (width < 992) return 2;      // Tablet
        return 4;                       // Desktop
    }

    init() {
        this.renderProducts();
        this.attachEventListeners();
        window.addEventListener('resize', () => {
            this.itemsPerView = this.getItemsPerView();
            this.currentIndex = 0;
            this.renderProducts();
        });
    }

    renderProducts() {
        const container = document.querySelector('.row.g-4');
        if (!container) return;

        container.innerHTML = products.map(product => `
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="card h-100 shadow-sm border-0">
                    <div class="position-relative">
                    <span class="badge position-absolute top-0 start-0 m-3 px-3 py-2"
                            style="background-color: ${product.badgeColor}; z-index: 5;">
                        ${product.badge}
                    </span>

                    <!-- Actions -->
                    <div class="product-actions">

                    <!-- Info Tooltip Button -->
                    <div class="product-info-tooltip">
                        <i class="bi bi-info-circle-fill info-icon"></i>

                        <div class="info-tooltip-content">
                            <h6 class="tooltip-title">Product Knowledge</h6>
                            <p><strong>Description:</strong><br>${product.info.description}</p>
                            <p><strong>Benefits:</strong><br>${product.info.benefits}</p>
                            <p><strong>Nutrients:</strong><br>${product.info.nutrients}</p>
                            <p><strong>Who can use:</strong><br>${product.info.whoCanUse}</p>
                            <p><strong>Who should avoid:</strong><br>${product.info.whoShouldAvoid}</p>
                        </div>
                    </div>
                    
                    <!-- Favorite Button -->
                    <button class="btn btn-light rounded-circle p-2 favorite-btn">
                        <i class="bi bi-heart"></i>
                    </button>
                    
                    </div>

                    <img src="/static/images/${product.image}" alt="${product.name}"
                        class="card-img-top" style="height: 350px; object-fit: cover;">
                    </div>

                <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-semibold mb-2">${product.name}</h5>
                        <p class="text-muted small mb-2">${product.category}</p>
                        <div class="d-flex align-items-center mb-3">
                            <span class="text-warning me-1">★★★★★</span>
                            <span class="fw-semibold me-1">${product.rating}</span>
                            <span class="text-muted small">${product.reviews}</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <h4 class="mb-0 fw-bold">₹${product.price}</h4>
                        </div>
                        <select class="form-select mb-3">
                            ${product.sizes.map(size => `<option selected>${size}</option>`).join('')}
                        </select>
                        <button class="btn text-white fw-semibold py-2 mt-auto" style="background-color: #2d5f2e;">
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        this.updateButtonStates();
        this.attachFavoriteButtons();
        this.attachInfoHoverEffects();
    }

    attachInfoHoverEffects() {
        const overlay = document.querySelector(".focus-overlay");

        document.querySelectorAll(".info-btn").forEach(btn => {

            /* Desktop hover */
            btn.addEventListener("mouseenter", () => {
                overlay.classList.add("active");
            });

            btn.addEventListener("mouseleave", () => {
                overlay.classList.remove("active");
            });

            /* Mobile / Touch support */
            btn.addEventListener("click", (e) => {
                e.stopPropagation(); // prevent closing immediately
                overlay.classList.toggle("active");
            });
        });

        /* Tap outside to close on mobile */
        document.addEventListener("click", () => {
            overlay.classList.remove("active");
        });
    }

    attachEventListeners() {
        const buttons = document.querySelectorAll('.btn-light.position-absolute');
        const prevBtn = Array.from(buttons).find(btn => btn.style.left === '-20px');
        const nextBtn = Array.from(buttons).find(btn => btn.style.right === '-20px');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.scroll('prev'));
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.scroll('next'));
        }
    }

    scroll(direction) {
        const maxIndex = Math.max(0, products.length - this.itemsPerView);

        if (direction === 'next') {
            this.currentIndex = Math.min(this.currentIndex + 1, maxIndex);
        } else {
            this.currentIndex = Math.max(this.currentIndex - 1, 0);
        }

        this.updateCarousel();
    }

    updateCarousel() {
        const container = document.querySelector('.row.g-4');
        if (!container) return;

        const scrollAmount = (this.currentIndex * 100) / this.itemsPerView;
        container.style.transform = `translateX(-${scrollAmount}%)`;

        this.updateButtonStates();
    }

    updateButtonStates() {
        const buttons = document.querySelectorAll('.btn-light.position-absolute');
        const prevBtn = Array.from(buttons).find(btn => btn.style.left === '-20px');
        const nextBtn = Array.from(buttons).find(btn => btn.style.right === '-20px');
        const maxIndex = Math.max(0, products.length - this.itemsPerView);

        if (prevBtn) {
            prevBtn.disabled = this.currentIndex === 0;
            prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
        }

        if (nextBtn) {
            nextBtn.disabled = this.currentIndex >= maxIndex;
            nextBtn.style.opacity = this.currentIndex >= maxIndex ? '0.5' : '1';
        }
    }

    attachFavoriteButtons() {
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const icon = this.querySelector('i');
                icon.classList.toggle('bi-heart');
                icon.classList.toggle('bi-heart-fill');
            });
        });
    }
}

function adjustTooltipDirection() {
  document.querySelectorAll('.product-info-tooltip').forEach(el => {
    const tooltip = el.querySelector('.info-tooltip-content');
    const rect = el.getBoundingClientRect();

    if (window.innerWidth - rect.right < 300) {
      tooltip.style.left = 'auto';
      tooltip.style.right = '42px';
    } else {
      tooltip.style.right = 'auto';
      tooltip.style.left = '42px';
    }
  });
}

document.addEventListener("mouseover", adjustTooltipDirection);
window.addEventListener("resize", adjustTooltipDirection);

document.addEventListener("DOMContentLoaded", () => {
    new ProductCarousel();
});