import { useMemo } from 'react';

//waiting for temp as Kelvin
export default (temp) => {
    return useMemo(() => {
        return Math.round(temp - 273.15);
        // let fahrenheit = Math.floor(celsius * (9/5) + 32);
    }, [temp]);
};
