import { defineStore } from "pinia";
import manafacturersService from "@/services/manafacturer.ts";

export const usemanafacturerStore = defineStore("manafacturers", {
  state: () => ({
    manafacturers: [],
    manafacturer: {},
    isLoading: false,
    error: null,
  }),

  actions: {
    async getAllmanafacturers() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await manafacturersService.getManafacturer();
        this.manafacturers = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
