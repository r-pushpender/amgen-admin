import * as actionTypes from './actionTypes';

export function setUserEmail(payload) {
    return {
        type: actionTypes.SET_USER_EMAIL,
        payload,
    };
}

export function setUserDetails(payload) {
    return {
        type: actionTypes.SET_USER_DETAILS,
        payload,
    }
}

export function resetUser() {
    return {
        type: actionTypes.RESET_USER,

    }
}