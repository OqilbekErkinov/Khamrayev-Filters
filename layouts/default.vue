<script setup lang="ts">
useHead({
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
      crossorigin: "anonymous"
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
    { href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap", rel: "stylesheet" },
    { href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css", rel: "stylesheet" },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      integrity: "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",
      crossorigin: "anonymous"
    },
  ]
})
</script>
<template>
  <div>
    <Appheader />
    <main>
      <Modal />
      <slot />
    </main>
    <Appfooter />
  </div>
</template>