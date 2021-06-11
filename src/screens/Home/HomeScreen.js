import React, {useState, useMemo, useRef} from 'react';
import {
    View,
    StyleSheet,
    ScrollView, Animated, Easing
} from 'react-native';
import connect from 'react-redux/lib/connect/connect';
import TodayCard from '../../common/Home/TodayCard'
import DaysScroll from '../../common/Home/DaysScroll'
import { selectForecasting, selectForecastingByDateAndTime } from '../../store/selectors/forecasting';
import {selectCity} from "../../store/selectors/locations";

const HomeScreen = ({ forecastingByDateAndTime }) => {
    const [isOpen, setIsOpen] = useState(false)

    let today = useMemo(() => new Date().toJSON().slice(0,10).replace(/-/g,'-'), [])


    const height = useRef(new Animated.Value(1)).current;

    const maxHeight = height.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '60%']
    })

    const openCard = (status) => {
        setIsOpen(status)
        Animated.timing(height, {
            toValue: status ? 0 : 1,
            duration: 300,
            easing: Easing.linear,
        }).start();
    };

    return (
        <View style={styles.container}>
            <TodayCard item={forecastingByDateAndTime[today]}/>
            <DaysScroll data={forecastingByDateAndTime} onOpen={openCard}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#fff'
    },
    text: {
        color: '#fff',
    },
});

const mapStateToProps = (state) => ({
    selectForecasting: selectForecasting(state),
    forecastingByDateAndTime: selectForecastingByDateAndTime(state),
    city: selectCity(state),
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);