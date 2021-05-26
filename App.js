import React, { useState, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import {Provider} from "react-redux";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./src/screens/Home/HomeScreen";
import {store} from "./src/store";
// import * as PermissionsAndroid from "http";
import Geolocation from "@react-native-community/geolocation";

const Stack = createStackNavigator();


const App = () => {
    const [currentLongitude, setCurrentLongitude] = useState('...');
    const [currentLatitude, setCurrentLatitude] = useState('...');
    const [locationStatus, setLocationStatus] = useState('');

    useEffect(() => {
        const requestLocationPermission = async () => {
            if (Platform.OS === 'ios') {
                getOneTimeLocation();
                subscribeLocationLocation();
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
                        subscribeLocationLocation();
                    } else {
                        setLocationStatus('Permission Denied');
                    }
                } catch (err) {
                    console.warn(err);
                }
            }
        };
        requestLocationPermission();
        return () => {
            // Geolocation.clearWatch(watchID);
        };
    }, []);

    const getOneTimeLocation = () => {
        setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {
                setLocationStatus('You are Here');
                console.log('position getOneTimeLocation', position);
                const currentLongitude = JSON.stringify(position.coords.longitude);
                //getting the Longitude from the location json
                const currentLatitude = JSON.stringify(position.coords.latitude);
                //getting the Latitude from the location json
                setCurrentLongitude(currentLongitude);
                //Setting state Longitude to re re-render the Longitude Text
                setCurrentLatitude(currentLatitude);
                //Setting state Latitude to re re-render the Longitude Text
            },
            (error) => {
                setLocationStatus(error.message);
            },
            { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }
        );
    };

    const subscribeLocationLocation = () => {
        let watchID = Geolocation.watchPosition(
            (position) => {
                setLocationStatus('You are Here');
                //Will give you the location on location change
                console.log('position subscribeLocationLocation', position);

                const currentLongitude = JSON.stringify(position.coords.longitude);
                //getting the Longitude from the location json
                const currentLatitude = JSON.stringify(position.coords.latitude);
                //getting the Latitude from the location json
                setCurrentLongitude(currentLongitude);
                //Setting state Longitude to re re-render the Longitude Text
                setCurrentLatitude(currentLatitude);
                //Setting state Latitude to re re-render the Longitude Text
            },
            (error) => {
                setLocationStatus(error.message);
            },
            { enableHighAccuracy: false, maximumAge: 1000 }
        );
    };

    return (
      <Provider store={store}>
          <NavigationContainer >
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
      </Provider>

  );
};

export default App;
