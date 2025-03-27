export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      initYandexMap: (mapContainer, locations, showCaptions = false) => {
        return new Promise((resolve) => {
          if (window.ymaps) {
            ymaps.ready(() => createMap(mapContainer, locations, showCaptions, resolve));
            return;
          }

          const yandexScript = document.createElement('script');
          yandexScript.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU');
          yandexScript.addEventListener('load', () => {
            ymaps.ready(() => createMap(mapContainer, locations, showCaptions, resolve));
          });
          document.head.appendChild(yandexScript);
        });
      }
    }
  };
});

function createMap(mapContainer, locations, showCaptions, resolve) {
  const map = new ymaps.Map(mapContainer, {
    center: [41.311151, 69.279737], // Toshkent markaziga yaqin
    zoom: 12 // O‘rta masofada ko‘rsatish
  });

  locations.forEach(location => {
    const placemark = new ymaps.Placemark(
      location.coordinates,
      {
        hintContent: location.name,
        balloonContent: `<strong>${location.name}</strong>`,
        iconCaption: showCaptions ? location.name : ""
      },
      {
        preset: 'islands#blueCircleDotIconWithCaption'
      }
    );

    map.geoObjects.add(placemark);
  });

  resolve(map);
}
