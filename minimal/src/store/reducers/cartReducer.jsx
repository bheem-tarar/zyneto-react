import { CART_ACTIONS } from '../actions/cartActions';

const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ACTIONS.FETCH_CART_REQUEST:
    case CART_ACTIONS.ADD_TO_CART_REQUEST:
    case CART_ACTIONS.REMOVE_FROM_CART_REQUEST:
    case CART_ACTIONS.UPDATE_CART_REQUEST:
    case CART_ACTIONS.CLEAR_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    
    case CART_ACTIONS.FETCH_CART_SUCCESS:
    case CART_ACTIONS.ADD_TO_CART_SUCCESS:
    case CART_ACTIONS.REMOVE_FROM_CART_SUCCESS:
    case CART_ACTIONS.UPDATE_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items || action.payload,
        totalItems: action.payload.totalItems || action.payload.length,
        totalAmount: action.payload.totalAmount || 0,
        error: null,
      };
    
    case CART_ACTIONS.CLEAR_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [],
        totalItems: 0,
        totalAmount: 0,
        error: null,
      };
    
    case CART_ACTIONS.FETCH_CART_FAILURE:
    case CART_ACTIONS.ADD_TO_CART_FAILURE:
    case CART_ACTIONS.REMOVE_FROM_CART_FAILURE:
    case CART_ACTIONS.UPDATE_CART_FAILURE:
    case CART_ACTIONS.CLEAR_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
    default:
      return state;
  }
};

export default cartReducer;