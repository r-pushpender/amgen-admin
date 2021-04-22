import * as actionTypes from './actionTypes';

export function setUserEmail(payload) {
    return {
        type: actionTypes.SET_USER_EMAIL,
        payload,
    };
}