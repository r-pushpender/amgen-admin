import { Api } from '../config/request';

export default {
  login(payload) {
    //return Api.post(`/auth/admin/signin`, payload);
    return {
      error_message: "invalid username or password"
    }
  },
  verifyOtp(payload) {
    //return Api.post(`/auth/admin/verify`, payload);
    return {
      "error_message": "Otpinvalidorexpired",
      "error_reason": "Preconditions Failed",
      "error_detail": {
        "otp": [
          "OtpInvalidOrExpired"
        ]
      }
    }
  }

};
