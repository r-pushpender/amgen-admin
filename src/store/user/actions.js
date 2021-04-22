import { handleError } from '../../utils/logger/errorHandler';
import UserApi from '../../services/api/login';
import * as UserActionCreators from './actionCreators';
import { toast } from 'react-toastify';

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
      toast.error(response?.error_message);
    }
    return response;
  } catch (err) {
    handleError(err);
  }
};

export const verifyOtp = (
  payload
) => async (dispatch) => {
  try {
    const response = await UserApi.verifyOtp(payload);
    if (response && !response?.error_message) {
      console.log("Success", response);
      dispatch(UserActionCreators.setUserDetails(response));
    }
    else {
      toast.error(response?.error_message);
    }
    return response;
  } catch (err) {
    handleError(err);
  }
};

