import React, {useMemo} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';
import useCelsius from '../core/utils/hooks/useCelsius';
import useWeatherCardBackgroundColor from '../core/utils/hooks/useWeatherCardBackgroundColor';

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

    const actualTimeItem = useMemo(() => {
        return item && item[Object.keys(item)[0]]; // TODO: Select nearest time
    }, [item]);

    const weather = useMemo(() => {
        return actualTimeItem?.weather[0];
    }, [actualTimeItem]);

    const celsius = useCelsius(actualTimeItem?.main?.temp)

    const backgroundColor = useWeatherCardBackgroundColor(weather?.main)

    let itemDate = actualTimeItem?.dt_txt?.split(' ')[0]
    let itemTime = actualTimeItem?.dt_txt?.split(' ')[1]
    const  d = new Date(itemDate);
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return (
            <View style={[container, {backgroundColor}]} >
                <View>
                    <Text style={[textStyle, middleTextStyle]}>
                        {itemTime.slice(0,5)}
                    </Text>
                    <Text style={[textStyle, middleTextStyle, boldTextStyle]}>
                        {weekday[d.getDay()]}
                    </Text>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{
                            uri: `http://openweathermap.org/img/w/${weather?.icon}.png`,
                        }}
                    />
                    <Text style={[textStyle, bigTextStyle]}>
                        {celsius}˚
                    </Text>
                    <View style={[row, bottomTextContainer]}>
                        {/*TODO: here should be lower number for a day*/}
                        <Text style={[secondaryTextStyle]}>
                            {celsius}˚
                        </Text>
                        {/*TODO: here should be highest number for a day*/}
                        <Text style={[textStyle]}>
                            {celsius}˚
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
