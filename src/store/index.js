import {createStore, combineReducers} from "redux";

import reducers from './redux';

const {
    forecastingReducer
} = reducers;

const rootReducer = combineReducers({
    weather: forecastingReducer,
});

export const store = createStore(rootReducer)