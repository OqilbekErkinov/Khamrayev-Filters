<template>
    <div class="about-page">
        <!-- About Company -->
        <section class="about-company">
            <div class="about-content">
                <h1 class="about-title">О КОМПАНИИ</h1>
                <div class="about-description">
                    <p>
                        Мы – команда профессионалов, специализирующихся на поставках фильтров для спецтехники и
                        промышленного оборудования. Наша миссия – обеспечить надёжную и бесперебойную работу вашего
                        бизнеса с помощью качественных решений, которые соответствуют современным стандартам и
                        требованиям
                    </p>
                    <NuxtLink to="/contact" class="contact-btn" style="text-decoration: none;">
                        Связаться с нами
                        <svg class="ms-2" width="26" height="15" viewBox="0 0 27 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9H26V7H0L0 9Z"
                                fill="white" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>
            <div class="engine-image d-grid" style="z-index: auto;">
                <img class="image-floating  engine" src="/images-webp/volumetric.webp" alt="Industrial Engine" />
                <img class="image-floating shadoww" src="/images-webp/Rectangle.webp" />
            </div>
        </section>
        <!-- Offers Section -->
        <section class="offers-section">
            <h1 class="sectionn-title">Что мы предлагаем?</h1>
            <div class="offers-grid">
                <div class="filter-cards-grid">
                    <div class="card about-cards main-card">
                        <h1>3</h1>
                        <h2>НАДЁЖНЫЕ ФИЛЬТРЫ ДЛЯ <br> СПЕЦТЕХНИКИ</h2>
                    </div>
                    <div class="card about-cards numbered-card numcard">
                        <h1 class="number">1/3</h1>
                        <p>
                            Широкий ассортимент фильтров: <br> воздушные, топливные, масляные, <br> гидравлические
                            фильтры для
                            всех <br> типов техники и оборудования
                        </p>
                    </div>
                    <div class="bottom-cards">
                        <div class="card about-cards numbered-card ">
                            <h1 class="number">2/3</h1>
                            <h3 style="position: absolute; left: 15px; bottom: 70px;">РЕШЕНИЯ ДЛЯ ЛЮБЫХ ЗАДАЧ</h3>
                            <p>
                                Наши фильтры подходят для <br> спецтехники, сельскохозяйственного, <br> строительного и
                                промышленного <br> оборудования
                            </p>
                        </div>
                        <div class="card about-cards numbered-card nummcard">
                            <h1 class="number">3/3</h1>
                            <h3 style="position: absolute; left: 15px; bottom: -7px; font-size: 24px">ИНДИВИДУАЛЬНЫЙ
                                ПОДХОД</h3>
                        </div>
                    </div>
                    <div class="card about-cards red-card">
                        <h3>СОВРЕМЕННЫЕ РЕШЕНИЯ</h3>
                        <p>
                            Фильтры, которые соответствуют всем <br> актуальным стандартам и <br> требованиям
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <svg width="0" height="0">
            <defs>
                <clipPath id="customCclip" clipPathUnits="userSpaceOnUse">
                    <path
                        d="M5.12687 54.6524C1.82612 58.324 0 63.0866 0 68.0237V264C0 275.046 8.95433 284 20 284H1130C1141.05 284 1150 275.046 1150 264V20C1150 8.95431 1141.05 0 1130 0H63.1742C57.5007 0 52.0942 2.40962 48.3011 6.62877L5.12687 54.6524Z" />
                </clipPath>
            </defs>
        </svg>
        <svg width="0" height="0">
            <defs>
                <clipPath id="customClippp" clipPathUnits="userSpaceOnUse">
                    <path
                        d="M5.12687 54.6524C1.82612 58.324 0 63.0866 0 68.0237V264C0 275.046 8.95433 284 20 284H1130C1141.05 284 1150 275.046 1150 264V20C1150 8.95431 1141.05 0 1130 0H63.1742C57.5007 0 52.0942 2.40962 48.3011 6.62877L5.12687 54.6524Z" />
                </clipPath>
            </defs>
        </svg>
        <svg width="0" height="0">
            <defs>
                <clipPath id="cuustomClip" clipPathUnits="userSpaceOnUse">
                    <path
                        d="M5.12687 54.6524C1.82612 58.324 0 63.0866 0 68.0237V264C0 275.046 8.95433 284 20 284H1130C1141.05 284 1150 275.046 1150 264V20C1150 8.95431 1141.05 0 1130 0H63.1742C57.5007 0 52.0942 2.40962 48.3011 6.62877L5.12687 54.6524Z" />
                </clipPath>
            </defs>
        </svg>
        <Partners />
    </div>
</template>