import React, { useEffect, useMemo } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import connect from 'react-redux/lib/connect/connect';
import TodayCard from '../../common/Home/TodayCard'
import DaysScroll from '../../common/Home/DaysScroll'
import { selectForecasting, selectForecastingByDateAndTime } from '../../store/selectors/forecasting';
import {selectCity} from "../../store/selectors/locations";

const HomeScreen = ({ forecastingByDateAndTime }) => {

    let today = useMemo(() => new Date().toJSON().slice(0,10).replace(/-/g,'-'), [])

    return (
        <View style={styles.container}>
            <TodayCard item={forecastingByDateAndTime[today]}/>
            <DaysScroll data={forecastingByDateAndTime}/>
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