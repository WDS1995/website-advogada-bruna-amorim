// ============================================
// MENU.JS — Hamburger + overlay mobile
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const header    = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const overlay   = document.querySelector('.nav-overlay');
    const navLinks  = document.querySelectorAll('.nav-links a');

    if (!header || !hamburger) return;

    // Toggle menu
    function openMenu() {
        header.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'Fechar menu');
    }
    function closeMenu() {
        header.classList.remove('menu-open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Abrir menu');
    }

    hamburger.addEventListener('click', function () {
        header.classList.contains('menu-open') ? closeMenu() : openMenu();
    });

    if (overlay) overlay.addEventListener('click', closeMenu);

    navLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    // Keyboard accessibility
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && header.classList.contains('menu-open')) closeMenu();
    });

    // Scrolled class para efeito no header
    window.addEventListener('scroll', function () {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });

    // Active link baseado na página atual
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});
