import React, { useRef, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Animated,
    Text,
    Image,
} from 'react-native';

import connect from 'react-redux/lib/connect/connect';
import { selectForecasting } from '../../store/selectors/forecasting';
import {selectCity} from '../../store/selectors/locations';
import {SharedElement} from 'react-navigation-shared-element';
import CloseButton from '../../common/Home/CloseButton';
import WeatherByTimeScroll from '../../common/Home/WeatherByTimeScroll';

const DayDetails = ({route, navigation}) => {
    const {
        row,
        container,
        boldTextStyle,
        bottomTextContainer,
        internalContainer,
        imageContainer,
        weekdayStyle,
        timeStyle,
        contentContainer,
        temperatureStyle,
        morningStyle,
        eveningStyle
    } = styles

    const forecast = route.params.forecast

    const ballAnimatedValue = useRef(new Animated.Value(0)).current;
    const scrollAnimatedValue = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
        moveIn()
        moveScrollIn()
    }, [])

    const yVal = ballAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, 5],
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
        outputRange: [700, 100],
    });

    const animScrollStyle = {
        transform: [
            {
                translateY: yScrollVal,
            },
        ],
    };


    const closeCard = () => {
        moveOut()
        moveScrollOut()
        navigation.goBack()
    };

    const moveIn = () => {
        Animated.timing(ballAnimatedValue, {
            toValue: 1,
            duration: 1000,
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
            duration: 1000,
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
        <View style={styles.mainContainer}>
            <Animated.View style={[animStyle, { zIndex: 1,}]}>
                <CloseButton containerStyle={{alignSelf:'center',  position: 'absolute', marginTop: -30 }} onPress={closeCard}/>
            </Animated.View>
            <SharedElement style={{zIndex: 0}} id={`item.${forecast.weekday}.element`}>
                <View style={[container, internalContainer, {backgroundColor: forecast.backgroundColor}] } />
            </SharedElement>
            <View style={contentContainer}>
                <SharedElement id={`item.${forecast.weekday}.time`}>
                    <Text style={timeStyle}>
                        {forecast.time}
                    </Text>
                </SharedElement>
                <SharedElement id={`item.${forecast.weekday}.weekday`}>
                    <Text style={[weekdayStyle, boldTextStyle]}>
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
                    <Text style={[temperatureStyle, boldTextStyle]}>
                        {forecast.middle}˚
                    </Text>
                </SharedElement>
                    <View style={[row, bottomTextContainer]}>
                        <SharedElement id={`item.${forecast.weekday}.morningTemperature`}>
                            <Text style={morningStyle}>
                                {forecast.morning}˚
                            </Text>
                        </SharedElement>
                        <SharedElement id={`item.${forecast.weekday}.eveningTemperature`}>
                            <Text style={eveningStyle}>
                                {forecast.evening}˚
                            </Text>
                        </SharedElement>
                    </View>
                <Animated.View  style={[animScrollStyle, { zIndex: 1,}]}>
                    <WeatherByTimeScroll containerStyle={{ position: 'absolute', zIndex: 3, alignSelf: 'center' }} item={forecast.byTime} />
                </Animated.View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    mainContainer:{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        paddingTop: 50,
        zIndex: 0
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
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
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        marginTop: 100,
        width: 200,
        height: 200,
    },
    boldTextStyle: {
        fontWeight: 'bold',
    },
    weekdayStyle: {
        position: 'absolute',
        marginTop: 50,
        color: '#ffffff',
        fontSize: 50,
        alignSelf: 'center'
    },
    timeStyle: {
        position: 'absolute',
        marginTop: 25,
        color: '#ffffff',
        fontSize: 25,
        alignSelf: 'center'
    },
    temperatureStyle: {
        position: 'absolute',
        color: '#ffffff',
        fontSize: 100,
        alignSelf: 'center',
        marginTop: -70,
    },
    morningStyle: {
        position: 'absolute',
        color: 'rgba(255,255,255, 0.9)',
        fontSize: 25,
        alignSelf: 'flex-start',
        marginTop: 50,
    },
    eveningStyle: {
        position: 'absolute',
        color: '#ffffff',
        fontSize: 25,
        alignSelf: 'flex-end',
        marginTop: 50
    },
    row: {
        flexDirection: 'row',
    },
    bottomTextContainer: {
        justifyContent: 'space-between',
        width: '50%',
    },
    contentContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        width: '100%'
    }
});

const mapStateToProps = (state) => ({
    selectForecasting: selectForecasting(state),
    city: selectCity(state),
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});

DayDetails.sharedElements = (route, otherRoute, showing) => {
    const forecast = route.params.forecast
    return [
        {id:`item.${forecast.weekday}.element`},
        {id:`item.${forecast.weekday}.Image`},
        {id: `item.${forecast.weekday}.time`},
        {id: `item.${forecast.weekday}.weekday`},
        {id: `item.${forecast.weekday}.temperature`},
        {id: `item.${forecast.weekday}.morningTemperature`},
        {id: `item.${forecast.weekday}.eveningTemperature`},
        ];
}


export default connect(mapStateToProps, mapDispatchToProps)(DayDetails);