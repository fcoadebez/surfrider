import { combineReducers } from 'redux';
import cartState from './cartReducer';

const state = combineReducers({
  cart: cartState,
});

export default state;
