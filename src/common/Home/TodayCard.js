import React, { useMemo, useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    NativeModules,
    Animated,
    Easing
} from 'react-native';
import useWeatherCardBackgroundColor from '../../core/utils/hooks/useWeatherCardBackgroundColor';
import useCelsius from '../../core/utils/hooks/useCelsius';
import CloseButton from './CloseButton';
import WeatherByTimeScroll from './WeatherByTimeScroll';

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

    const ballAnimatedValue = useRef(new Animated.Value(0)).current;

    const scrollAnimatedValue = useRef(new Animated.Value(0)).current;


    const yVal = ballAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, 30],
    });

    const animStyle = {
        transform: [
            {
                translateY: yVal,
            },
        ],
    };

    const yScrollVal = scrollAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [700, 50],
    });


    const animScrollStyle = {
        transform: [
            {
                translateY: yScrollVal,
            },
        ],
    };

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
        moveScrollIn()
        moveIn()
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
        moveScrollOut()
        moveOut()
    };


    const moveIn = () => {
        Animated.timing(ballAnimatedValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const moveOut = () => {
        Animated.timing(ballAnimatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const moveScrollIn = () => {
        Animated.timing(scrollAnimatedValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const moveScrollOut = () => {
        Animated.timing(scrollAnimatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <>
            <View style={[headerContainer, {backgroundColor: isOpen ? '#fff' : 'rgba(144, 167, 196, 0.1)'}]}>
                 <Text style={secondaryTextStyle}>
                     {isOpen || 'Today'}
                </Text>
            </View>
            <Animated.View style={[animStyle, { zIndex: 1,}]}>
                <CloseButton containerStyle={{alignSelf:'center',  position: 'absolute', marginTop: -50 }} onPress={closeCard}/>
            </Animated.View>
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
                        <Animated.View  style={[animScrollStyle, { zIndex: 1,}]}>
                            <WeatherByTimeScroll item={item} />
                        </Animated.View>
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
        justifyContent: 'flex-start',
        paddingTop: 30,
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
