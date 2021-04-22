import { handleError } from '../../../utils/logger/errorHandler';
import UserApi from '../../services/api/login';

export const login = (
  payload
) => async (dispatch) => {
  try {
    const response = await UserApi.login(
      {
        ...payload,
        user_type: 1
      }
    );
    if (response?.success) {
      console.log("Success", response?.text);
    }
    else {
      console.log("Invalid login");
    }
    return response;
  } catch (err) {
    handleError(err);
  }
};
