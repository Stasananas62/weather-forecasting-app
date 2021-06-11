import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView, Image
} from 'react-native';
import {getCelsius} from "../../core/utils/common";

const WeatherByTimeScroll = ({item, containerStyle}) => {
    const { container, headerContainer, textStyle, timeItemContainer } = styles

    return (
        <View
            style={[container, containerStyle]}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                style={{ borderRadius: 20, paddingHorizontal: 16 }}
                horizontal
            >
                {Object.entries(item).map(([key, value]) => {

                    const celsius = getCelsius(value?.main?.temp)
                   return(
                        <View style={timeItemContainer}>
                            <Text>{key.slice(0,5)}</Text>
                            <Image
                                style={{width: 30, height: 30}}
                                source={{
                                    uri: `http://openweathermap.org/img/w/${value.weather[0]?.icon}.png`,
                                }}
                            />
                            <Text style={textStyle}>{celsius}˚</Text>
                        </View>
                   )
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 10,
    },
    headerContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        marginVertical: 50,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    timeItemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
});

export default WeatherByTimeScroll;
