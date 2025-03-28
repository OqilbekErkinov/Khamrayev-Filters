export default defineNuxtConfig({
  ssr: true,
  target: 'server',
  plugins:  [
    '~/plugins/pinia.js',
    '~/plugins/yandex-maps.client.js',
    '~/plugins/fontawesome.js',
  ],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    analyze: false,
    extractCSS: true,
    terser: true,
    optimizeCSS: true,
  },
  nitro: {
    preset: 'node-server',
  },
  experimental: {
    payloadExtraction: true,
    componentIslands: true,
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_URL || 'https://filters.divspan.uz',
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    }
  },
  css: [
    "~/assets/css/home.css",
    "~/assets/css/appheader.css" ,
    "~/assets/css/appfooter.css",
    "~/assets/css/about_us.css" ,
    "~/assets/css/delivery.css" ,
    "~/assets/css/contact.css" ,
    "~/assets/css/products.css" ,
    "~/assets/css/product_detail.css",
    "~/assets/css/cartmodal.css",
    "~/assets/css/oformit.css" ,
    "~/assets/css/cart.css" ,
    "~/assets/css/catalog.css" ,
    "~/assets/css/filtersearch.css" ,
    "~/assets/css/models.css" ,
    "~/assets/css/partners.css",
  ],
  compatibilityDate: '2025-02-17',
});