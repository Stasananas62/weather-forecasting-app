import { createSelector } from 'reselect';


export const getTransaction = (store) => store.transactions;


export const selectTransactionsList = createSelector(
    getTransaction,
    (transactions) => transactions.transactionsList,
);

export const selectTransactionsCostsByCategory = createSelector(
    [selectTransactionsList, (state, category) => category],
    (transactions, category) => {
        let cost = 0;
        console.log('transactions', transactions, category)
        transactions.forEach(item => {
            if (item.category === category) {
                cost += item.value;
            }
        })
        console.log(cost)
        return cost;
    },
);

// export const getWorkerProfiles = (store) => store.auth.workerProfiles;
//
// export const selectWorkerProfileByUsername = createSelector(
//     [getWorkerProfiles, (state, username) => username],
//     (workerProfiles, username) =>
//         workerProfiles.find((profile) => profile.username === username),
// );
//
// export const selectWorkerProfileByToken = createSelector(
//     [getWorkerProfiles, (state, accessToken) => accessToken],
//     (workerProfiles, accessToken) =>
//         workerProfiles.find((profile) => profile.accessToken === accessToken),
// );
//
// export const selectIsUserAuthorized = createSelector(
//     getWorkerProfiles,
//     (workerProfiles) => {
//         return !!workerProfiles.length;
//     },
// );


// export const getIsLoading = (store) => store.auth.loading;
//
// export const selectAuthIsLoading = createSelector(
//     getIsLoading,
//     (loading) => loading,
// );
