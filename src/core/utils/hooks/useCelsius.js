import { useMemo } from 'react';
import { getCelsius } from '../common';

//waiting for temp as Kelvin
export default (temp) => {
    return useMemo(() => {
        return getCelsius(temp);
        // let fahrenheit = Math.floor(celsius * (9/5) + 32);
    }, [temp]);
};
