import React, { useMemo, useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    NativeModules,
    ScrollView,
    Animated,
    Easing
} from 'react-native';
import useWeatherCardBackgroundColor from '../../core/utils/hooks/useWeatherCardBackgroundColor';
import useCelsius from '../../core/utils/hooks/useCelsius';
import CloseButton from "./CloseButton";
import WeatherByTImeScroll from "./WeatherByTimeScroll";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const TodayCard = ({ item }) => {
    const {
        headerContainer,
        secondaryTextStyle,
        row,
        container,
        textStyle,
        bigTextStyle,
        middleTextStyle,
        boldTextStyle,
        internalContainer,
    } = styles

    const [isOpen, setIsOpen] = useState(false);

    const actualTimeItem = useMemo(() => {
        return item && item[Object.keys(item)[0]]; // TODO: Select nearest time
    }, [item]);

    const weather = useMemo(() => {
        return actualTimeItem?.weather[0];
    }, [actualTimeItem]);

    const celsius = useCelsius(actualTimeItem?.main?.temp)

    const backgroundColor = useWeatherCardBackgroundColor(weather?.main)

    const Container = isOpen ? Animated.View : TouchableOpacity

    const width = useRef(new Animated.Value(0)).current;
    const height = useRef(new Animated.Value(0)).current;

    const maxWidth = width.interpolate({
        inputRange: [0, 1],
        outputRange: ['100%', '110%']
    })

    const maxHeight = height.interpolate({
        inputRange: [0, 1],
        outputRange: ['40%', '100%']
    })

    const openCard = () => {
        Animated.timing(height, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear,
        }).start();
        setIsOpen(true)
        Animated.timing(width, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear,
        }).start();
        setIsOpen(true)
    };

    const closeCard = () => {
        Animated.timing(height, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear,
        }).start();
        setIsOpen(false)
        Animated.timing(width, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear,
        }).start();
        setIsOpen(false)
    };


    return (
        <>
            <View style={[headerContainer, {backgroundColor: isOpen ? '#fff' : 'rgba(144, 167, 196, 0.1)'}]}>
                 <Text style={secondaryTextStyle}>
                     {isOpen || 'Today'}
                </Text>
            </View>
            {isOpen && <CloseButton onPress={closeCard}/>}
            <Animated.View
                style={[container, {backgroundColor, height: maxHeight, width: maxWidth}]}>
                <Container  style={internalContainer} onPress={openCard}>
                {actualTimeItem ?
                    <>
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
                        {isOpen &&
                            <WeatherByTImeScroll item={item} />
                        }
                    </>
                :
                    <Text style={[textStyle, middleTextStyle, boldTextStyle]}>
                        Loading...
                    </Text>
                }
                </Container>
            </Animated.View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        zIndex: 0,
        justifyContent: 'center',
        alignItems: 'center',
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
    internalContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
});

export default TodayCard;
