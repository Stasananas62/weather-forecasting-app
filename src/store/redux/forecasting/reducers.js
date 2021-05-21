import { types } from './types';

export const initial = {
    forecasting: []
};

export default (state = initial, action) => {
    switch (action.type) {
        case types.SET_WEATHER_FORECASTING: {
            console.log('action.payload', action)
            return {
                ...state,
                forecasting: action.payload,
            };
        }
        default:
            return state;
    }
};
