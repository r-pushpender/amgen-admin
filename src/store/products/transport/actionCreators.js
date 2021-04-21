import * as actionTypes from './actionTypes';

export function setContractList(payload) {
    return {
        type: actionTypes.SET_CONTRACT_LIST,
        payload,
    };
}