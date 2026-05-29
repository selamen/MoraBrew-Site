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

// Получаем кнопку
const scrollBtn = document.getElementById('scrollToTopBtn');

// Функция проверки прокрутки: показывать кнопку, когда прокручено более 300px
function toggleButtonVisibility() {
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
}

// Плавная прокрутка к началу страницы
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Вешаем обработчики
window.addEventListener('scroll', toggleButtonVisibility);
scrollBtn.addEventListener('click', scrollToTop);

// Первоначальная проверка (если страница загружена не с самого верха)
toggleButtonVisibility();