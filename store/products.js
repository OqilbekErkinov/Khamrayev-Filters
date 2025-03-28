import { defineStore } from "pinia";
import productsService from "@/services/product.ts";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
    product: null,
    filteredProducts: null,
    isLoading: false,
    error: null,
  }),

  actions: {
    async getAllProducts() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await productsService.getProducts();
        this.products = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
    async getProductById(id) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await productsService.getProductById(id);
        this.product = response.data.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
async getProductsByFirm(firmId) {
  this.loading = true;
  try {
    const response = await $fetch('/api/v1/productsfirmfilter/', {
      params: { firm_id: firmId }
    });
    if (response.success) {
      this.filteredProducts = response;
    } else {
      console.error('Failed to fetch products by firm:', response.message);
      this.filteredProducts = { data: [] };
    }
  } catch (error) {
    console.error('Error in getProductsByFirm:', error);
    this.filteredProducts = { data: [] };
  } finally {
    this.loading = false;
  }
},
async getProductsByType(typeId) {
  this.loading = true;
  try {
    const response = await $fetch('/api/v1/productstypefilter/', {
      params: { type_id: typeId }
    });
    if (response.success) {
      this.filteredProducts = response;
    } else {
      console.error('Failed to fetch products by type:', response.message);
      this.filteredProducts = { data: [] };
    }
  } catch (error) {
    console.error('Error in getProductsByType:', error);
    this.filteredProducts = { data: [] };
  } finally {
    this.loading = false;
  }
}
});


