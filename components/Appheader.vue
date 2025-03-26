<template>
  <nav class="container nav-container " style="position: relative; box-shadow:none; z-index: 999;">
    <!-- Mobile -->
    <div class="container mobile-version" style="position: relative;">
      <nav class="navbar navbar-light navbar-custom fixed-top" style="padding-right: 0 !important;">
        <div class="container toppp-bar">
          <div>
            <NuxtLink to="/" class="logo">
              <img src="/images/logo.svg" alt="Khamraev Logo" />
            </NuxtLink>
          </div>
          <div class="d-flex">
            <NuxtLink to="/cart" class="cart">
              <ion-icon name="cart-outline"></ion-icon>
              <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
            </NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop" id="navbarToggler">
              <span class="navbar-toggler-icon" id="togglerIcon"></span>
              <span class="close-icon d-none" id="closeIcon">✕</span>
            </button>
          </div>
        </div>
      </nav>
      <div class="search-container search-mobile ">
        <!-- Search Input -->
        <input v-model="searchQuery" style="outline" type="text" placeholder="Поиск..." @input="handleInput" />
        <button @click="searchProducts" class="search-btn">
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <div v-if="showDropdown" class="dropdown">
          <ul>
            <NuxtLink :to="`/product_detail/${product.id}`" v-for="product in products.data" :key="product.slug"
              @click="selectProduct(product)" class="nuxtlinkkk">
              {{ product.firm }} - {{ product.type }} - {{ product.article_number }}
            </NuxtLink>
          </ul>
        </div>
        <div v-if="showDropdown && products.data.length === 0" class="dropdown">
          No products found.
        </div>
      </div>
      <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close me-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="nav flex-column" id="mobileNavLinks">
            <li class="nav-item" style="margin-top: -1rem;">
              <NuxtLink to="/" class="nav-link">Главная</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/catalog" class="nav-link">Каталог</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about_us" class="nav-link">О Компании</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/delivery" class="nav-link">Доставка</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact" class="nav-link">Контакты</NuxtLink>
            </li>
            <li class="nav-item phonee mt-2">
              <a href="tel:+998936439977" class="phone " style="font-size: 17px;">+998 93 643 99 77</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Top Bar -->
    <div class="container top-bar">
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
        <img style="background-color: transparent" src="/images/logo.svg" alt="Khamraev Logo" />
      </NuxtLink>
      <div class="dropdown-wrapper">
        <!-- Backdrop overlay -->
        <div v-if="isOpen" class="backdrop" @click="toggleDropdown($event)"></div>
        <div class="dropdown">
          <div class="catalog-container">
            <NuxtLink to="#" class="catalog-btn btn-secondary" @click="toggleDropdown($event)"
              :class="{ 'show': isOpen }" role="button" aria-expanded="false">
              <span class="menu-icon">{{ isOpen ? '✕' : '☰' }}</span>
              Каталог
            </NuxtLink>
            <div v-if="isOpen" class="dropdown-menu show" ref="dropdownRef">
              <div class="catalog-dropdown-content ms-5 ps-3">
                <!-- Sidebar -->
                <div class="catalog-sidebar">
                  <div v-for="category in sidebarCategories" :key="category.id"
                    :class="['sidebar-item', { 'active': activeCategory === category.id }]"
                    @click="activeCategory = category.id">
                    <component :is="category.icon" class="sidebar-icon"
                      :class="{ 'active-icon': activeCategory === category.id }" />
                    <span>{{ category.title }}</span>
                  </div>
                  <NuxtLink to="/catalog" class="button-sidebar" @click="closeSidebar">
                    <span>➜ Смотреть весь каталог</span>
                  </NuxtLink>
                </div>
                <div class="ms-3 mt-4">
                  <svg width="1" height="400" viewBox="0 0 1 637" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="637.006" x2="0.5" y2="-0.00628662" stroke="url(#paint0_linear_41_2626)" />
                    <defs>
                      <linearGradient id="paint0_linear_41_2626" x1="1.5" y1="-0.00628662" x2="1.5" y2="637.006"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#CDCDCD" />
                        <stop offset="1" stop-color="#676767" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <!-- Main Content -->
                <div class="catalog-content-wrapper">
                  <h2 class="category_title">{{ getCategoryData(activeCategory).title }}</h2>

                  <!-- Manufacturers Layout -->
                  <div v-if="activeCategory === 'manufacturers'" class="manufacturers-grid mb-5">
                    <div v-if="manafacturer?.isLoading">Loading....</div>
                    <div v-else v-for="manafacturer in categoryData.manufacturers.data" :key="manafacturer.id"
                      class="manufacturer-item">
                      <NuxtLink :to="`/products?firm=${manafacturer.name}`" class="" style="text-decoration: none;"
                        @click="handleCategoryClick">
                        <img v-if="manafacturer?.image" :src="manafacturer.image" class="manufacturer-logo" />
                        <span v-else class="manufacturer-title">{{ manafacturer.name }}</span>
                      </NuxtLink>
                    </div>
                    <div class="manafacture-button">
                      <button @click="handleButtonClick" class="ps-4">Все бренды фильтров <svg class="ps-2" width="28"
                          height="14" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9L30 9V7L0 7L0 9Z"
                            fill="#04315B" />
                        </svg>
                        <div class="manafactures-border-button" />
                      </button>
                    </div>
                  </div>

                  <!-- Equipment Brands Layout -->
                  <div v-else-if="activeCategory === 'brands'" class="brands-grid">
                    <div v-for="brand in categoryData.brands.data ?? []" :key="brand.id" class="brand-item">
                      <NuxtLink :to="`/models?brand=${brand.name}`" class="" style="text-decoration: none;" @click="handleCategoryClick">
                        <span class="brand-title">{{ brand.name }}</span>
                      </NuxtLink>
                    </div>
                    <div class="brands-button">
                      <button @click="handleButtonClick" class="ps-4">Все марки техники <svg class="ps-2" width="28"
                          height="14" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9L30 9V7L0 7L0 9Z"
                            fill="#04315B" />
                        </svg>
                        <div class="brands-border-button" />
                      </button>
                    </div>
                  </div>

                  <!-- Equipment Types Layout -->
                  <div v-else-if="activeCategory === 'equipments'" class="equipment-types-grid">
                    <div v-if="manafacturer?.isLoading">Loading....</div>
                    <div v-else v-for="equipment in categoryData.equipments.data ?? []" :key="equipment.id"
                      class="equipment-type-card" :class="{ 'title-only': equipment.image }">
                      <div class="card-content">
                        <NuxtLink :to="`/products?equipment=${equipment.name}`" class="equipment-title" style="text-decoration: none;"
                          @click="handleCategoryClick">
                          <h3 >{{ equipment.name }}</h3>
                        </NuxtLink>
                        <img v-if="equipment.image" :src="equipment.image" :alt="equipment.name"
                          class="equipment-image" />
                      </div>
                    </div>
                    <div class="equipments-button">
                      <button @click="handleButtonClick" class="ps-4">Все виды техники <svg class="ps-2" width="28"
                          height="14" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9L30 9V7L0 7L0 9Z"
                            fill="#04315B" />
                        </svg>
                        <div class="equipments-border-button" />
                      </button>
                    </div>
                  </div>

                  <!-- Default Filter Categories Layout -->
                  <div v-else class="catalog-filter-categories">
                    <div class="catalog-main-content">
                      <div v-for="filter_types in categoryData.filters.data ?? []" :key="filter_types.id"
                        class="filter-category">
                        <div class="category-header d-flex">
                          <div v-if="filter_types.svg" class="category-icon" v-html="filter_types.svg"></div>
                          <div class="title-with-text ms-3">
                            <NuxtLink :to="`/products?type=${filter_types.name}`" style="text-decoration: none;" @click="handleCategoryClick">
                              <h5 class="nameeee">{{ filter_types.name }}</h5>
                            </NuxtLink>
                            <span class="item-count">{{ filter_types.stock }} товара</span>
                          </div>
                        </div>
                        <ul v-if="filter_types.subcategories.length" class="subcategories" style="list-style: none;">
                          <li v-for="sub in filter_types.subcategories" :key="sub.id" class="subcategory">
                            <NuxtLink :to="`/products?type=${sub.alt_name}&subtype=${sub.slug}`"
                              class="subcategory-link" style="text-decoration: none; color: #04315B;">
                              {{ sub.name }}
                            </NuxtLink>
                          </li>
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
      <div class="search-container">
        <!-- Search Input -->
        <input v-model="searchQuery" style="outline" type="text" placeholder="Поиск..." @input="handleInput" />
        <button @click="searchProducts" class="search-btn">
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <div v-if="showDropdown" class="dropdown">
          <ul>
            <NuxtLink :to="`/product_detail/${product.id}`" v-for="product in products.data" :key="product.slug"
              @click="selectProduct(product)" class="nuxtlinkkk">
              {{ product.firm }} - {{ product.type }} - {{ product.article_number }}
            </NuxtLink>
          </ul>
        </div>
        <div v-if="showDropdown && products.data.length === 0" class="dropdown">
          No products found.
        </div>
      </div>
      <NuxtLink to="/contact" class="contact">
        <button class="contact-btnn pb-2 z-3">Связаться</button>
      </NuxtLink>
      <NuxtLink to="/cart" class="cart">
        <ion-icon name="cart-outline"></ion-icon>
        <span class="cart-label">Корзина</span>
        <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import { onMounted, watchEffect } from 'vue';
