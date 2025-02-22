<template>
    <div class="about-page">
        <!-- About Company Section -->
        <section class="about-company">
            <div class="about-content">
                <h1 class="about-title">О КОМПАНИИ</h1>
                <div class="about-description">
                    <p>
                        Мы – команда профессионалов, специализирующихся на поставках <br> фильтров для спецтехники и
                        промышленного оборудования. Наша <br> миссия – обеспечить надёжную и бесперебойную работу вашего
                        <br>
                        бизнеса с помощью качественных решений, которые соответствуют <br> современным стандартам и
                        требованиям
                    </p>
                    <a href="#" class="contact-btn">
                        Связаться с нами
                        <svg class="ps-2" width="28" height="14" viewBox="0 0 31 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9L30 9V7L0 7L0 9Z"
                                fill="#fff" />
                        </svg>
                    </a>
                </div>
            </div>
            <div class="engine-image">
                <img class="image-floating" src="/images/volumetric.png" alt="Industrial Engine" />
            </div>
        </section>
        <!-- What We Offer Section -->
        <section class="offers-section">
            <div class="offers-grid">
                <div class="filter-cards-grid">
                    <!-- Main Card -->
                    <div class="card about-cards main-card">
                        <h1>3</h1>
                        <h2>НАДЁЖНЫЕ ФИЛЬТРЫ ДЛЯ <br> СПЕЦТЕХНИКИ</h2>
                    </div>
                    <!-- Top Right Card -->
                    <div class="card about-cards numbered-card">
                        <h1 class="number">1/3</h1>
                        <p>
                            Широкий ассортимент фильтров: <br> воздушные, топливные, масляные, <br> гидравлические
                            фильтры для
                            всех <br> типов техники и оборудования
                        </p>
                    </div>
                    <div class="bottom-cards">
                        <!-- Middle Left Card -->
                        <div class="card about-cards numbered-card">
                            <h1 class="number">2/3</h1>
                            <h3 style="position: absolute; left: 15px; bottom: 70px;">РЕШЕНИЯ ДЛЯ ЛЮБЫХ ЗАДАЧ</h3>
                            <p>
                                Наши фильтры подходят для <br> спецтехники, сельскохозяйственного, <br> строительного и
                                промышленного <br> оборудования
                            </p>
                        </div>
                        <!-- Middle Right Card -->
                        <div class="card about-cards numbered-card">
                            <h1 class="number">3/3</h1>
                            <h3 style="position: absolute; left: 15px; bottom: 10px; font-size: 24px">ИНДИВИДУАЛЬНЫЙ
                                ПОДХОД</h3>
                        </div>
                    </div>
                    <!-- Bottom Red Card -->
                    <div class="card about-cards red-card">
                        <h3>СОВРЕМЕННЫЕ РЕШЕНИЯ</h3>
                        <p>
                            Фильтры, которые соответствуют всем <br> актуальным стандартам и <br> требованиям
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AboutUs'
}
</script>