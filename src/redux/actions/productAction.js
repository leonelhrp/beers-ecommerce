import {
  ADD_PRODUCTS
} from '../types/productType';

export const addProducts = (products) => {
  return {
    type: ADD_PRODUCTS,
    products,
  };
};