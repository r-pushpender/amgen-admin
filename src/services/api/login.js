import { Api } from '../config/request';

export default {
  login(payload) {
    return Api.post(`/auth/admin/signin`, payload);
  }
  // getComments(businessCode, status) {
  //   return Api.get(`/${businessCode}/change-log?status=${status}`);
  // },
  // submit(businessCode, payload) {
  //   return Api.post(`/${businessCode}/amendment`, payload);
  // },
  // getPost(postID) {
  //   return Api.get(`posts/${postID}`);
  // },
  // addPost(payload) {
  //   return Api.post(`posts`, payload);
  // }
};
