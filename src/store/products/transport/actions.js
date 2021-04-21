import { handleError } from '../../../utils/logger/errorHandler';
import PostApi from '../../../services/api/login';
import * as PostActionCreators from './actionCreators';

export const getPost = (
  postID
) => async (dispatch) => {
  try {
    const response = await PostApi.addPost(
      {
        name: 'hello',
      }
    );
    //debugger;
    // if (response) {
    //   console.log("Success");
    //   dispatch(PostActionCreators.setContractList(response));
    // }
    // console.log("No Success");
    return response;
  } catch (err) {
    handleError(err);
  }
};
