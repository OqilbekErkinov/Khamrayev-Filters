<template>
  <div class="container mx-auto p-6">
    <h1 v-if="brandName" class="models-title">Фильтры для техники {{ brandName }}</h1>
    <div class="modelsofbrands">
      <div v-if="filteredModels.length" class="models-grid">
        <div v-for="model in filteredModels" :key="model.id" class="model-item">
          <NuxtLink :to="`/products?brand=${brandName}&model=${model.name}`" style="text-decoration: none;">
            <span class="model-title">{{ model.name }}</span>
          </NuxtLink>
        </div>
      </div>
      <p v-else class="no-filters">No filters found</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue';
import { useRoute, useFetch } from '#app';

const route = useRoute();
const brandName = ref('');
const filteredModels = ref([]);

const fetchModels = async (brand) => {
  if (!brand) {
    console.error("Brand undefined! URL ni tekshiring.");
    return;
  }
  brandName.value = brand.toUpperCase();
  try {
    const { data, error } = await useFetch(`http://127.0.0.1:8088/api/v1/models_of_brands?slug=${brand.toLowerCase()}`);
    if (error.value) {
      console.error("API xatosi:", error.value);
      return;
    }
    filteredModels.value = data.value?.data ?? [];
  } catch (err) {
    console.error("Xatolik:", err);
  }
};

onMounted(async () => {
  await nextTick();
  let brand = route.query.brand;
  if (brand) {
    fetchModels(brand);
  }
});

watch(() => route.query.brand, (newBrand) => {
  if (newBrand) {
    fetchModels(newBrand);
  }
}, { immediate: true });
</script>