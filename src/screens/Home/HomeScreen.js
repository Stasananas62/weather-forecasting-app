import React, { useEffect, useMemo } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import connect from 'react-redux/lib/connect/connect';
import TodayCard from '../../common/Home/TodayCard'
import DaysScroll from '../../common/Home/DaysScroll'
import { selectForecasting, selectForecastingByDateAndTime } from '../../store/selectors/forecasting';
import { forecastingActions } from '../../store/redux/forecasting';

const HomeScreen = ({ dispatch, forecastingByDateAndTime}) => {

    const updateData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${'London'}&appid=${'3f0faf81a417791411bb372d795c5f8e'}`, {
            method: 'GET',
        }).then((res) => {
            res.json().then( data => {
                dispatch(forecastingActions.setWeatherForecasting(data.list))
            })
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        updateData()
        let interval = setInterval(() => updateData(), 3600000);
            return () => clearInterval(interval)
        }, [dispatch])

    let today = useMemo(() => new Date().toJSON().slice(0,10).replace(/-/g,'-'), [])

    return (
        <View style={styles.container}>
            {console.log('forecastingByDateAndTime', forecastingByDateAndTime)}
            <TodayCard onPress={updateData} item={forecastingByDateAndTime[today]}/>
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
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);