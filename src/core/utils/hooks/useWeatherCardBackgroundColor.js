import { useMemo } from 'react';
import { getWeatherCardBackgroundColor } from '../common';

export default (status) => {
    return useMemo(() => {
       return getWeatherCardBackgroundColor(status)
    }, [status]);
};
