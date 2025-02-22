<template>
  <Transition name="fade" style="">
    <div v-if="show" class="modal-overlay d-grid" @click.self="$emit('close')"
      style="align-items: center; text-align: center; color: #002B5B;">
      <!-- Modal -->
      <div class="modal-custom">
        <!-- Close button -->
        <button @click="$emit('close')" class="close-button" type="button" aria-label="Close">
          ×
        </button>
        <!-- Title -->
        <h3 class="modal-title">
          Товар добавлен в корзину
        </h3>
        <!-- Product info -->
        <img :src="productImage" :alt="productName" class="product-image" />
        <p class="product-name">{{ productName }}</p>
        <p class="product-quantity">{{ quantity }} шт</p>
        <!-- Buttons -->
        <div class="button-group">
          <NuxtLink to="#" class="">
            <button @click="$emit('continueShopping')" class="prodlojit mb-2 ps-4">
              Продолжить покупки
              <div class="prodlojit-border-button" />
            </button>
          </NuxtLink>
          <NuxtLink to="/oformit" class="">
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
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  show: Boolean,
  productName: String,
  productImage: String,
  quantity: Number,
});
const emit = defineEmits(['close', 'continueShopping', 'checkout']);
</script>
