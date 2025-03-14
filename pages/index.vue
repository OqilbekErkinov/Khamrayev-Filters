<template>
  <div class="home-page">
    <div class="container">

      <section class="hero">
        <div class="container position-relative">
          <!-- Hero Content -->
          <div class="hero-content">
            <h1 class="hero-title">
              ТЕХНОЛОГИИ, КОТОРЫЕ <br>
              <span class="smalltext">ДВИЖУТ <span class="text-accent">ВПЕРЁД</span></span>
            </h1>
            <p class="hero-text">
              Ваш бизнес требует надёжных решений? Мы предлагаем широкий выбор фильтров для спецтехники и
              промышленного
              оборудования. Каждый фильтр разработан, чтобы продлить срок службы вашей техники
            </p>
            <div class="catalog-note">
              <p>Не теряйте времени! Откройте каталог и выберите всё необходимое для вашей техники</p>
              <nuxt-link to="/catalog" class="catalog-link">Каталог <svg class="mt-1" width="27" height="16"
                  viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9H26V7H0L0 9Z"
                    fill="white" />
                </svg>
              </nuxt-link>
            </div>
          </div>
          <!-- Hero Image -->
          <div class="hero-image image-floating">
            <img src="/images/freepic.png" alt="Industrial Filters" />
            <img class="image-floating shadowww" src="/images/Rectangle 14.png" />
          </div>
        </div>
      </section>

      <section class="filter-categories">
        <div class="container filter-categoriess" style="padding: 80px; margin: 0 auto;">
          <div class="categories-grid">
            <div class="category-card fuel">
              <NuxtLink to="/products" style="text-decoration: none;">
                <h3>ТОПЛИВНЫЕ ФИЛЬТРЫ</h3>
          </NuxtLink>
              <img src="/images/fuel-filter.png" alt="Топливный фильтр" />
            </div>
            <div class="category-card air">
            <NuxtLink to="/products" style="text-decoration: none;">
                <h3>ВОЗДУШНЫЕ ФИЛЬТРЫ</h3>
          </NuxtLink>
              <img src="/images/air-filter.png" alt="Воздушный фильтр" />
            </div>
            <div class="category-card hydraulic">
            <NuxtLink to="/products" style="text-decoration: none;">
                <h3>ГИДРАВЛИЧЕСКИЕ ФИЛЬТРЫ</h3>
          </NuxtLink>
              <img src="/images/hydraulic-filter.png" alt="Гидравлический фильтр" />
            </div>
            <div class="category-card oil">
            <NuxtLink to="/products" style="text-decoration: none;">
                <h3>МАСЛЯНЫЕ ФИЛЬТРЫ</h3>
          </NuxtLink>
              <img src="/images/oil-filter.png" alt="Масляный фильтр" />
            </div>
            <div class="category-card cabin">
             <NuxtLink to="/products" style="text-decoration: none;">
                <h3>САЛОННЫЕ ФИЛЬТРЫ</h3>
          </NuxtLink>
              <img src="/images/cabin-filter.png" alt="Салонный фильтр" />
            </div>
            <div class="category-card catalog">
              <nuxt-link to="/catalog" class="btn-catalog">
                ПЕРЕЙТИ В<br />КАТАЛОГ
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>

      <section class="why-us">
        <div class="container">
          <h2 class="section-titlee">ПОЧЕМУ ВЫБИРАЮТ НАС?</h2>
          <div class="benefits-container">
            <div class="benefits-image">
              <img class="image-floatingg" src="/images/engine.png" alt="Engine with filters" />
              <img class="image-floatingg shadowwww" src="/images/Rectangle 40.png" />
            </div>
            <div class="benefits-list">
              <div class="benefit-item item-1">
                <h3><span class="text-accent">НАДЁЖНОСТЬ</span>, ПРОВЕРЕННАЯ ВРЕМЕНЕМ</h3>
                <p>Мы предоставляем высококачественные фильтры для спецтехники и промышленного оборудования, гарантируя
                  стабильную работу вашего бизнеса. Наша продукция проходит строгий контроль качества и соответствует
                  всем
                  современным стандартам</p>
              </div>
              <div class="benefit-item item-2">
                <h3>ШИРОКИЙ АССОРТИМЕНТ И СОВМЕСТИМОСТЬ</h3>
                <p>Мы предлагаем решения, которые подходят для строительной, сельскохозяйственной, горнодобывающей и
                  другой техники</p>
              </div>
              <div class="benefit-item item-3">
                <h3 style="">ИНДИВИДУАЛЬНЫЙ ПОДХОД И ПРОФЕССИОНАЛЬНАЯ ПОДДЕРЖКА
                </h3>
                <p>Мы помогаем нашим клиентам на каждом этапе — от подбора фильтров до их доставки</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </div>
    <FilterSearch class="container" style="@media (max-width: 992px) {
            max-width: 900px}" />
    <svg width="0" height="0">
      <defs>
        <clipPath id="custoomClip" clipPathUnits="userSpaceOnUse">
          <path
            d="M9.00493 67.5352C3.24556 73.1779 0 80.9014 0 88.9643V425C0 441.569 13.4315 455 30 455H1858C1874.57 455 1888 441.569 1888 425V30C1888 13.4315 1874.57 0 1858 0H90.1833C82.3331 0 74.7957 3.07704 69.1883 8.57088L9.00493 67.5352Z" />
        </clipPath>
      </defs>
    </svg>
    <svg width="0" height="0">
      <defs>
        <clipPath id="custtomClip" clipPathUnits="userSpaceOnUse">
          <path
            d="M404 20C404 8.95431 395.046 0 384 0H20C8.95431 0 0 8.95431 0 20V239C0 250.046 8.95433 259 20 259H345.335C350.601 259 355.654 256.923 359.398 253.22L398.064 214.98C401.862 211.223 404 206.103 404 200.76V20Z" />
        </clipPath>
      </defs>
    </svg>

    <svg width="0" height="0">
      <defs>
        <clipPath id="customCliip" clipPathUnits="userSpaceOnUse">
          <path
            d="M5.12687 54.6524C1.82612 58.324 0 63.0866 0 68.0237V264C0 275.046 8.95433 284 20 284H1130C1141.05 284 1150 275.046 1150 264V20C1150 8.95431 1141.05 0 1130 0H63.1742C57.5007 0 52.0942 2.40962 48.3011 6.62877L5.12687 54.6524Z" />
        </clipPath>
      </defs>
    </svg>
    <svg width="0" height="0">
      <defs>
        <clipPath id="customCliipp" clipPathUnits="userSpaceOnUse">
          <path
            d="M1.33737 37.4797C0.486534 38.2386 0 39.3246 0 40.4647V116C0 150.209 1.79086 150 4 150H286C288.209 220 290 118.209 290 116V4C290 1.79086 288.209 0 286 0H44.88C43.898 0 42.9502 0.361265 42.2174 1.01497L1.33737 37.4797Z" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { usefilter_typeStore } from '@/store/filter_type';

const filterTypeStore = usefilter_typeStore();
const filterTypes = ref(null);

onMounted(async () => {
  await filterTypeStore.getAllfilter_types();
});
watchEffect(() => {
  filterTypes.value = filterTypeStore.filter_types?.data;
});
const categoryData = computed(() => ({
  filters: { title: 'Виды фильтров', data: filterTypeStore.filter_types?.data },
}));
</script>