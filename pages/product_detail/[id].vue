<template>
    <div class="container">
        <div class="products-detail-container" style="display: flex; position: relative; ">
            <div class="me-3 glavni" style="min-width: 900px;">
                <!-- Main products Section -->
                <div class="row mb-4">
                    <div class="col-md-12">
                        <div class="products-main">
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="card cardd-detail" style="max-width: 95%">
                                        <div class="card-body d-flex align-items-center">
                                            <div class="products-image-container">
                                                <img :src="productStore?.product?.image"
                                                    :alt="productStore?.product?.article_number" class="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="card h-70 products_info"
                                        style="background-color: #f4f4f4; min-width: 105%; margin-left: -30px; padding: 5px;">
                                        <div class="card-body">
                                            <h1 class="products-title">{{ productStore?.product?.type }}</h1>
                                            <h1 class="products-firm mb-2">{{ productStore?.product?.firm }}</h1>
                                            <div class="article-number mb-1">
                                                <div class="d-flex align-items-center">
                                                    <span class="me-4">Артикул:</span>
                                                    <span class="ms-3 fw-medium" style="letter-spacing: 1.1px">
                                                        {{ productStore?.product?.article_number }}</span>
                                                </div>
                                            </div>
                                            <div class="products-type mb-2">
                                                <span class="me-3">Вид:</span>
                                                <span class="ms-5">{{ productStore?.product?.type }}</span>
                                            </div>
                                            <div class="mb-2"
                                                style="background-color: #fcfbfb; padding: 10px 10px 2px 10px; border-radius: 5px;">
                                                <h2 class="description-title mb-2"
                                                    style="font-size: 16px; font-weight: 600; transform: scaleY(1.3)">
                                                    ОПИСАНИЕ</h2>
                                                <p class="text" style="font-size: 13px; color: #002B5B">
                                                    {{ productStore?.product?.description.slice(0, 220) }}...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mobile-purchase-section text-white p-4 d-grid"
                                    style="max-height: 323px; align-items: center; min-width: 220px; text-align: center;">
                                    <span style="font-size: 14px; font-weight: 300;">Стоимость: запрос цены</span>
                                    <div class="pt-4 ">
                                        <img style="width: 20px; height: 20px; margin-right: 5px"
                                            src="/images/Group (1).png" />
                                        <span class="nachali">В НАЛИЧИИ</span>
                                    </div>
                                    <span class="kolichestvo"
                                        style="font-weight: 100; letter-spacing: 1.1px; margin-bottom: -27px; font-family: Clash Display, sans-serif;">Количество</span>
                                    <div class="quantity-control">
                                        <button @click="decrementQuantity()">
                                            <svg width="14" height="14" viewBox="0 0 18 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1.08 10.08H16.92C17.06 10.08 17.2 10.05 17.33 9.99C17.46 9.94 17.58 9.86 17.68 9.76C17.78 9.66 17.86 9.54 17.91 9.41C17.97 9.28 18 9.14 18 8.99C18 8.85 17.97 8.71 17.91 8.58C17.86 8.45 17.78 8.33 17.68 8.23C17.58 8.13 17.46 8.05 17.33 8C17.2 7.94 17.06 7.91 16.92 7.91H1.08C0.79 7.92 0.52 8.03 0.32 8.24C0.12 8.44 0.01 8.71 0.01 8.99C0.01 9.28 0.12 9.55 0.32 9.75C0.52 9.96 0.79 10.07 1.08 10.08Z"
                                                    fill="#fff" />
                                            </svg>
                                        </button>
                                        <span class="quantityy">{{ product.quantity }}</span>
                                        <button @click="incrementQuantity()">
                                            <svg width="14" height="14" viewBox="0 0 18 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.1 8.1H9.9V0.9C9.9 0.4 9.5 0 9 0C8.5 0 8.1 0.4 8.1 0.9V8.1H0.9C0.4 8.1 0 8.5 0 9C0 9.5 0.4 9.9 0.9 9.9H8.1V17.1C8.1 17.6 8.5 18 9 18C9.5 18 9.9 17.6 9.9 17.1V9.9H17.1C17.6 9.9 18 9.5 18 9C18 8.5 17.6 8.1 17.1 8.1Z"
                                                    fill="#fff" />
                                            </svg>
                                        </button>
                                    </div>
                                    <button @click="addToCart" class="btn btn-primary w-100"
                                        style="font-weight: 100; font-family: Clash Display, sans-serif;">
                                        Добавить в корзину
                                        <div class="dobavits-border-button" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Technical Specifications -->
                <div class="row mb-4 technic-info">
                    <div class="col-md-12 technic-detail">
                        <div class="card technic-detaill" style="background-color: #f4f4f4; padding: 7px">
                            <div class="card-body">
                                <h2 class="specs-title mb-3">ТЕХНИЧЕСКИЕ ХАРАКТИРИСТИКИ</h2>
                                <div class="row">
                                    <div v-for="(value, key) in productStore?.product?.specifications" :key="key"
                                        class="col-md-6">
                                        <div class="spec-item d-flex justify-content-between p-2">
                                            <span class="text-label">{{ key }}:</span>
                                            <span class="">{{ value }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Delivery and Payment -->
                <div class="row delivery-payment-info mt-5">
                    <div class="col-md-6 mb-4 delivery-detail">
                        <div class="card h-100 ms-0 ps-0 delivery-payment-detaill"
                            style="background: none; border: none; box-shadow: none">
                            <div class="card-body p-0">
                                <h2 class="info-title mb-4">ДОСТАВКА</h2>
                                <ul class="custom-list">
                                    <li v-for="(item, index) in deliveryInfo" :key="index" class="delivery-item">
                                        <span>{{ item }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4 payment-detail">
                        <div class="card h-100 delivery-payment-detaill"
                            style="background: none; border: none; box-shadow: none; margin-left: 4rem">
                            <div class="card-body p-0">
                                <h2 class="info-title mb-4">СПОСОБЫ ОПЛАТЫ ЗАКАЗА</h2>
                                <ul class="custom-list">
                                    <li v-for="(method, index) in paymentMethods" :key="index" class="payment-item"
                                        style="max-width: 330px">
                                        <span>{{ method }}</span>
                                    </li>
                                </ul>
                                <NuxtLink to='/delivery'>
                                <button class="podrobno mt-5">
                                    Подробнее
                                    <svg class="ms-4 me-2" width="24" height="12" viewBox="0 0 31 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9L30 9V7L0 7L0 9Z"
                                            fill="#04315B" />
                                    </svg>
                                    <div class="podrobno-border-button" />
                                </button>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Purchase Section -->
            <div class="purchase-section text-white p-4 d-grid"
                style="max-height: 337px; align-items: center; min-width: 220px; text-align: center;">
                <span style="font-size: 14px; font-weight: 300;">Стоимость: запрос цены</span>
                <div class="pt-4">
                    <img style="width: 20px; height: 20px; margin-right: 5px" src="/images/Group (1).png" />
                    <span class="nachali">В НАЛИЧИИ</span>
                </div>
                <span class="kolichestvo"
                    style="font-weight: 100; letter-spacing: 1.1px; margin-bottom: -27px; font-family: Clash Display, sans-serif;">Количество</span>
                <div class="quantity-control">
                    <button @click="decrementQuantity()">
                        <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.08 10.08H16.92C17.06 10.08 17.2 10.05 17.33 9.99C17.46 9.94 17.58 9.86 17.68 9.76C17.78 9.66 17.86 9.54 17.91 9.41C17.97 9.28 18 9.14 18 8.99C18 8.85 17.97 8.71 17.91 8.58C17.86 8.45 17.78 8.33 17.68 8.23C17.58 8.13 17.46 8.05 17.33 8C17.2 7.94 17.06 7.91 16.92 7.91H1.08C0.79 7.92 0.52 8.03 0.32 8.24C0.12 8.44 0.01 8.71 0.01 8.99C0.01 9.28 0.12 9.55 0.32 9.75C0.52 9.96 0.79 10.07 1.08 10.08Z"
                                fill="#fff" />
                        </svg>
                    </button>
                    <span class="quantityy">
                        {{ product.quantity }}
                    </span>
                    <button @click="incrementQuantity()">
                        <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.1 8.1H9.9V0.9C9.9 0.4 9.5 0 9 0C8.5 0 8.1 0.4 8.1 0.9V8.1H0.9C0.4 8.1 0 8.5 0 9C0 9.5 0.4 9.9 0.9 9.9H8.1V17.1C8.1 17.6 8.5 18 9 18C9.5 18 9.9 17.6 9.9 17.1V9.9H17.1C17.6 9.9 18 9.5 18 9C18 8.5 17.6 8.1 17.1 8.1Z"
                                fill="#fff" />
                        </svg>
                    </button>
                </div>
                <button @click="addToCart()" class="btn btn-primary w-100"
                    style="font-weight: 100; font-family: Clash Display, sans-serif;">
                    Добавить в корзину
                    <div class="dobavits-border-button" />
                </button>
            </div>
            <CartModal :show="showCartModal" :product="selectedProduct" @close="closeModal"
                @continue-shopping="continueShopping" @checkout="goToCheckout" />
        </div>
        <FilterSearch />
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import CartModal from '/components/CartModal.vue';
import { useProductStore } from '@/store/products';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/store/cart'

const route = useRoute();
const productStore = useProductStore();
const showCartModal = ref(false);
const selectedProduct = ref(null);
const cartStore = useCartStore();

const incrementQuantity = () => {
  product.value.quantity = (product.value.quantity || 1) + 1;
};
const decrementQuantity = () => {
  product.value.quantity = Math.max((product.value.quantity || 1) - 1, 1);
};
const closeModal = () => {
  showCartModal.value = false;
}
const continueShopping = () => {
  showCartModal.value = false;
}
const goToCheckout = () => {
  showCartModal.value = false;
}
const product = ref({
  quantity: 1
});
const deliveryInfo = ref([
    'Khamraev filters осуществляет доставку lf3657 в любую точку России, В Страны СНГ и дальнего зарубежья',
    'Доставка товара до терминалов транспортных компаний производится за наш счет. Клиент может выбрать любую другую тк',
    'После подтверждения заказа, вы можете оформить самовывоз в любом нашем филиале'
]);
const paymentMethods = ref([
    'Безналичная оплата для юридических лиц наличные',
    'Банковской картой для физических лиц'
]);
const addToCart = () => {
  if (!productStore.product) return;
  const productToAdd = {
    id: productStore.product.id,
    article_number: productStore.product.article_number,
    firm: productStore.product.firm,
    type: productStore.product.type,
    image: productStore.product.image,
    quantity: product.value.quantity || 1
  };
  cartStore.addToCart(productToAdd);
  selectedProduct.value = productToAdd;
  showCartModal.value = true;
}
const fetchProduct = async () => {
    console.log("Fetching product with ID:", route.params.id);
    await productStore.getProductById(route.params.id);
    console.log("API Response:", productStore.products);
    if (productStore.products?.data) {
        selectedProduct.value = productStore.products.data;
    } else {
        console.error("No product data found.");
    }
    console.log("Selected Product:", selectedProduct.value);
};

onMounted(() => {
  if (productStore.product) {
    product.value = {
      ...productStore.product,
      quantity: 1
    };
  }
});
onMounted(() => {
  productStore.getAllProducts();
});
onMounted(() => {
    productStore.getProductById(route.params.id);
});

watch(() => productStore.products, fetchProduct, { deep: true });
watch(() => productStore.product, (newProduct) => {
  if (newProduct) {
    const currentQuantity = product.value.quantity || 1;
    product.value = {
      ...newProduct,
      quantity: currentQuantity
    };
  }
}, { immediate: true });
</script>