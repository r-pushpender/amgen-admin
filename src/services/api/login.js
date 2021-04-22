import { Api } from '../config/request';

export default {
  login(payload) {
    //return Api.post(`/auth/admin/signin`, payload);
    return {
      "success": true,
      "text": "Your 6 digit OTP is 340421"
    }
  }

};
