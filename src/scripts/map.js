let myMap;

const init = () => {
    myMap = new ymaps.Map("footer__map", {
        center: [55.76, 37.64],
        zoom: 13
    })

    const coords = [
        [55.759065, 37.616090],
        [55.750631, 37.611138],
        [55.745425, 37.589202],
        [55.757906, 37.588882]
    ]

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./img/marker.png",
        iconImageSize: [46,57],
        iconImageOffset: [-35,-52],
    })

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord))
    })

    myMap.geoObjects.add(myCollection)

    myMap.behaviors.disable('scrollZoom')
};

ymaps.ready(init);