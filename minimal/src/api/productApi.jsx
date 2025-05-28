import apiClient from './apiClient';
import { API_ENDPOINTS } from './config';

export const productApi = {
  // Get all products
  getAllProducts: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `${API_ENDPOINTS.PRODUCTS}?${queryString}` : API_ENDPOINTS.PRODUCTS;
    return await apiClient.get(endpoint);
  },

  getProductById: async (id) => {
    return await apiClient.get(`${API_ENDPOINTS.PRODUCT_BY_ID}/${id}`);
  },

  // Get product by slug
  getProductBySlug: async (slug) => {
    return await apiClient.get(`${API_ENDPOINTS.PRODUCT_BY_SLUG}/${slug}`);
  },

  // Search products
  searchProducts: async (query, filters = {}) => {
    const params = { q: query, ...filters };
    return await productApi.getAllProducts(params);
  },

  // Get products by category
  getProductsByCategory: async (category) => {
    return await productApi.getAllProducts({ category });
  },

  // Get featured products
  getFeaturedProducts: async () => {
    return await productApi.getAllProducts({ featured: true });
  },

  // Get products on sale
  getSaleProducts: async () => {
    return await productApi.getAllProducts({ onSale: true });
  }
};
