import { cartApi } from '../../api/cartApi';

// Action Types
export const CART_ACTIONS = {
  FETCH_CART_REQUEST: 'FETCH_CART_REQUEST',
  FETCH_CART_SUCCESS: 'FETCH_CART_SUCCESS',
  FETCH_CART_FAILURE: 'FETCH_CART_FAILURE',
  
  ADD_TO_CART_REQUEST: 'ADD_TO_CART_REQUEST',
  ADD_TO_CART_SUCCESS: 'ADD_TO_CART_SUCCESS',
  ADD_TO_CART_FAILURE: 'ADD_TO_CART_FAILURE',
  
  REMOVE_FROM_CART_REQUEST: 'REMOVE_FROM_CART_REQUEST',
  REMOVE_FROM_CART_SUCCESS: 'REMOVE_FROM_CART_SUCCESS',
  REMOVE_FROM_CART_FAILURE: 'REMOVE_FROM_CART_FAILURE',
  
  UPDATE_CART_REQUEST: 'UPDATE_CART_REQUEST',
  UPDATE_CART_SUCCESS: 'UPDATE_CART_SUCCESS',
  UPDATE_CART_FAILURE: 'UPDATE_CART_FAILURE',
  
  CLEAR_CART_REQUEST: 'CLEAR_CART_REQUEST',
  CLEAR_CART_SUCCESS: 'CLEAR_CART_SUCCESS',
  CLEAR_CART_FAILURE: 'CLEAR_CART_FAILURE',
};

// Action Creators
export const fetchCartRequest = () => ({
  type: CART_ACTIONS.FETCH_CART_REQUEST,
});

export const fetchCartSuccess = (cart) => ({
  type: CART_ACTIONS.FETCH_CART_SUCCESS,
  payload: cart,
});

export const fetchCartFailure = (error) => ({
  type: CART_ACTIONS.FETCH_CART_FAILURE,
  payload: error,
});

export const addToCartRequest = () => ({
  type: CART_ACTIONS.ADD_TO_CART_REQUEST,
});

export const addToCartSuccess = (cart) => ({
  type: CART_ACTIONS.ADD_TO_CART_SUCCESS,
  payload: cart,
});

export const addToCartFailure = (error) => ({
  type: CART_ACTIONS.ADD_TO_CART_FAILURE,
  payload: error,
});

// Thunk Actions
export const fetchCart = () => {
  return async (dispatch) => {
    dispatch(fetchCartRequest());
    try {
      const response = await cartApi.getCart();
      dispatch(fetchCartSuccess(response.data || response));
    } catch (error) {
      dispatch(fetchCartFailure(error.message));
    }
  };
};

export const addToCart = (productId, quantity = 1, selectedColor = null) => {
  return async (dispatch) => {
    dispatch(addToCartRequest());
    try {
      const response = await cartApi.addToCart(productId, quantity, selectedColor);
      dispatch(addToCartSuccess(response.data || response));
    } catch (error) {
      dispatch(addToCartFailure(error.message));
    }
  };
};

export const removeFromCart = (itemId) => {
  return async (dispatch) => {
    dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART_REQUEST });
    try {
      const response = await cartApi.removeFromCart(itemId);
      dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART_SUCCESS, payload: response.data || response });
    } catch (error) {
      dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART_FAILURE, payload: error.message });
    }
  };
};

export const updateCartItem = (itemId, quantity) => {
  return async (dispatch) => {
    dispatch({ type: CART_ACTIONS.UPDATE_CART_REQUEST });
    try {
      const response = await cartApi.updateCartItem(itemId, quantity);
      dispatch({ type: CART_ACTIONS.UPDATE_CART_SUCCESS, payload: response.data || response });
    } catch (error) {
      dispatch({ type: CART_ACTIONS.UPDATE_CART_FAILURE, payload: error.message });
    }
  };
};

export const clearCart = () => {
  return async (dispatch) => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART_REQUEST });
    try {
      await cartApi.clearCart();
      dispatch({ type: CART_ACTIONS.CLEAR_CART_SUCCESS });
    } catch (error) {
      dispatch({ type: CART_ACTIONS.CLEAR_CART_FAILURE, payload: error.message });
    }
  };
};