import { productApi } from '../../api/productApi';

// Action Types
export const PRODUCT_ACTIONS = {
  FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE',
  
  FETCH_PRODUCT_DETAIL_REQUEST: 'FETCH_PRODUCT_DETAIL_REQUEST',
  FETCH_PRODUCT_DETAIL_SUCCESS: 'FETCH_PRODUCT_DETAIL_SUCCESS',
  FETCH_PRODUCT_DETAIL_FAILURE: 'FETCH_PRODUCT_DETAIL_FAILURE',
  
  SET_PRODUCTS_FILTER: 'SET_PRODUCTS_FILTER',
  CLEAR_PRODUCTS_FILTER: 'CLEAR_PRODUCTS_FILTER',
};

// Action Creators
export const fetchProductsRequest = () => ({
  type: PRODUCT_ACTIONS.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: PRODUCT_ACTIONS.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: PRODUCT_ACTIONS.FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProductDetailRequest = () => ({
  type: PRODUCT_ACTIONS.FETCH_PRODUCT_DETAIL_REQUEST,
});

export const fetchProductDetailSuccess = (product) => ({
  type: PRODUCT_ACTIONS.FETCH_PRODUCT_DETAIL_SUCCESS,
  payload: product,
});

export const fetchProductDetailFailure = (error) => ({
  type: PRODUCT_ACTIONS.FETCH_PRODUCT_DETAIL_FAILURE,
  payload: error,
});

export const setProductsFilter = (filter) => ({
  type: PRODUCT_ACTIONS.SET_PRODUCTS_FILTER,
  payload: filter,
});

export const clearProductsFilter = () => ({
  type: PRODUCT_ACTIONS.CLEAR_PRODUCTS_FILTER,
});

// Thunk Actions
export const fetchProducts = (params = {}) => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const response = await productApi.getAllProducts(params);
      dispatch(fetchProductsSuccess(response.data || response));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};

export const fetchProductDetail = (id) => {
  return async (dispatch) => {
    dispatch(fetchProductDetailRequest());
    try {
      const response = await productApi.getProductById(id);
      dispatch(fetchProductDetailSuccess(response.data || response));
    } catch (error) {
      dispatch(fetchProductDetailFailure(error.message));
    }
  };
};

export const fetchProductBySlug = (slug) => {
  return async (dispatch) => {
    dispatch(fetchProductDetailRequest());
    try {
      const response = await productApi.getProductBySlug(slug);
      dispatch(fetchProductDetailSuccess(response.data || response));
    } catch (error) {
      dispatch(fetchProductDetailFailure(error.message));
    }
  };
};