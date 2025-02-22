<template>
  <nav class="nav-container">
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="nav-links">
        <NuxtLink to="/" class="nav-link">Главная</NuxtLink>
        <NuxtLink to="/about_us" class="nav-link">О Компании</NuxtLink>
        <NuxtLink to="/delivery" class="nav-link">Доставка</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Контакты</NuxtLink>
      </div>
      <div class="contact-info-header">
        <a href="https://khamraevfilters.com" class="website mt-1">Khamraevfilters.com</a>
        <a href="tel:+998999999999" class="phone" style="font-size: 17px;">+998 99 999 99 99</a>
      </div>
    </div>
    <!-- Main Bar -->
    <div class="main-bar container">
      <NuxtLink to="/" class="logo">
        <img src="/images/logo.png" alt="Khamraev Logo" />
      </NuxtLink>
      <div class="dropdown">
        <div class="catalog-container">
          <NuxtLink to="/catalog" class="catalog-btn btn-secondary dropdown-toggle" @click.prevent.stop="toggleDropdown"
            :class="{ 'show': isOpen }" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="menu-icon">{{ isOpen ? '✕' : '☰' }}</span>
            Каталог
          </NuxtLink>
          <div class="dropdown-menu" :class="{ 'show': isOpen }" ref="dropdownRef">
            <div class="catalog-dropdown-content">
              <!-- Sidebar -->
              <div class="catalog-sidebar">
                <div v-for="category in sidebarCategories" :key="category.id"
                  :class="['sidebar-item', { 'active': activeCategory === category.id }]"
                  @click="activeCategory = category.id">
                  <component :is="category.icon" class="sidebar-icon"
                    :class="{ 'active-icon': activeCategory === category.id }" />
                  <span>{{ category.title }}</span>
                </div>
              </div>
              <!-- Main Content -->
              <div class="catalog-content-wrapper">
                <h2 class="">{{ getCategoryData(activeCategory).title }}</h2>
                <!-- Manufacturers Layout -->
                <div v-if="activeCategory === 'manufacturers'" class="manufacturers-grid mb-5">
                  <div v-for="manufacturer in getCategoryData(activeCategory).data" :key="manufacturer.id"
                    class="manufacturer-item">
                    <NuxtLink to="/products" class="" style="text-decoration: none;">
                      <img v-if="typeof manufacturer.logo === 'string'" :src="manufacturer.logo"
                        class="manufacturer-logo" />
                      <span v-else class="manufacturer-title">{{ manufacturer.title }}</span>
                    </NuxtLink>
                  </div>
                  <button class="ps-4">Все бренды фильтров <svg class="ps-2" width="28" height="14" viewBox="0 0 31 16"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9L30 9V7L0 7L0 9Z"
                        fill="#04315B" />
                    </svg>
                    <div class="manafactures-border-button" />
                  </button>
                </div>
                <!-- Equipment Brands Layout -->
                <div v-else-if="activeCategory === 'equipment'" class="brands-grid">
                  <div v-for="brand in getCategoryData(activeCategory).data" :key="brand.id" class="brand-item">
                    <NuxtLink to="/products" class="" style="text-decoration: none;">
                      <span class="brand-title">{{ brand.title }}</span>
                    </NuxtLink>
                  </div>
                  <button class="ps-4">Все марки техники <svg class="ps-2" width="28" height="14" viewBox="0 0 31 16"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9L30 9V7L0 7L0 9Z"
                        fill="#04315B" />
                    </svg>
                    <div class="brands-border-button" />
                  </button>
                </div>
                <!-- Equipment Types Layout -->
                <div v-else-if="activeCategory === 'applications'" class="equipment-types-grid">
                  <div v-for="type in getCategoryData(activeCategory).data" :key="type.id" class="equipment-type-card"
                    :class="{ 'title-only': !type.image }">

                    <div class="card-content">
                      <NuxtLink to="/products" class="" style="text-decoration: none;">
                        <h3>{{ type.title }}</h3>
                      </NuxtLink>
                      <img v-if="type.image" :src="type.image" :alt="type.title" class="equipment-image" />
                    </div>
                  </div>
                  <button class="ps-4">Все виды техники <svg class="ps-2" width="28" height="14" viewBox="0 0 31 16"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9L30 9V7L0 7L0 9Z"
                        fill="#04315B" />
                    </svg>
                    <div class="equipments-border-button" />
                  </button>
                </div>
                <!-- Default Filter Categories Layout -->
                <div v-else class="filter-categories">
                  <div class="catalog-main-content">
                    <div v-for="(category, index) in getCategoryData(activeCategory).data" :key="index"
                      class="filter-category">
                      <div class="category-header d-flex">
                        <div>
                          <component :is="category.icon" class="category-icon" />
                        </div>
                        <div class="title-with-text ms-3">
                          <NuxtLink to="/products" class="" style="text-decoration: none;">
                            <h5>{{ category.title }}</h5>
                          </NuxtLink>
                          <span class="item-count">{{ category.count }}</span>
                          <ul v-if="category.subcategories" class="subcategories">
                            <li v-for="(sub, idx) in category.subcategories" :key="idx">{{ sub }}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Поиск..." />
        <button class="search-btn">
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
      <button class="contact-btnn">Связаться</button>
      <NuxtLink to="/cart" class="cart">
        <ion-icon name="cart-outline"></ion-icon>
        <span class="cart-label">Корзина</span>
        <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { MainSvgs } from "@/public/icons/landing.tsx"
