// store/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  
  actions: {
    addToCart(product) {
      // Check if product already exists in cart
      const existingProduct = this.items.find(item => item.id === product.id);
      
      if (existingProduct) {
        // Update quantity if product exists
        existingProduct.quantity += product.quantity;
      } else {
        // Add new product to cart
        this.items.push(product);
      }
      
      // Optionally save to localStorage for persistence
      this.saveToLocalStorage();
    },
    
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId);
      this.saveToLocalStorage();
    },
    
    updateQuantity(productId, quantity) {
      const product = this.items.find(item => item.id === productId);
      if (product) {
        product.quantity = quantity;
        this.saveToLocalStorage();
      }
    },
    
    clearCart() {
      this.items = [];
      this.saveToLocalStorage();
    },
    
    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.items));
    },
    
    loadFromLocalStorage() {
      const saved = localStorage.getItem('cart');
      if (saved) {
        this.items = JSON.parse(saved);
      }
    }
  },
  
  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    
    totalPrice: (state) => {
      // If you have price information, calculate total
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  }
});