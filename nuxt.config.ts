export default defineNuxtConfig({
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
  },

  compatibilityDate: '2025-02-17',

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL
    }
  }
});