const isOpen = ref(false);
const activeCategory = ref('filters');
const catalogRef = ref(null);

const toggleDropdown = (event) => {
  event.stopPropagation();
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (event) => {
  const dropdownElement = document.querySelector('.dropdown-menu');
  const catalogButton = document.querySelector('.catalog-btn');

  if (dropdownElement && catalogButton) {
    const isClickInside = dropdownElement.contains(event.target) ||
      catalogButton.contains(event.target);

    if (!isClickInside) {
      isOpen.value = false;
    }
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});

const sidebarCategories = [
  { id: 'filters', title: 'Виды фильтров', icon: MainSvgs.category1 },
  { id: 'manufacturers', title: 'Производители', icon: MainSvgs.category2 },
  { id: 'equipment', title: 'Марки техники', icon: MainSvgs.category3 },
  { id: 'applications', title: 'Применение', icon: MainSvgs.category4 }
];

const filterCategories = [
  { icon: MainSvgs.gidro, title: 'Гидравлические', count: '123423 товара', subcategories: ['Всасывающие', 'Сливные', 'Напорные'] },
  { icon: MainSvgs.vozdush, title: 'Воздушные', count: '123423 товара' },
  { icon: MainSvgs.gazoviy, title: 'Газовые', count: '123423 товара' },
  { icon: MainSvgs.maslyanni, title: 'Масляные', count: '123423 товара' },
  { icon: MainSvgs.topliviy, title: 'Топливные', count: '123423 товара' },
  { icon: MainSvgs.salonniy, title: 'Салонные', count: '123423 товара' },
  { icon: MainSvgs.sapuni, title: 'Сапуны', count: '123423 товара' },
  { icon: MainSvgs.separatori, title: 'Сепараторы', count: '123423 товара', subcategories: ['Воздушно-масляные', 'Судовые'] },
  { icon: MainSvgs.osushiteli, title: 'Осушители тормозов', count: '123423 товара' }
];

const manufacturerCategories = [
  { logo: "/images/doring.png" },
  { logo: "/images/hi-fi-filter.png" },
  { logo: "/images/donaldson.png" },
  { logo: "/images/fil-filter.png" },
  { title: 'Argo Hytos' },
  { title: 'Baldwin' },
  { title: 'Bosch' },
  { title: 'Fil Filter' },
  { title: 'Fleetguard' },
  { title: 'Hi-Fi Filter' },
  { title: 'Hydac' },
  { title: 'MANN Filter' },

];

const equipmentCategories = [
  { title: 'Bobcat' },
  { title: 'Bomag ' },
  { title: 'Caterpillar' },
  { title: 'Doosan' },
  { title: 'Hitachi' },
  { title: 'JCB' },
  { title: 'John Deere' },
  { title: 'Komatsu' },
  { title: 'Terex' },
  { title: 'Zoomlion' },
  { title: 'XCMG' },
  { title: 'МТЗ' },
];

const applicationCategories = [
  { title: 'Бульдозеры', image: '/images/buldozer.png' },
  { title: 'Погрузчики', image: '/images/pogruzchik.png' },
  { title: 'Экскаваторы', image: '/images/ekskavator.png' },
  { title: 'Генератор, ДГУ', image: '/images/generator.png' },
  { title: 'Дизельные двигатели' },
  { title: 'Компрессор' },
  { title: 'Промышленное оборудование' },

];

const getCategoryData = (categoryId) => {
  switch (categoryId) {
    case 'filters':
      return { title: 'Виды фильтров', data: filterCategories };
    case 'manufacturers':
      return { title: 'Производители', data: manufacturerCategories };
    case 'equipment':
      return { title: 'Марки техники', data: equipmentCategories };
    case 'applications':
      return { title: 'Применение', data: applicationCategories };
    default:
      return { title: 'Виды фильтров', data: filterCategories };
  }
};
</script>