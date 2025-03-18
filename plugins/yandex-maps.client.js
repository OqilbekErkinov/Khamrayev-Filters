export default defineNuxtPlugin((nuxtApp) => {
    return {
      provide: {
        initYandexMap: (mapContainer, locations) => {
          return new Promise((resolve) => {

            if (window.ymaps) {
              ymaps.ready(() => createMap(mapContainer, locations, resolve));
              return;
            }

            const yandexScript = document.createElement('script');
            yandexScript.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=en_US');
            yandexScript.addEventListener('load', () => {
              ymaps.ready(() => createMap(mapContainer, locations, resolve));
            });
            document.head.appendChild(yandexScript);
          });
        }
      }
    };
  });
  
  function createMap(mapContainer, locations, resolve) {
    const map = new ymaps.Map(mapContainer, {
      center: [69.279737, 41.311151],
      zoom: 3
    });
    
    locations.forEach(location => {
      const placemark = new ymaps.Placemark(location.coordinates, {
        hintContent: location.name,
        balloonContent: location.name
      }, {
        preset: 'islands#blueCircleIcon'
      });
      
      map.geoObjects.add(placemark);
    });
    
    resolve(map);
  }