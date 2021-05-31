import { types } from './types';

export const initial = {
    city: '',
};

export default (state = initial, action) => {
    switch (action.type) {
        case types.SET_CITY: {
            return {
                ...state,
                city: action.payload,
            };
        }
        default:
            return state;
    }
};
