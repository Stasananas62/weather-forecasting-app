import { types } from './types';


export const authActions = Object.freeze({
    signInRequest: (payload) => ({
        type: types.LOG_IN_REQUEST,
        payload,
    }),
});
