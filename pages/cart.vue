<template>
  <div class="container korzina">
    <div class="mb-6">
      <h1 class="korzina-title">КОРЗИНА</h1>
    </div>
    <div class="" style="position: relative;">
      <div class="korzina-carddd p-3" style="display: flex; position: absolute; top: -50px;">
        <div>
          <p></p>
        </div>
        <div>
          <p class="imya" style="font-weight: 100; font-size: 14px; margin-left: 175px; margin-top: 15px">Имя</p>
        </div>
        <div>
          <p class="vid" style="font-weight: 100; font-size: 14px; margin-left: 250px; margin-top: 15px">Вид</p>
        </div>
        <div>
          <p class="proiz" style="font-weight: 100; font-size: 14px; margin-left: 215px; margin-top: 15px">Производитель</p>
        </div>
        <div class="">
          <p></p>
        </div>
      </div>
      <div v-for="product in products" :key="product.id" class="korzina-card px-3 py-2 pt-4 mb-2"
        style="display: flex; justify-content: space-between">
        <img :src="product.image" :alt="product.name" class="" style="width: 70px; height: 40px; margin-top: -1rem" />
        <div class="" style="margin-left: -50px;">
          <NuxtLink to="/product_detail" class="" style="text-decoration: none;">
            <h3 class="PRODUCT_NAME" style="color: #002B5B; font-family: Bebas Neue, sans-serif; margin-top: -0.5rem">{{ product.name }}</h3>
          </NuxtLink>
        </div>
        <div>
          <p style="font-weight: 600; margin-right: -5rem; margin-left: 2rem">{{ product.type }}</p>
        </div>
        <div>
          <p style=" font-family: Bebas Neue, sans-serif; letter-spacing: 1.2px; margin-right: -5rem; margin-left: 8rem" class="">{{ product.firm }}</p>
        </div>
        <div class="adding" style="margin-left: 6rem; margin-right: -4rem">
          <button @click="decrementQuantity(product)" class="" style="margin-left: -15px;">
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_41_2375)">
                <path
                  d="M1.08031 10.0801H16.9203C17.0621 10.0801 17.2026 10.0522 17.3336 9.99786C17.4647 9.94357 17.5838 9.864 17.6841 9.76369C17.7844 9.66337 17.8639 9.54429 17.9182 9.41323C17.9725 9.28216 18.0004 9.1417 18.0004 8.99984C18.0004 8.858 17.9725 8.71753 17.9182 8.58648C17.8639 8.45543 17.7843 8.33635 17.684 8.23605C17.5837 8.13575 17.4647 8.05619 17.3336 8.00192C17.2026 7.94764 17.0621 7.91972 16.9203 7.91974H1.08031C0.796019 7.92306 0.524499 8.03833 0.32464 8.24054C0.12478 8.44275 0.0126953 8.7156 0.0126953 8.99992C0.0126953 9.28423 0.12478 9.55708 0.32464 9.75929C0.524499 9.9615 0.796019 10.0768 1.08031 10.0801Z"
                  fill="#04315B" />
              </g>
              <defs>
                <clipPath id="clip0_41_2375">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <span class="px-2" style="margin-left: 13px;">
            {{ product.quantity }}
          </span>
          <button @click="incrementQuantity(product)" class=" ps-1" style="margin-left: 35px;">
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_41_2372)">
                <path
                  d="M17.0999 8.09999H9.90005V0.899943C9.90005 0.40327 9.49678 0 8.99994 0C8.50326 0 8.09999 0.40327 8.09999 0.899943V8.09999H0.899943C0.40327 8.09999 0 8.50326 0 8.99994C0 9.49678 0.40327 9.90005 0.899943 9.90005H8.09999V17.0999C8.09999 17.5968 8.50326 18 8.99994 18C9.49678 18 9.90005 17.5968 9.90005 17.0999V9.90005H17.0999C17.5968 9.90005 18 9.49678 18 8.99994C18 8.50326 17.5968 8.09999 17.0999 8.09999Z"
                  fill="#04315B" />
              </g>
              <defs>
                <clipPath id="clip0_41_2372">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div class="delete-icon mb-3 me-2">
          <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.2916 8.53404C24.5269 8.29043 24.6571 7.96415 24.6541 7.62548C24.6512 7.28681 24.5153 6.96284 24.2758 6.72336C24.0364 6.48387 23.7124 6.34803 23.3737 6.34509C23.0351 6.34214 22.7088 6.47234 22.4652 6.70762L15.4992 13.6736L8.53325 6.70762C8.41409 6.58426 8.27157 6.48585 8.11398 6.41816C7.95639 6.35046 7.7869 6.31483 7.61539 6.31334C7.44388 6.31185 7.2738 6.34453 7.11506 6.40948C6.95632 6.47443 6.8121 6.57034 6.69082 6.69161C6.56954 6.81289 6.47363 6.95711 6.40869 7.11585C6.34374 7.27459 6.31106 7.44468 6.31255 7.61618C6.31404 7.78769 6.34967 7.95718 6.41737 8.11477C6.48506 8.27236 6.58346 8.41489 6.70683 8.53404L13.6728 15.5L6.70683 22.466C6.58346 22.5851 6.48506 22.7276 6.41737 22.8852C6.34967 23.0428 6.31404 23.2123 6.31255 23.3838C6.31106 23.5553 6.34374 23.7254 6.40869 23.8841C6.47363 24.0429 6.56954 24.1871 6.69082 24.3084C6.8121 24.4297 6.95632 24.5256 7.11506 24.5905C7.2738 24.6555 7.44388 24.6881 7.61539 24.6867C7.7869 24.6852 7.95639 24.6495 8.11398 24.5818C8.27157 24.5141 8.41409 24.4157 8.53325 24.2924L15.4992 17.3264L22.4652 24.2924C22.7088 24.5277 23.0351 24.6579 23.3737 24.6549C23.7124 24.652 24.0364 24.5161 24.2758 24.2766C24.5153 24.0372 24.6512 23.7132 24.6541 23.3745C24.6571 23.0358 24.5269 22.7096 24.2916 22.466L17.3256 15.5L24.2916 8.53404Z"
              fill="#04315B" fill-opacity="0.6" />
          </svg>
        </div>
      </div>
      <div v-for="product in products" :key="product.id" class="mobile-korzina-card"
        style="display: flex; justify-content: space-around">
        <div>
          <img :src="product.image" :alt="product.name" class="" style="width: 70px; height: 40px; margin-top: -1rem" />
        </div>
        <div class="middlee">
          <div class="" style="">
            <NuxtLink to="/product_detail" class="" style="text-decoration: none;">
              <h3 class="" style="color: #002B5B;">{{ product.name }}</h3>
            </NuxtLink>
          </div>
          <div>
            <p class="type" style="font-weight: 600;">{{ product.type }}</p>
          </div>
          <div>
            <p style=" letter-spacing: 1.2px;" class="firmm">{{ product.firm }}</p>
          </div>
          <div class="adding" style="">
            <button @click="decrementQuantity(product)" class="" style="margin-left: -15px;">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_41_2375)">
                  <path
                    d="M1.08031 10.0801H16.9203C17.0621 10.0801 17.2026 10.0522 17.3336 9.99786C17.4647 9.94357 17.5838 9.864 17.6841 9.76369C17.7844 9.66337 17.8639 9.54429 17.9182 9.41323C17.9725 9.28216 18.0004 9.1417 18.0004 8.99984C18.0004 8.858 17.9725 8.71753 17.9182 8.58648C17.8639 8.45543 17.7843 8.33635 17.684 8.23605C17.5837 8.13575 17.4647 8.05619 17.3336 8.00192C17.2026 7.94764 17.0621 7.91972 16.9203 7.91974H1.08031C0.796019 7.92306 0.524499 8.03833 0.32464 8.24054C0.12478 8.44275 0.0126953 8.7156 0.0126953 8.99992C0.0126953 9.28423 0.12478 9.55708 0.32464 9.75929C0.524499 9.9615 0.796019 10.0768 1.08031 10.0801Z"
                    fill="#04315B" />
                </g>
                <defs>
                  <clipPath id="clip0_41_2375">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <span class="px-2" style="margin-left: 13px;">
              {{ product.quantity }}
            </span>
            <button @click="incrementQuantity(product)" class=" ps-1" style="margin-left: 35px;">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_41_2372)">
                  <path
                    d="M17.0999 8.09999H9.90005V0.899943C9.90005 0.40327 9.49678 0 8.99994 0C8.50326 0 8.09999 0.40327 8.09999 0.899943V8.09999H0.899943C0.40327 8.09999 0 8.50326 0 8.99994C0 9.49678 0.40327 9.90005 0.899943 9.90005H8.09999V17.0999C8.09999 17.5968 8.50326 18 8.99994 18C9.49678 18 9.90005 17.5968 9.90005 17.0999V9.90005H17.0999C17.5968 9.90005 18 9.49678 18 8.99994C18 8.50326 17.5968 8.09999 17.0999 8.09999Z"
                    fill="#04315B" />
                </g>
                <defs>
                  <clipPath id="clip0_41_2372">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <div class="delete-icon mb-5 me-0" style="margin-top: -3.5rem">
          <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.2916 8.53404C24.5269 8.29043 24.6571 7.96415 24.6541 7.62548C24.6512 7.28681 24.5153 6.96284 24.2758 6.72336C24.0364 6.48387 23.7124 6.34803 23.3737 6.34509C23.0351 6.34214 22.7088 6.47234 22.4652 6.70762L15.4992 13.6736L8.53325 6.70762C8.41409 6.58426 8.27157 6.48585 8.11398 6.41816C7.95639 6.35046 7.7869 6.31483 7.61539 6.31334C7.44388 6.31185 7.2738 6.34453 7.11506 6.40948C6.95632 6.47443 6.8121 6.57034 6.69082 6.69161C6.56954 6.81289 6.47363 6.95711 6.40869 7.11585C6.34374 7.27459 6.31106 7.44468 6.31255 7.61618C6.31404 7.78769 6.34967 7.95718 6.41737 8.11477C6.48506 8.27236 6.58346 8.41489 6.70683 8.53404L13.6728 15.5L6.70683 22.466C6.58346 22.5851 6.48506 22.7276 6.41737 22.8852C6.34967 23.0428 6.31404 23.2123 6.31255 23.3838C6.31106 23.5553 6.34374 23.7254 6.40869 23.8841C6.47363 24.0429 6.56954 24.1871 6.69082 24.3084C6.8121 24.4297 6.95632 24.5256 7.11506 24.5905C7.2738 24.6555 7.44388 24.6881 7.61539 24.6867C7.7869 24.6852 7.95639 24.6495 8.11398 24.5818C8.27157 24.5141 8.41409 24.4157 8.53325 24.2924L15.4992 17.3264L22.4652 24.2924C22.7088 24.5277 23.0351 24.6579 23.3737 24.6549C23.7124 24.652 24.0364 24.5161 24.2758 24.2766C24.5153 24.0372 24.6512 23.7132 24.6541 23.3745C24.6571 23.0358 24.5269 22.7096 24.2916 22.466L17.3256 15.5L24.2916 8.53404Z"
              fill="#04315B" fill-opacity="0.6" />
          </svg>
        </div>
      </div>
    </div>
    <NuxtLink to="/oformit" class="" style="text-decoration: none;">
      <button class="korzina-oformit">
        Оформить
      </button>
    </NuxtLink>
    <FilterSearch />
  </div>
</template>

<script setup>
import { products } from '@/stores/productStore'

const incrementQuantity = (product) => {
  product.quantity++
}

const decrementQuantity = (product) => {
  if (product.quantity > 1) {
    product.quantity--
  }
}
</script>