import { Api } from '../config/request';

export default {
  getComments(businessCode, status) {
    return Api.get(`/${businessCode}/change-log?status=${status}`);
  },
  submit(businessCode, payload) {
    return Api.post(`/${businessCode}/amendment`, payload);
  },
  getPost(postID) {
    return Api.get(`posts/${postID}`);
  },
  addPost(payload) {
    return Api.post(`posts`, payload);
  }
};
