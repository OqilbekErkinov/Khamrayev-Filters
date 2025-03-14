<template>
  <div class="container korzina">
    <div class="mb-6">
      <h1 class="korzina-title">КОРЗИНА</h1>
    </div>

    <div v-if="cartStore.items.length === 0" class="text-center py-8 mb-5">
      <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M82.48 150.002H82.492C82.502 150.002 82.512 150 82.5215 150H218.5C220.13 150 221.715 149.469 223.016 148.487C224.317 147.506 225.263 146.127 225.711 144.561L255.711 39.5605C256.03 38.4445 256.085 37.2698 255.873 36.1287C255.661 34.9876 255.187 33.9113 254.488 32.9845C253.789 32.0576 252.884 31.3056 251.845 30.7877C250.806 30.2699 249.661 30.0002 248.5 30H65.1835L59.8225 5.873C59.452 4.20715 58.5246 2.7174 57.1934 1.64966C55.8621 0.581927 54.2066 2.30484e-05 52.5 0L7.5 0C3.3575 0 0 3.3575 0 7.5C0 11.6425 3.3575 15 7.5 15H46.4845C47.4335 19.275 72.1405 130.459 73.5625 136.855C65.592 140.32 60 148.268 60 157.5C60 169.906 70.094 180 82.5 180H218.5C222.642 180 226 176.643 226 172.5C226 168.357 222.642 165 218.5 165H82.5C78.365 165 75 161.635 75 157.5C75 153.371 78.3535 150.012 82.48 150.002ZM238.557 45L212.842 135H88.516L68.516 45H238.557ZM75 202.5C75 214.906 85.094 225 97.5 225C109.906 225 120 214.906 120 202.5C120 190.094 109.906 180 97.5 180C85.094 180 75 190.094 75 202.5ZM97.5 195C101.635 195 105 198.365 105 202.5C105 206.635 101.635 210 97.5 210C93.365 210 90 206.635 90 202.5C90 198.365 93.365 195 97.5 195ZM181 202.5C181 214.906 191.094 225 203.5 225C215.906 225 226 214.906 226 202.5C226 190.094 215.906 180 203.5 180C191.094 180 181 190.094 181 202.5ZM203.5 195C207.635 195 211 198.365 211 202.5C211 206.635 207.635 210 203.5 210C199.365 210 196 206.635 196 202.5C196 198.365 199.365 195 203.5 195Z"
          fill="#04315B" fill-opacity="0.6" />
      </svg>
      <h1 class="ms-4" style="color: #5F7A93; font-weight: bold">Ваша корзина пуста</h1>
      <div class="pustoy-button">
        <NuxtLink to="/products" class="btn btn-primary mt-4">Перейти к товарам
        <div class="pustoy-button-border" />
        </NuxtLink>
      </div>
    </div>

    <div v-else style="position: relative;">
      <div class="korzina-carddd p-3" style="display: flex; position: absolute; top: -50px;">
        <div>
          <p></p>
        </div>
        <div>
          <p class="imya" style="font-weight: 100; font-size: 14px; margin-left: 240px; margin-top: 15px">Имя</p>
        </div>
        <div>
          <p class="vid" style="font-weight: 100; font-size: 14px; margin-left: 200px; margin-top: 15px">Вид</p>
        </div>
        <div>
          <p class="proiz" style="font-weight: 100; font-size: 14px; margin-left: 155px; margin-top: 15px">Производитель
          </p>
        </div>
        <div class="">
          <p></p>
        </div>
      </div>
      <div v-for="item in cartStore.items" :key="item.id" class="korzina-card px-3 py-2 pt-4 mb-2">
        <img :src="item.image" :alt="item.name" class="" style="width: 70px; height: 40px; margin-top: -1rem" />
        <div class="" style="">
          <NuxtLink to="/product_detail" class="" style="text-decoration: none;">
            <h3 class="PRODUCT_NAME" style="color: #002B5B; font-family: Bebas Neue, sans-serif; margin-top: -0.5rem">
              {{ item.article_number }}</h3>
          </NuxtLink>
        </div>
        <div>
          <p style="font-weight: 600;">{{ item.type }} фильтр</p>
        </div>
        <div>
          <p style=" font-family: Bebas Neue, sans-serif; letter-spacing: 1.2px;" class="">{{ item.firm }}</p>
        </div>
        <div class="adding" style="">
          <button @click="decrementQuantity(item)" class="" style="margin-left: -15px;">
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
            {{ item.quantity }}
          </span>
          <button @click="incrementQuantity(item)" class=" ps-1" style="margin-left: 35px;">
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
        <div @click="removeFromCart(item.id)" class="delete-icon mb-3">
          <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.2916 8.53404C24.5269 8.29043 24.6571 7.96415 24.6541 7.62548C24.6512 7.28681 24.5153 6.96284 24.2758 6.72336C24.0364 6.48387 23.7124 6.34803 23.3737 6.34509C23.0351 6.34214 22.7088 6.47234 22.4652 6.70762L15.4992 13.6736L8.53325 6.70762C8.41409 6.58426 8.27157 6.48585 8.11398 6.41816C7.95639 6.35046 7.7869 6.31483 7.61539 6.31334C7.44388 6.31185 7.2738 6.34453 7.11506 6.40948C6.95632 6.47443 6.8121 6.57034 6.69082 6.69161C6.56954 6.81289 6.47363 6.95711 6.40869 7.11585C6.34374 7.27459 6.31106 7.44468 6.31255 7.61618C6.31404 7.78769 6.34967 7.95718 6.41737 8.11477C6.48506 8.27236 6.58346 8.41489 6.70683 8.53404L13.6728 15.5L6.70683 22.466C6.58346 22.5851 6.48506 22.7276 6.41737 22.8852C6.34967 23.0428 6.31404 23.2123 6.31255 23.3838C6.31106 23.5553 6.34374 23.7254 6.40869 23.8841C6.47363 24.0429 6.56954 24.1871 6.69082 24.3084C6.8121 24.4297 6.95632 24.5256 7.11506 24.5905C7.2738 24.6555 7.44388 24.6881 7.61539 24.6867C7.7869 24.6852 7.95639 24.6495 8.11398 24.5818C8.27157 24.5141 8.41409 24.4157 8.53325 24.2924L15.4992 17.3264L22.4652 24.2924C22.7088 24.5277 23.0351 24.6579 23.3737 24.6549C23.7124 24.652 24.0364 24.5161 24.2758 24.2766C24.5153 24.0372 24.6512 23.7132 24.6541 23.3745C24.6571 23.0358 24.5269 22.7096 24.2916 22.466L17.3256 15.5L24.2916 8.53404Z"
              fill="#04315B" fill-opacity="0.6" />
          </svg>
        </div>
      </div>
      <div v-for="item in cartStore.items" :key="item.id" class="mobile-korzina-card"
        style="display: flex; justify-content: space-around">
        <div>
          <img :src="item.image" :alt="item.name" class=""
            style="width: 90px; height: 40px;" />
        </div>
        <div class="middlee">
          <div class="" style="">
            <NuxtLink to="/product_detail" class="" style="text-decoration: none;">
              <h3 class="" style="color: #002B5B;">{{ item.article_number }}</h3>
            </NuxtLink>
          </div>
          <div>
            <p class="type" style="font-weight: 600;">{{ item.type }} фильтр</p>
          </div>
          <div>
            <p style=" letter-spacing: 1.2px;" class="firmm">{{ item.firm }}</p>
          </div>
          <div class="adding" style="">
            <button @click="decrementQuantity(item)" class="" style="margin-left: -15px;">
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
              {{ item.quantity ?? 1 }}
            </span>
            <button @click="incrementQuantity(item)" class=" ps-1" style="margin-left: 35px;">
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
        <div @click="removeFromCart(item.id)" class="delete-icon mb-4 me-0" style="margin-top: -3.5rem">
          <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.2916 8.53404C24.5269 8.29043 24.6571 7.96415 24.6541 7.62548C24.6512 7.28681 24.5153 6.96284 24.2758 6.72336C24.0364 6.48387 23.7124 6.34803 23.3737 6.34509C23.0351 6.34214 22.7088 6.47234 22.4652 6.70762L15.4992 13.6736L8.53325 6.70762C8.41409 6.58426 8.27157 6.48585 8.11398 6.41816C7.95639 6.35046 7.7869 6.31483 7.61539 6.31334C7.44388 6.31185 7.2738 6.34453 7.11506 6.40948C6.95632 6.47443 6.8121 6.57034 6.69082 6.69161C6.56954 6.81289 6.47363 6.95711 6.40869 7.11585C6.34374 7.27459 6.31106 7.44468 6.31255 7.61618C6.31404 7.78769 6.34967 7.95718 6.41737 8.11477C6.48506 8.27236 6.58346 8.41489 6.70683 8.53404L13.6728 15.5L6.70683 22.466C6.58346 22.5851 6.48506 22.7276 6.41737 22.8852C6.34967 23.0428 6.31404 23.2123 6.31255 23.3838C6.31106 23.5553 6.34374 23.7254 6.40869 23.8841C6.47363 24.0429 6.56954 24.1871 6.69082 24.3084C6.8121 24.4297 6.95632 24.5256 7.11506 24.5905C7.2738 24.6555 7.44388 24.6881 7.61539 24.6867C7.7869 24.6852 7.95639 24.6495 8.11398 24.5818C8.27157 24.5141 8.41409 24.4157 8.53325 24.2924L15.4992 17.3264L22.4652 24.2924C22.7088 24.5277 23.0351 24.6579 23.3737 24.6549C23.7124 24.652 24.0364 24.5161 24.2758 24.2766C24.5153 24.0372 24.6512 23.7132 24.6541 23.3745C24.6571 23.0358 24.5269 22.7096 24.2916 22.466L17.3256 15.5L24.2916 8.53404Z"
              fill="#04315B" fill-opacity="0.6" />
          </svg>
        </div>
      </div>
    </div>
    <button v-if="cartStore.items.length >>> 0"
      class="korzina-oformit" @click="goToCheckout">Оформить</button>
    <FilterSearch />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/store/products';
import { useCartStore } from '@/store/cart';
const router = useRouter();
const productStore = useProductStore();
const cartStore = useCartStore();
const cartItems = computed(() => cartStore.items || []);
onMounted(() => {
  productStore.getAllProducts();
  cartStore.loadFromLocalStorage();
  console.log('Cart mounted, items:', cartStore.items);
});
const incrementQuantity = (item) => {
  cartStore.updateQuantity(item.id, item.quantity + 1);
};
const decrementQuantity = (item) => {
  if (item.quantity > 1) {
    cartStore.updateQuantity(item.id, item.quantity - 1);
  }
};
const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};
const goToCheckout = () => {
  console.log('Go to checkout clicked');
  console.log('Cart items before navigation:', cartStore.items);
  if (cartStore.items.length === 0) {
    alert('Корзина пуста. Добавьте товары в корзину.');
    return;
  }
  cartStore.saveToLocalStorage();
  console.log('localStorage cart data:', localStorage.getItem('cart'));
  try {
    router.push('/oformit');
    console.log('Navigation attempted');
  } catch (error) {
    console.error('Navigation error:', error);
  }
};
</script>