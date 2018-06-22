import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import cartState from './cartReducer';
import productState from './productReducer';

const state = combineReducers({
  cart: cartState,
  product: productState,
  routing: routerReducer,
  toastr: toastrReducer,
});

export default state;
