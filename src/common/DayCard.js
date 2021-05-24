import React, {useMemo} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';

import { getCelsius, getWeatherCardBackgroundColor } from '../core/utils/common';

const DaysCard = ({ item }) => {
    const {
        row,
        container,
        textStyle,
        bigTextStyle,
        middleTextStyle,
        boldTextStyle,
        bottomTextContainer,
        secondaryTextStyle
    } = styles

    const forecast = useMemo(() => {
       let middleTimeItem = item[Object.keys(item)[4]] || item[Object.keys(item)[2]] || item[Object.keys(item)[0]]
       let morningTimeItem = item[Object.keys(item)[1]] || item[Object.keys(item)[0]]
       let eveningTimeItem = item[Object.keys(item)[[Object.keys(item).length - 1]]]

        const celsius = getCelsius(middleTimeItem?.main?.temp)
        const morningCelsius = getCelsius(morningTimeItem?.main?.temp)
        const eveningCelsius = getCelsius(eveningTimeItem?.main?.temp)

        const backgroundColor = getWeatherCardBackgroundColor(middleTimeItem?.weather[0]?.main)

        let itemDate = middleTimeItem?.dt_txt?.split(' ')[0]
        let itemTime = middleTimeItem?.dt_txt?.split(' ')[1]

        const  d = new Date(itemDate);
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        return {
            icon: middleTimeItem?.weather[0].icon,
            backgroundColor,
            weekday: weekday[d.getDay()],
            time: itemTime.slice(0,5),
            middle: celsius,
            morning: morningCelsius,
            evening: eveningCelsius,
        }
    }, [item]);



    return (
            <View style={[container, {backgroundColor: forecast.backgroundColor}]} >
                <View>
                    <Text style={[textStyle, middleTextStyle]}>
                        {forecast.time}
                    </Text>
                    <Text style={[textStyle, middleTextStyle, boldTextStyle]}>
                        {forecast.weekday}
                    </Text>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{
                            uri: `http://openweathermap.org/img/w/${forecast.icon}.png`,
                        }}
                    />
                    <Text style={[textStyle, bigTextStyle]}>
                        {forecast.middle}˚
                    </Text>
                    <View style={[row, bottomTextContainer]}>
                        <Text style={[secondaryTextStyle]}>
                            {forecast.morning}˚
                        </Text>
                        <Text style={[textStyle]}>
                            {forecast.evening}˚
                        </Text>
                    </View>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        borderRadius: 20,
        marginRight: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    textStyle: {
        color: '#ffffff',
    },
    secondaryTextStyle: {
        color: 'rgba(255,255,255, 0.9)',
    },
    bigTextStyle: {
        fontSize: 50,
    },
    middleTextStyle: {
        fontSize: 15,
    },
    boldTextStyle: {
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
    },
    bottomTextContainer: {
        justifyContent: 'space-between'
    }
});

export default DaysCard;