import { MainSvgs } from "@/public/icons/landing.tsx"
import { usefilter_typeStore } from '@/store/filter_type';
import { usemanafacturerStore } from '@/store/manafacturer';
import { useBrandStore } from '@/store/brand';
import { useEquipmentStore } from '@/store/equipment';
const filterTypeStore = usefilter_typeStore();
const filterTypes = ref(null);
const manafacturerStore = usemanafacturerStore();
const manafacturers = ref(null);
const BrandStore = useBrandStore();
const brands = ref(null);
const EquipmentStore = useEquipmentStore();
const equipments = ref(null)
const router = useRouter();

onMounted(async () => {
  await filterTypeStore.getAllfilter_types();
});
watchEffect(() => {
  filterTypes.value = filterTypeStore.filter_types?.data;
});
onMounted(async () => {
  await manafacturerStore.getAllmanafacturers();
  manafacturerStore.isLoading
});
watchEffect(() => {
  manafacturers.value = manafacturerStore.manafacturers?.data;
});
onMounted(async () => {
  await BrandStore.getAllbrands();
});
watchEffect(() => {
  brands.value = BrandStore.brands?.data;
});
onMounted(async () => {
  await EquipmentStore.getAllEquipments();
});
watchEffect(() => {
  equipments.value = EquipmentStore.equipments?.data;
});
const isOpen = ref(false);
const activeCategory = ref('filters');

