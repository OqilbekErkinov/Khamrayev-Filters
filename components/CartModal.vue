<template>
  <Transition name="fade">
    <div v-if="show" class="modal-overlay d-grid" @click.self="$emit('close')"
      style="align-items: center; text-align: center; color: #002B5B;">
      <div class="modal-custom">
        <button @click="$emit('close')" class="close-button" type="button" aria-label="Close">
          ×
        </button>
        <h3 class="modal-title">
          Товар добавлен в корзину
        </h3>
        <img :src="product?.image || 'placeholder.jpg'" :alt="product?.article_number || 'Unknown'" class="product-image" />
        <p class="product-name">{{ product?.article_number ?? 'No Article Number' }}</p>
        <p class="product-quantity">{{ product?.quantity ?? 1 }} шт</p>
        <div class="button-group">
          <NuxtLink to="#">
            <button @click="$emit('continueShopping')" class="prodlojit mb-2 px-3 ps-4 py-2">
              Продолжить покупки
              <div class="prodlojit-border-button" />
            </button>
          </NuxtLink>
          <NuxtLink to="/cart">
            <button @click="$emit('checkout')" class="oformit">
              Оформить
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: Boolean,
  product: Object
});
// defineEmits(['close', 'continueShopping', 'checkout']);

const emit = defineEmits(['close', 'continue-shopping', 'checkout']);

const goToCheckout = () => {
  emit('close');
  
  navigateTo('/cart');
}
</script>