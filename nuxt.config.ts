export default defineNuxtConfig({
  ssr: false,
  target: 'server',
  css: [
    'public/assets/home.css', 
  ],
  plugins:  ['~/plugins/pinia.js'],

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
  compatibilityDate: '2025-02-17',
});