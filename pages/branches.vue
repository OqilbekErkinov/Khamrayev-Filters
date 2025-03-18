<!-- <template>
    <div class="contact-page">
        <h1 class="contact-title">КАРТА ФИЛИАЛОВ</h1>

        <div class="map m-0 p-0">
            <iframe
          src="https://yandex.com/map-widget/v1/?ll=69.261981%2C41.278330&mode=poi&poi%5Bpoint%5D=69.261995%2C41.278313&controls=routeButtonControl"
          width="100%"
          height= "100%"
          frameborder="0"
          style="height: 400px;"></iframe>
        </div>
        <svg width="0" height="0">
            <defs>
                <clipPath id="customClip" clipPathUnits="userSpaceOnUse">
                    <path
                        d="M10.3499 92.4704C3.77634 98.1686 0 106.44 0 115.139V805C0 821.569 13.4314 835 30 835H1646C1662.57 835 1676 821.569 1676 805V30C1676 13.4315 1662.57 0 1646 0H128.219C121 0 114.023 2.60291 108.569 7.33119L10.3499 92.4704Z" />
                </clipPath>
            </defs>
        </svg>
    </div>
</template>

<script>
import MapComponent from "@/components/MapComponent.vue";

export default {
    name: 'ContactPage',
    data() {
        return {
            formData: {
                name: '',
                phone: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        submitForm() {
            console.log('Form submitted:', this.formData)
        }
    },
    components: {
    MapComponent,
  },
}
</script> -->


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
      coordinates: [69.262004, 41.278075],
      name: "Kleos"
    },
    {
      coordinates: [69.215579, 41.317795],
      name: "Oqlon Mosque" 
    },
    {
      coordinates: [69.249454, 41.297942],
      name: "Next"
    },
  ];
  
  onMounted(async () => {
    if (mapContainer.value) {
      mapInstance.value = await $initYandexMap(mapContainer.value, locations);
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