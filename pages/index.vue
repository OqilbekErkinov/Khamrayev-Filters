<template>
  <div class="home-page">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            ТЕХНОЛОГИИ, КОТОРЫЕ <br>
            <span class="smalltext">ДВИЖУТ <span class="text-accent">ВПЕРЁД</span></span>
          </h1>
          <p class="hero-text">
            Ваш бизнес требует надёжных решений? Мы предлагаем <br> широкий выбор фильтров для спецтехники и <br>
            промышленного
            оборудования. Каждый фильтр <br> разработан, чтобы продлить срок службы вашей техники
          </p>
          <div class="catalog-note">
            <p>Не теряйте времени! <br> Откройте каталог и выберите <br> всё необходимое для вашей <br> техники</p>
            <nuxt-link to="/catalog" class="catalog-link">Каталог</nuxt-link>
          </div>
        </div>
        <div class="hero-image image-floating">
          <img src="/images/freepic.png" alt="Industrial Filters" />
        </div>
      </div>
    </section>

    <section class="filter-categories">
      <div class="container" style="padding: 80px">
        <div class="categories-grid">
          <div class="category-card fuel">
            <h3>ТОПЛИВНЫЕ<br />ФИЛЬТРЫ</h3>
            <img src="/images/fuel-filter.png" alt="Топливный фильтр" />
          </div>
          <div class="category-card air">
            <h3>ВОЗДУШНЫЕ<br />ФИЛЬТРЫ</h3>
            <img src="/images/air-filter.png" alt="Воздушный фильтр" />
          </div>
          <div class="category-card hydraulic">
            <h3>ГИДРАВЛИЧЕСКИЕ<br />ФИЛЬТРЫ</h3>
            <img src="/images/hydraulic-filter.png" alt="Гидравлический фильтр" />
          </div>
          <div class="category-card oil">
            <h3>МАСЛЯНЫЕ<br />ФИЛЬТРЫ</h3>
            <img src="/images/oil-filter.png" alt="Масляный фильтр" />
          </div>
          <div class="category-card cabin">
            <h3>САЛОННЫЕ<br />ФИЛЬТРЫ</h3>
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
            <img class="image-floating" src="/images/engine.png" alt="Engine with filters" />
          </div>
          <div class="benefits-list">
            <div class="benefit-item">
              <h3><span class="text-accent">НАДЁЖНОСТЬ</span>, ПРОВЕРЕННАЯ ВРЕМЕНЕМ</h3>
              <p>Мы предоставляем высококачественные фильтры для спецтехники и промышленного оборудования, гарантируя
                стабильную работу вашего бизнеса. Наша продукция проходит строгий контроль качества и соответствует всем
                современным стандартам</p>
            </div>
            <div class="benefit-item">
              <h3>ШИРОКИЙ АССОРТИМЕНТ И СОВМЕСТИМОСТЬ</h3>
              <p>Мы предлагаем решения, которые подходят для строительной, сельскохозяйственной, горнодобывающей и
                другой техники</p>
            </div>
            <div class="benefit-item">
              <h3 style="font-size: 21px; letter-spacing: -1px;">ИНДИВИДУАЛЬНЫЙ ПОДХОД И ПРОФЕССИОНАЛЬНАЯ ПОДДЕРЖКА</h3>
              <p>Мы помогаем нашим клиентам на каждом этапе — от подбора фильтров до их доставки</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>