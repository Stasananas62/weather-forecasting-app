import {createStore, combineReducers} from "redux";

import reducers from './redux';

const {
    forecastingReducer,
    locationsReducer,
} = reducers;

const rootReducer = combineReducers({
    weather: forecastingReducer,
    locations: locationsReducer,
});

export const store = createStore(rootReducer)