import * as actionTypes from './actionTypes';
import { initialState } from './constants';

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.SET_USER_EMAIL:
            return setUserEmail(state, payload);
        case actionTypes.SET_USER_DETAILS:
            return setUserDetails(state, payload);
        case actionTypes.RESET_USER:
            return resetUser();
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

const setUserDetails = (state, payload) => {
    return {
        ...state,
        details: payload,
    }
}

const resetUser = () => {
    return {
        ...initialState
    }
}