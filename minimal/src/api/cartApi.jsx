import apiClient from './apiClient';
import { API_ENDPOINTS } from './config';

export const cartApi = {
  // Get cart items
  getCart: async () => {
    return await apiClient.get(API_ENDPOINTS.CART);
  },

  // Add item to cart
  addToCart: async (productId, quantity = 1, selectedColor = null) => {
    return await apiClient.post(API_ENDPOINTS.ADD_TO_CART, {
      productId,
      quantity,
      selectedColor
    });
  },

  // Remove item from cart
  removeFromCart: async (itemId) => {
    return await apiClient.delete(`${API_ENDPOINTS.REMOVE_FROM_CART}/${itemId}`);
  },

  // Update cart item quantity
  updateCartItem: async (itemId, quantity) => {
    return await apiClient.put(`${API_ENDPOINTS.UPDATE_CART}/${itemId}`, {
      quantity
    });
  },

  // Clear entire cart
  clearCart: async () => {
    return await apiClient.delete(API_ENDPOINTS.CLEAR_CART);
  }
};