const closeSidebar = () => {
  setTimeout(() => {
    isOpen.value = false;
  }, 200);
};

const toggleDropdown = (event) => {
  event.preventDefault();
  event.stopPropagation();
  isOpen.value = !isOpen.value;
  activeCategory.value = 'filters';
};

const handleClickOutside = (event) => {
  const dropdownElement = document.querySelector('.dropdown-menu');
  const catalogButton = document.querySelector('.catalog-btn');

  if (isOpen.value && dropdownElement && catalogButton) {
    const isClickInside = dropdownElement.contains(event.target) ||
      catalogButton.contains(event.target);

    if (!isClickInside) {
      setTimeout(() => {
        isOpen.value = false;
      }, 200);
    }
  }
};
const handleCategoryClick = () => {
  setTimeout(() => {
    isOpen.value = false;
  }, 200);
};
const handleButtonClick = () => {
  router.push('/products');
  setTimeout(() => {
    isOpen.value = false;
  }, 200);
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
  { id: 'brands', title: 'Марки техники', icon: MainSvgs.category3 },
  { id: 'equipments', title: 'Применение', icon: MainSvgs.category4 }
];

const getCategoryData = (categoryId) => {
  return categoryData.value[categoryId] || { title: 'Виды фильтров', data: [] };
};

const categoryData = computed(() => ({
  filters: { title: 'Виды фильтров', data: filterTypeStore.filter_types?.data },
  manufacturers: { title: 'Производители', data: manafacturerStore.manafacturers?.data },
  brands: { title: 'Марки техники', data: BrandStore.brands?.data },
  equipments: { title: 'Применение', data: EquipmentStore.equipments?.data },
}));

onMounted(() => {
  const offcanvasElement = document.getElementById('offcanvasTop');
  const togglerIcon = document.getElementById('togglerIcon');
  const closeIcon = document.getElementById('closeIcon');

  if (offcanvasElement && togglerIcon && closeIcon) {
    offcanvasElement.addEventListener('show.bs.offcanvas', function () {
      togglerIcon.classList.add('d-none');
      closeIcon.classList.remove('d-none');
    });

    offcanvasElement.addEventListener('hide.bs.offcanvas', function () {
      togglerIcon.classList.remove('d-none');
      closeIcon.classList.add('d-none');
    });
  }
})
import { $api } from '~/store/search';
const searchQuery = ref('');
const products = ref([]);
const showDropdown = ref(false);

let debounceTimer;
const debounce = (func, delay) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(func, delay);
};

const handleInput = () => {
  debounce(() => {
    if (searchQuery.value.trim() === '') {
      products.value = [];
      showDropdown.value = false;
      return;
    }
    searchProducts();
  }, 300);
};
const searchProducts = async () => {
  try {
    const response = await $api.get('/search_products/', {
      params: {
        q: searchQuery.value,
      },
    });
    products.value = response ? response.data : [];
    showDropdown.value = true;
  } catch (error) {
    console.error('Error searching products:', error);
    products.value = [];
    showDropdown.value = false;
  }
};
const selectProduct = (product) => {
  searchQuery.value = product.firm;
  products.value = [];
  showDropdown.value = false;
};
</script>