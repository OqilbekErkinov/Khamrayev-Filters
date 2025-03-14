<template>
  <div>
    <div class="container partners-section">
        <h2 class="partners-title">НАШИ ПАРТНЕРЫ</h2>
        <div class="partners-grid">
            <img src="/images/fleet.png" alt="Fleetguard" class="partner-logo1" />
            <img src="/images/hifi.png" alt="HIFI FILTER" class="partner-logo2" />
            <img src="/images/donald.png" alt="Donaldson" class="partner-logo3" />
            <img src="/images/parker.png" alt="Parker" class="partner-logo4" />
        </div>
    </div>
  <div id="carouselExampleSlidesOnly" class="carousel slide container carusel-section" data-bs-ride="carousel">
    <h2 class="carusel-title">НАШИ ПАРТНЕРЫ</h2>
    <div class="carousel-inner carusel-grid">
      <div class="carousel-item active">
        <img src="/images/doring.png" alt="Fleetguard" class="carusel-logo1" />
      </div>
      <div class="carousel-item">
        <img src="/images/hi-fi-filter.png" alt="HIFI FILTER" class="carusel-logo2" />
      </div>
      <div class="carousel-item">
        <img src="/images/donald.png" alt="Donaldson" class="carusel-logo3" />
      </div>
      <div class="carousel-item">
        <img src="/images/parker.png" alt="Parker" class="carusel-logo4" />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" style="color: #04315b" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" style="color: #04315b" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>
</template>

<script setup>
import Swiper from 'swiper';
import 'swiper/css';
</script>