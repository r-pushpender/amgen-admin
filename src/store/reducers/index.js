import { combineReducers } from 'redux';

import Products from '../products/index';
import User from '../user/index';

export default combineReducers({
  Products,
  User
});
