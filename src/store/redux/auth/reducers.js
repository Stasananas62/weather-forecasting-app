import { types } from './types';

export const initial = {
    authorized: false
};

export default (state = initial, action) => {
    switch (action.type) {
        case types.LOG_IN_REQUEST: {
            console.log('test')
            return {
                ...state,
                authorized: false,
            };
        }
        default:
            return state;
    }
};
