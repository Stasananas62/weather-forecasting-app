import { types } from './types';


export const transactionsActions = Object.freeze({
    addTransaction: (payload) => ({
        type: types.ADD_TRANSACTION,
        payload,
    }),
});
