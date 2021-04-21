import * as actionTypes from './actionTypes';
import { initialState } from './constants';

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_CONTRACT_LIST:
      return setContractList(state, payload);
    default:
      return state;
  }
}

const setContractList = (state, payload) => {
  return {
    ...state,
    post: payload
  };
};
