document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    // Открыть/закрыть по кнопке
    btn.addEventListener('click', function(event) {
        event.stopPropagation(); // чтобы клик по кнопке не закрыл меню сразу
        menu.classList.toggle('open');
    });

    // Закрыть меню при клике в любом месте, кроме самого меню и кнопки
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnButton = btn.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnButton && menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    });

    // Закрыть меню при клике на ссылку внутри меню (опционально)
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
        });
    });
});