import { PRODUCT_ACTIONS } from '../actions/productActions';

const initialState = {
    products: [],
    currentProduct: null,
    loading: false,
    error: null,
    filters: {},
    totalCount: 0,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_ACTIONS.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case PRODUCT_ACTIONS.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.results || [],           // <-- use results array
                totalCount: action.payload.count || action.payload.results.length || 0,  // total count from 'count'
                error: null,
            };

        case PRODUCT_ACTIONS.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                products: [],
            };

        case PRODUCT_ACTIONS.FETCH_PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case PRODUCT_ACTIONS.FETCH_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                currentProduct: action.payload,
                error: null,
            };

        case PRODUCT_ACTIONS.FETCH_PRODUCT_DETAIL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                currentProduct: null,
            };

        case PRODUCT_ACTIONS.SET_PRODUCTS_FILTER:
            return {
                ...state,
                filters: { ...state.filters, ...action.payload },
            };

        case PRODUCT_ACTIONS.CLEAR_PRODUCTS_FILTER:
            return {
                ...state,
                filters: {},
            };

        default:
            return state;
    }
};

export default productReducer;
