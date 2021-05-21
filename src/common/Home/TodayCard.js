import React, { useMemo } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity, Image
} from 'react-native';

const TodayCard = ({ onPress, containerStyle, item }) => {
    const {
        headerContainer,
        secondaryTextStyle,
        row,
        container,
        textStyle,
        bigTextStyle,
        middleTextStyle,
        boldTextStyle
    } = styles

    const actualTimeItem = item[Object.keys(item)[0]]

    const weather = useMemo(() => {
        return actualTimeItem.weather[0];
    }, [actualTimeItem]);


    const celsius = Math.round(actualTimeItem?.main?.temp - 273.15);

    // let fahrenheit = Math.floor(celsius * (9/5) + 32);

    return (
        <>
            <View style={headerContainer}>
                {console.log('item', item, item[Object.keys(item)[0]])}
                <Text style={secondaryTextStyle}>
                    Today
                </Text>
            </View>
            <TouchableOpacity style={[container, containerStyle]} onPress={onPress}>
                <View style={row}>
                    <Image
                        style={{width: 100, height: 100}}
                        source={{
                            uri: `http://openweathermap.org/img/w/${weather?.icon}.png`,
                        }}
                    />
                    <Text style={[textStyle, bigTextStyle]}>
                        {celsius}˚
                    </Text>
                </View>
                <Text style={[textStyle, middleTextStyle]}>
                    {weather?.main}
                </Text>
                <Text style={[textStyle, middleTextStyle, boldTextStyle]}>
                    {weather?.description}
                </Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        backgroundColor: '#ffb61b',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(144, 167, 196, 0.1)',
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 6,
        paddingVertical: 3
    },
    textStyle: {
        color: '#ffffff',
    },
    secondaryTextStyle: {
        color: '#8c8b8b',
    },
    bigTextStyle: {
        fontSize: 100,
    },
    middleTextStyle: {
        fontSize: 30,
    },
    boldTextStyle: {
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
    }
});

export default TodayCard;
