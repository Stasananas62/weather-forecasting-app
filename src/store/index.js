import {createStore, combineReducers} from "redux";

import reducers from './redux';

const {
    transactionsReducer
} = reducers;

const rootReducer = combineReducers({
    transactions: transactionsReducer,
});

export const store = createStore(rootReducer)