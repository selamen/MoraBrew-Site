document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    if (btn && menu) {
        btn.addEventListener('click', function(event) {
            event.stopPropagation();
            menu.classList.toggle('open');
        });

        document.addEventListener('click', function(event) {
            const isClickInsideMenu = menu.contains(event.target);
            const isClickOnButton = btn.contains(event.target);
            if (!isClickInsideMenu && !isClickOnButton && menu.classList.contains('open')) {
                menu.classList.remove('open');
            }
        });

        const menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('open');
            });
        });
    }

    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (scrollBtn) {
        function toggleButtonVisibility() {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        }
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.addEventListener('scroll', toggleButtonVisibility);
        scrollBtn.addEventListener('click', scrollToTop);
        toggleButtonVisibility();
    }
});