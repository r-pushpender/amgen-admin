import { Api } from '../config/request';

export default {
  getComments(businessCode, status) {
    return Api.get(`/${businessCode}/change-log?status=${status}`);
  },
  submit(businessCode, payload) {
    return Api.post(`/${businessCode}/amendment`, payload);
  },
};
