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

ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [45.0428, 41.9734],
                zoom: 13
            });
            var myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [ 45.033286, 41.957603]
    }
    
});
            var myGeoObject1 = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [45.035337, 41.967008]
    }
    
});
myMap.geoObjects.add(myGeoObject); 
myMap.geoObjects.add(myGeoObject1); 
}

        45.0445, 41.9697