import { createSelector } from 'reselect';


export const getForecasting = (store) => store.weather.forecasting;


export const selectForecasting = createSelector(
    getForecasting,
    (forecasting) => forecasting,
);

// from server data came withe time as dt_txt: "2021-05-21 15:00:00"
export const selectForecastingByDateAndTime = createSelector(
    getForecasting,
    (forecasting) => {
        let grouped = {}

        forecasting && forecasting.forEach(item => {
            let itemDate = item?.dt_txt?.split(' ')[0]
            let itemTime = item?.dt_txt?.split(' ')[1]

            grouped[itemDate] = grouped[itemDate]
                ? {...grouped[itemDate], [itemTime]: item}
                : {[itemTime]: item}
        })

        return grouped
    },
);


// export const selectTransactionsCostsByCategory = createSelector(
//     [selectTransactionsList, (state, category) => category],
//     (transactions, category) => {
//         let cost = 0;
//         console.log('transactions', transactions, category)
//         transactions.forEach(item => {
//             if (item.category === category) {
//                 cost += item.value;
//             }
//         })
//         console.log(cost)
//         return cost;
//     },
// );