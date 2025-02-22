<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Виды фильтров</h2>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(category, index) in filterCategories" :key="index"
        class="p-4 border rounded-lg hover:shadow-md transition-shadow" @click="navigateToProducts(category.id)">
        <div class="flex items-center mb-2">
          <component :is="category.icon" class="w-6 h-6 mr-2 text-blue-900" />
          <h3 class="font-semibold">{{ category.title }}</h3>
        </div>
        <p class="text-sm text-gray-500">{{ category.count }} товара</p>
        <div v-if="category.subcategories" class="mt-2">
          <p v-for="sub in category.subcategories" :key="sub" class="text-sm text-gray-600">
            {{ sub }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const filterCategories = [
  {
    id: 'hydraulic',
    title: 'Гидравлические',
    count: '123423',
    icon: 'HydraulicIcon',
    subcategories: ['Всасывающие', 'Сливные', 'Напорные']
  },
  {
    id: 'air',
    title: 'Воздушные',
    count: '123423',
    icon: 'AirIcon'
  },
]

const navigateToProducts = (categoryId) => {
  navigateTo(`/products?category=${categoryId}`)
}
</script>