import { types } from './types';


export const forecastingActions = Object.freeze({
    setWeatherForecasting: (payload) => ({
        type: types.SET_WEATHER_FORECASTING,
        payload,
    }),
});
