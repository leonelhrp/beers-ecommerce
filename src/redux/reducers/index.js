import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';

const combinedReducer = combineReducers({
  cartReducer,
  productReducer,
});

export default combinedReducer;
