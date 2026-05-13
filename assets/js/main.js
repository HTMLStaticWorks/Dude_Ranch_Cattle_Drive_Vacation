/* 
    Dude Ranch & Cattle Drive Vacation - Main JS Interactions
*/

document.addEventListener('DOMContentLoaded', () => {
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === '') currentPage = 'index.html';

    // Global Component Management (Navbar & Footer)
    const initGlobalComponents = () => {
        // Remove file extension for comparison if needed, but here we use the full filename
        
        // 1. Standardize Footer
        const footerPlaceholder = document.getElementById('footer-placeholder') || document.querySelector('footer');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = `
                <div class="container-custom">
                    <div class="footer-top">
                        <div>
                            <div class="footer-logo western-font">
                                <i class="bi bi-compass"></i> WildWest Ranch
                            </div>
                            <p class="footer-desc">Authentic western luxury since 1892. Preserving the heritage of the American West through immersive ranch experiences.</p>
                            <div class="social-links mt-4">
                                <a href="#" class="social-icon"><i class="bi bi-instagram"></i></a>
                                <a href="#" class="social-icon"><i class="bi bi-facebook"></i></a>
                                <a href="#" class="social-icon"><i class="bi bi-youtube"></i></a>
                                <a href="#" class="social-icon"><i class="bi bi-pinterest"></i></a>
                            </div>
                        </div>
                        <div>
                            <h4 class="footer-h western-font">Quick Links</h4>
                            <ul class="footer-links">
                                <li><a href="about.html">Our Story</a></li>
                                <li><a href="ranch-experiences.html">Experiences</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="footer-h western-font">Activities</h4>
                            <ul class="footer-links">
                                <li><a href="ranch-experiences.html">Cattle Drives</a></li>
                                <li><a href="ranch-experiences.html">Horseback Riding</a></li>
                                <li><a href="meal-plans.html">Ranch Dining</a></li>
                                <li><a href="gallery.html">Visual Journey</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="footer-h western-font">Newsletter</h4>
                            <p class="small text-muted mb-3">Get the latest ranch news and seasonal offers.</p>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control bg-transparent border-secondary" placeholder="Email Address">
                                <button class="btn btn-primary-ranch px-3" type="button"><i class="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2026 WildWest Ranch & Cattle Drive. All Rights Reserved.</p>
                        <div class="d-flex gap-4">
                            <a href="#">Privacy Policy</a>
                            <a href="liability-form.html">Liability Waiver</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            `;
        }

        // 2. Standardize Navbar
        const nav = document.querySelector('.navbar-custom');
        if (nav) {
            nav.innerHTML = `
                <div class="nav-logo">
                    <i class="bi bi-compass"></i>
                    <span>WildWest Ranch</span>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
                    <li><a href="home-2.html" class="nav-link ${currentPage === 'home-2.html' ? 'active' : ''}">Home 2</a></li>
                    <li><a href="about.html" class="nav-link ${currentPage === 'about.html' ? 'active' : ''}">About</a></li>
                    <li><a href="ranch-experiences.html" class="nav-link ${currentPage === 'ranch-experiences.html' ? 'active' : ''}">Experiences</a></li>
                    <li><a href="meal-plans.html" class="nav-link ${currentPage === 'meal-plans.html' ? 'active' : ''}">Meal Plans</a></li>
                    <li><a href="gallery.html" class="nav-link ${currentPage === 'gallery.html' ? 'active' : ''}">Gallery</a></li>
                    <li><a href="contact.html" class="nav-link ${currentPage === 'contact.html' ? 'active' : ''}">Contact</a></li>
                </ul>
                <div class="nav-actions">
                    <button class="btn btn-outline-ranch p-2 rounded-circle theme-toggle d-none d-lg-flex" title="Toggle Theme">
                        <i class="bi bi-moon-stars"></i>
                    </button>
                    <button class="btn btn-outline-ranch p-2 rounded-circle rtl-toggle d-none d-lg-flex" title="Toggle RTL">
                        <i class="bi bi-arrow-left-right"></i>
                    </button>
                    <a href="booking.html" class="btn-ranch btn-outline-ranch d-none d-md-flex">Book Now</a>
                    <a href="login.html" class="btn-ranch btn-primary-ranch d-none d-md-flex">Login</a>
                    <button class="mobile-nav-btn"><i class="bi bi-list"></i></button>
                </div>
            `;
        }
    };

    initGlobalComponents();

    // Unified Toggles with Delegation
    const initToggles = () => {
        // Sync Initial States
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.querySelectorAll('.theme-toggle i').forEach(i => i.classList.replace('bi-moon-stars', 'bi-sun'));
        }
        if (localStorage.getItem('dir') === 'rtl') {
            document.body.setAttribute('dir', 'rtl');
        }

        document.addEventListener('click', (e) => {
            const themeBtn = e.target.closest('.theme-toggle');
            const rtlBtn = e.target.closest('.rtl-toggle');

            if (themeBtn) {
                let theme = document.documentElement.getAttribute('data-theme');
                if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                    document.querySelectorAll('.theme-toggle i').forEach(i => i.classList.replace('bi-sun', 'bi-moon-stars'));
                } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                    document.querySelectorAll('.theme-toggle i').forEach(i => i.classList.replace('bi-moon-stars', 'bi-sun'));
                }
            }

            if (rtlBtn) {
                let dir = document.body.getAttribute('dir');
                if (dir === 'rtl') {
                    document.body.setAttribute('dir', 'ltr');
                    localStorage.setItem('dir', 'ltr');
                } else {
                    document.body.setAttribute('dir', 'rtl');
                    localStorage.setItem('dir', 'rtl');
                }
            }
        });
    };

    initToggles();

    // Mobile Menu logic with delegation
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.mobile-nav-btn');
        if (btn) {
            let mobileMenu = document.querySelector('.mobile-menu');
            if (!mobileMenu) {
                mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                mobileMenu.innerHTML = `
                    <button class="mobile-menu-close"><i class="bi bi-x-lg"></i></button>
                    <a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'active' : ''}">Home</a>
                    <a href="home-2.html" class="nav-link ${currentPage === 'home-2.html' ? 'active' : ''}">Home 2</a>
                    <a href="about.html" class="nav-link ${currentPage === 'about.html' ? 'active' : ''}">About</a>
                    <a href="ranch-experiences.html" class="nav-link ${currentPage === 'ranch-experiences.html' ? 'active' : ''}">Experiences</a>
                    <a href="meal-plans.html" class="nav-link ${currentPage === 'meal-plans.html' ? 'active' : ''}">Meal Plans</a>
                    <a href="gallery.html" class="nav-link ${currentPage === 'gallery.html' ? 'active' : ''}">Gallery</a>
                    <a href="contact.html" class="nav-link ${currentPage === 'contact.html' ? 'active' : ''}">Contact</a>
                    
                    <div class="mobile-menu-toggles d-flex gap-3 mt-4 mb-2">
                        <button class="btn btn-outline-ranch p-2 rounded-circle theme-toggle" title="Toggle Theme">
                            <i class="bi ${localStorage.getItem('theme') === 'dark' ? 'bi-sun' : 'bi-moon-stars'}"></i>
                        </button>
                        <button class="btn btn-outline-ranch p-2 rounded-circle rtl-toggle" title="Toggle RTL">
                            <i class="bi bi-arrow-left-right"></i>
                        </button>
                    </div>

                    <a href="booking.html" class="btn-ranch btn-outline-ranch">Book Now</a>
                    <a href="login.html" class="btn-ranch btn-primary-ranch">Login</a>
                `;
                document.body.appendChild(mobileMenu);
            }
            
            mobileMenu.classList.toggle('active');
            const icon = btn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.replace('bi-list', 'bi-x-lg');
            } else {
                icon.classList.replace('bi-x-lg', 'bi-list');
            }
        }

        const mobileLink = e.target.closest('.mobile-menu .nav-link, .mobile-menu .btn-ranch, .mobile-menu-close');
        if (mobileLink) {
            const menu = document.querySelector('.mobile-menu');
            if (menu) menu.classList.remove('active');
            const icon = document.querySelector('.mobile-nav-btn i');
            if (icon) icon.classList.replace('bi-x-lg', 'bi-list');
        }
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar-custom');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Back to Top Implementation
    const backToTop = document.createElement('div');
    backToTop.id = 'back-to-top';
    backToTop.innerHTML = '<i class="bi bi-chevron-up"></i>';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Intersection Observer for Reveal Animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.ranch-card, .section-header, .story-img, .timeline-card').forEach(el => observer.observe(el));

    // Gallery Filtering
    const filterBtns = document.querySelectorAll('.gallery-filters button');
    const galleryItems = document.querySelectorAll('.gallery-item-wrapper');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.replace('btn-primary-ranch', 'btn-outline-ranch'));
                btn.classList.replace('btn-outline-ranch', 'btn-primary-ranch');

                const filter = btn.getAttribute('data-filter');
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.classList.remove('d-none');
                        item.classList.add('d-block');
                    } else {
                        item.classList.remove('d-block');
                        item.classList.add('d-none');
                    }
                });
            });
        });
    }
});
