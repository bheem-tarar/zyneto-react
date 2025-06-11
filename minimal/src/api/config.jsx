const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const API_ENDPOINTS = {
  // Products
  PRODUCTS: '/products',
  PRODUCT_BY_ID: '/products',
  PRODUCT_BY_SLUG: '/products/slug',
  
  // Categories
  CATEGORIES: '/categories',
  
  // Cart
  CART: '/cart',
  ADD_TO_CART: '/cart/add',
  REMOVE_FROM_CART: '/cart/remove',
  UPDATE_CART: '/cart/update',
  CLEAR_CART: '/cart/clear',
  
  // User
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  PROFILE: '/user/profile',
  
  // Orders
  ORDERS: '/orders',
  CREATE_ORDER: '/orders/create',
};

export { API_BASE_URL };
//url endpoint pages