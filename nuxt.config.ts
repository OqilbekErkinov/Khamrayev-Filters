export default defineNuxtConfig({
  css: [
    'public/assets/home.css', // Or the path to your main CSS file
  ],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  compatibilityDate: '2025-02-17',
});