<script setup lang="ts">
useHead({
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
      crossorigin: "anonymous"
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com"},
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
    { href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap", rel: "stylesheet"},
    
    { rel: "stylesheet", href: "/assets/home.css" },
    { rel: "stylesheet", href: "/assets/appheader.css" },
    { rel: "stylesheet", href: "/assets/appfooter.css" },
    { rel: "stylesheet", href: "/assets/about_us.css" },
    { rel: "stylesheet", href: "/assets/delivery.css" },
    { rel: "stylesheet", href: "/assets/contact.css" },
    { rel: "stylesheet", href: "/assets/products.css" },
    { rel: "stylesheet", href: "/assets/product_detail.css" },
    { rel: "stylesheet", href: "/assets/cartmodal.css" },
    { rel: "stylesheet", href: "/assets/oformit.css" },
    { rel: "stylesheet", href: "/assets/cart.css" },
    { rel: "stylesheet", href: "/assets/catalog.css" },
    { rel: "stylesheet", href: "/assets/filtersearch.css" },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      integrity: "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",
      crossorigin: "anonymous"
    },
    { type: "module", src: "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" },
    { nomodule: true, src: "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" },
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