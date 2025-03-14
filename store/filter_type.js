import { defineStore } from "pinia";
import filter_typesService from "@/services/filter_type.ts";

export const usefilter_typeStore = defineStore("filter_types", {
  state: () => ({
    filter_types: [],
    filter_type: {},
    isLoading: false,
    error: null,
  }),

  actions: {
    async getAllfilter_types() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await filter_typesService.getFilter_type();
        this.filter_types = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
