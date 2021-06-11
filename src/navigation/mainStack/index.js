import React, {useState, useEffect, useCallback} from 'react';
import {PermissionsAndroid, View, TouchableOpacity, Text, TextInput} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Geolocation from "@react-native-community/geolocation";
import HomeScreen from "../../screens/Home/HomeScreen";
import Search from "../../assets/icons/Search";
import connect from "react-redux/lib/connect/connect";
import {locationsActions} from "../../store/redux/locations";
import {forecastingActions} from "../../store/redux/forecasting";
import {selectCity} from "../../store/selectors/locations";
import SearchScreen from "../../screens/Modal/Search";
import DayDetails from "../../screens/DayDetails";
import {enableScreens} from "react-native-screens";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {NavigationContainer} from "@react-navigation/native";

// enableScreens();

// const Stack = createStackNavigator();
const Stack = createSharedElementStackNavigator();


const AppNavigator = ({ dispatch, city }) => {

    const updateData = () => {
        city && fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${'3f0faf81a417791411bb372d795c5f8e'}`, {
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
    }, [dispatch, city])

    const getCurrentCityName = useCallback((long, lat) => {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&key=3b9defc605ee48f495c82c668e3a3ff2`, {
            "method": "GET",
        })
            .then(response => {
                response.json().then( data => {
                    !city && dispatch(locationsActions.setCity(data?.results[0].components.city))
                })
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    useEffect(() => {
        const requestLocationPermission = async () => {
            if (Platform.OS === 'ios') {
                getOneTimeLocation();
            } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Location Access Required',
                            message: 'This App needs to Access your location',
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        getOneTimeLocation();
                    } else {
                        console.log('Permission Denied');
                    }
                } catch (err) {
                    console.warn(err);
                }
            }
        };
        requestLocationPermission();
        return
    }, []);

    const getOneTimeLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const currentLongitude = JSON.stringify(position.coords.longitude);
                const currentLatitude = JSON.stringify(position.coords.latitude);
                getCurrentCityName(currentLongitude, currentLatitude)
            },
            (error) => {
            },
            { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }
        );
    };

    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });

    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={({ navigation }) => ({
                    headerTitle:  <Text>{city}</Text>,
                    headerRight: () => (
                        <TouchableOpacity
                            style={{marginRight: 16, justifyContent: 'center', alignItems: 'center'}}
                            onPress={()=>navigation.navigate('SearchScreen')} >
                            <Search width={30} height={30} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name={'SearchScreen'}
                component={SearchScreen}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name={'DayDetails'}
                component={DayDetails}
                options={{
                    headerTitle:  <Text>{city}</Text>,
                    headerLeft: null,
                    cardStyleInterpolator: ({ current }) => ({
                        cardStyle: {
                            opacity: current.progress,
                        },
                    }),
                }}
            />
        </Stack.Navigator>
    );
};

const mapStateToProps = (state) => ({
    city: selectCity(state),
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
