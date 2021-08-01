import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  EMPTY_CART,
} from '../types/cartTypes';

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productFilter = state.products.filter(product => product.id === action.product.id)

      if (!productFilter.length) state.products.push({ ...action.product, quantity: 0 })

      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.product.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.product.id),
      };
    case SUB_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.product.id
            ? {
                ...product,
                quantity: product.quantity > 1 ? product.quantity - 1 : 1,
              }
            : product,
        ),
      };
    case EMPTY_CART:
      return {
        ...state,
        products: []
      };
    default:
      return state;
  }
};

export default cartReducer;
