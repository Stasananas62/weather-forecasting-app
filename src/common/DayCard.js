import React, { useMemo } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import { getCelsius, getWeatherCardBackgroundColor } from '../core/utils/common';
import {useNavigation} from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

const DaysCard = ({ item }) => {
    const {
        row,
        container,
        textStyle,
        bigTextStyle,
        middleTextStyle,
        boldTextStyle,
        bottomTextContainer,
        secondaryTextStyle,
        internalContainer,
        imageContainer,
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
            byTime: item
        }
    }, [item]);

    const navigation = useNavigation();

    const openDetail = () => {
        navigation.navigate('DayDetails', { forecast })
    }

    return (// justifyContent: 'center', alignItems: 'center',
        <View>
            <SharedElement id={`item.${forecast.weekday}.element`}>
                <View
                    style={[container,  { backgroundColor: forecast.backgroundColor }]}
                />
            </SharedElement>
                <TouchableOpacity
                            onPress={openDetail}
                            style={internalContainer}
                        >
                    <SharedElement id={`item.${forecast.weekday}.time`}>
                        <Text style={[textStyle, middleTextStyle]}>
                            {forecast.time}
                        </Text>
                    </SharedElement>
                    <SharedElement id={`item.${forecast.weekday}.weekday`}>
                        <Text style={[textStyle, middleTextStyle, boldTextStyle]}>
                            {forecast.weekday}
                        </Text>
                    </SharedElement>
                    <SharedElement id={`item.${forecast.weekday}.Image`}>
                        <Image
                            style={imageContainer}
                            source={{
                                uri: `http://openweathermap.org/img/w/${forecast.icon}.png`,
                            }}
                        />
                    </SharedElement>
                    <SharedElement id={`item.${forecast.weekday}.temperature`}>
                        <Text style={[textStyle, bigTextStyle, boldTextStyle]}>
                            {forecast.middle}˚
                        </Text>
                    </SharedElement>
                    <SharedElement id={`item.${forecast.weekday}.lowestTemperature`}>
                    <View style={[row, bottomTextContainer]}>
                        <SharedElement id={`item.${forecast.weekday}.morningTemperature`}>
                            <Text style={secondaryTextStyle}>
                                {forecast.morning}˚
                            </Text>
                        </SharedElement>
                        <SharedElement id={`item.${forecast.weekday}.eveningTemperature`}>
                            <Text style={textStyle}>
                                {forecast.evening}˚
                            </Text>
                        </SharedElement>
                    </View>
                    </SharedElement>
                </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
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
    internalContainer: {
        width: 150,
        height: 200,
        left: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    imageContainer: {
        width: 50,
        height: 50
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
        width: 150,
        paddingHorizontal: 32,
        justifyContent: 'space-between'
    }
});

export default DaysCard;
