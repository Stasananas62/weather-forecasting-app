import { useMemo } from 'react';
import { weatherStatuses } from '../../constants';

export default (status) => {
    return useMemo(() => {
        switch (status) {
            case weatherStatuses.clear:
                return '#fa1111';
            case weatherStatuses.clouds:
                return '#ffb61b';
            case weatherStatuses.drizzle:
                return '#75d4ee';
            case weatherStatuses.rain:
                return '#49cbee';
            case weatherStatuses.snow:
                return '#108bae';
            case weatherStatuses.thunderstorm:
                return '#515f64';
            default:
                return '#515f64';
        }
    }, [status]);
};
