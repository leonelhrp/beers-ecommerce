import {
  ADD_TO_CART,
  SUB_QUANTITY,
  REMOVE_FROM_CART,
  EMPTY_CART,
} from '../types/cartTypes';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};
export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
};
export const subQuantity = (product) => {
  return {
    type: SUB_QUANTITY,
    product,
  };
};
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
