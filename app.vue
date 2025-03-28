<template>
  <div>
    <NuxtLayout>
      <LoadingText />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
<script>
import 'typeface-bebas-neue';
import { useCartStore } from '@/store/cart';

onMounted(() => {
  const cartStore = useCartStore();
  cartStore.loadFromLocalStorage();
});
</script>
