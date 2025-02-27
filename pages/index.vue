<template>
  <div class="home-page">
    <div class="container">

      <section class="hero">
        <div class="container position-relative"> <!-- Added position-relative here -->
          <!-- Hero Content -->
          <div class="hero-content"> <!-- Removed -z-50 -->
            <!-- H1 with lower z-index -->
            <h1 class="hero-title position-relative z-0"> <!-- Changed to z-0 -->
              ТЕХНОЛОГИИ, КОТОРЫЕ <br>
              <span class="smalltext">ДВИЖУТ <span class="text-accent">ВПЕРЁД</span></span>
            </h1>

            <p class="hero-text">
              Ваш бизнес требует надёжных решений? Мы предлагаем <br> широкий выбор фильтров для спецтехники и <br>
              промышленного
              оборудования. Каждый фильтр <br> разработан, чтобы продлить срок службы вашей техники
            </p>

            <!-- Catalog Note with higher z-index -->
            <div class="catalog-note position-relative z-40">
              <p>Не теряйте времени! Откройте каталог и выберите всё необходимое для вашей техники</p>
              <nuxt-link to="/catalog" class="catalog-link">Каталог</nuxt-link>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="hero-image image-floating position-absolute z-30">
            <img src="/images/freepic.png" alt="Industrial Filters" />
            <img class="image-floating shadowww" src="/images/Rectangle 14.png" />
          </div>
        </div>
      </section>

      <section class="filter-categories">
        <div class="container filter-categoriess" style="padding: 80px">
          <div class="categories-grid">
            <div class="category-card fuel">
              <nuxt-link to="/products" style="text-decoration: none">
                <h3>ТОПЛИВНЫЕ ФИЛЬТРЫ</h3>
              </nuxt-link>
              <img src="/images/fuel-filter.png" alt="Топливный фильтр" />
            </div>
            <div class="category-card air">
              <nuxt-link to="/products" style="text-decoration: none">
                <h3>ВОЗДУШНЫЕ ФИЛЬТРЫ</h3>
              </nuxt-link>
              <img src="/images/air-filter.png" alt="Воздушный фильтр" />
            </div>
            <div class="category-card hydraulic">
              <nuxt-link to="/products" style="text-decoration: none">
                <h3>ГИДРАВЛИЧЕСКИЕ ФИЛЬТРЫ</h3>
              </nuxt-link>
              <img src="/images/hydraulic-filter.png" alt="Гидравлический фильтр" />
            </div>
            <div class="category-card oil">
              <nuxt-link to="/products" style="text-decoration: none">
                <h3>МАСЛЯНЫЕ ФИЛЬТРЫ</h3>
              </nuxt-link>
              <img src="/images/oil-filter.png" alt="Масляный фильтр" />
            </div>
            <div class="category-card cabin">
              <nuxt-link to="/products" style="text-decoration: none">
                <h3>САЛОННЫЕ ФИЛЬТРЫ</h3>
              </nuxt-link>
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
              <div class="benefit-item">
                <h3><span class="text-accent">НАДЁЖНОСТЬ</span>, ПРОВЕРЕННАЯ ВРЕМЕНЕМ</h3>
                <p>Мы предоставляем высококачественные фильтры для спецтехники и промышленного оборудования, гарантируя
                  стабильную работу вашего бизнеса. Наша продукция проходит строгий контроль качества и соответствует
                  всем
                  современным стандартам</p>
              </div>
              <div class="benefit-item">
                <h3>ШИРОКИЙ АССОРТИМЕНТ И СОВМЕСТИМОСТЬ</h3>
                <p>Мы предлагаем решения, которые подходят для строительной, сельскохозяйственной, горнодобывающей и
                  другой техники</p>
              </div>
              <div class="benefit-item">
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
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>