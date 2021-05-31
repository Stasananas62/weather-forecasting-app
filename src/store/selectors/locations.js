import { createSelector } from 'reselect';


export const getCity = (store) => store.locations.city;


export const selectCity = createSelector(
    getCity,
    (city) => city,
);