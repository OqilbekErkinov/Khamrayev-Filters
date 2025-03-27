<template>
  <div class="contact-page">
    <h1 class="contact-title">КАРТА ФИЛИАЛОВ</h1>
    <div ref="mapContainer" class="yandex-map"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const { $initYandexMap } = useNuxtApp();
const mapContainer = ref(null);
const mapInstance = ref(null);
const locations = [
  {
    coordinates: [41.278075, 69.262004],
    name: "Kleos"
  },
  {
    coordinates: [41.317795, 69.215579],
    name: "Oqlon Mosque"
  },
  {
    coordinates: [41.297942, 69.249454],
    name: "Next"
  },
];
onMounted(async () => {
  if (mapContainer.value) {
    mapInstance.value = await $initYandexMap(mapContainer.value, locations, true);
  }
});
</script>
<style scoped>
.yandex-map {
  width: 100%;
  height: 400px;
  margin: 0 auto;
  margin-bottom: 3rem;
}
</style>