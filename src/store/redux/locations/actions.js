import { types } from './types';


export const locationsActions = Object.freeze({
    setCity: (payload) => ({
        type: types.SET_CITY,
        payload,
    }),
});
