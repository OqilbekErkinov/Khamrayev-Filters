import { defineStore } from "pinia";
import brandsService from "@/services/brand.ts";

export const useBrandStore = defineStore("brands", {
  state: () => ({
    brands: [],
    brand: {},
    isLoading: false,
    error: null,
  }),

  actions: {
    async getAllbrands() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await brandsService.getBrand();
        this.brands = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
