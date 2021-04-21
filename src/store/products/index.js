import { combineReducers } from 'redux';
import TransportProduct from './transport/reducer';

const productReducer = combineReducers({
  TransportProduct,
});

export default productReducer;
