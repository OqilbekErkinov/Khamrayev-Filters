<template>
    <div id="map" class="map"></div>
  </template>
  
  <script>
  export default {
    mounted() {
      if (process.client) {
        import("leaflet").then((L) => {
          import("leaflet/dist/leaflet.css");
  
          const myLocation = [69.261999, 41.278315];
  
          const map = L.map("map").setView(myLocation, 15);
  
          L.marker(myLocation)
            .addTo(map)
            .bindPopup("Your Location")
            .openPopup();
        });
      }
    },
  };
  </script>
  
  <style scoped>
  .map {
    width: 100%;
    height: 400px;
  }
  </style>
  