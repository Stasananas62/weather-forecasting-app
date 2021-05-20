import { types } from './types';

export const initial = {
    transactionsList: []
};

export default (state = initial, action) => {
    switch (action.type) {
        case types.ADD_TRANSACTION: {
            console.log('state', state)
            return {
                ...state,
                transactionsList: [...state.transactionsList, action.payload],
            };
        }
        default:
            return state;
    }
};
