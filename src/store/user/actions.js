import { handleError } from '../../utils/logger/errorHandler';
import UserApi from '../../services/api/login';
import * as UserActionCreators from './actionCreators';

export const login = (
  payload
) => async (dispatch) => {
  try {
    const response = await UserApi.login(payload);
    if (response?.success) {
      console.log("Success", response?.text);
      dispatch(UserActionCreators.setUserEmail(payload?.email));
    }
    else {
      console.log("Invalid login");
    }
    return response;
  } catch (err) {
    handleError(err);
  }
};
