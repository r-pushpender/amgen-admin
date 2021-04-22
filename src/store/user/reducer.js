import * as actionTypes from './actionTypes';
import { initialState } from './constants';

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.SET_USER_EMAIL:
            return setUserEmail(state, payload);
        default:
            return state;
    }
}

const setUserEmail = (state, payload) => {
    return {
        ...state,
        email: payload,
    };
};
