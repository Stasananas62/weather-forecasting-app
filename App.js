import React, {useState, useEffect, useCallback} from 'react';
import {Provider} from "react-redux";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {store} from "./src/store";
import AppNavigator from './src/navigation/mainStack/index'

const Stack = createStackNavigator();


const App = () => {
    // const [city, setCity] = useState('');
    //
    // const getCurrentCityName = useCallback((long, lat) => {
    //             fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&key=3b9defc605ee48f495c82c668e3a3ff2`, {
    //         "method": "GET",
    //     })
    //         .then(response => {
    //             console.log(response);
    //             response.json().then( data => {
    //                 setCity(data?.results[0].components.city)
    //             })
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    // }, [])
    //
    // useEffect(() => {
    //     const requestLocationPermission = async () => {
    //         if (Platform.OS === 'ios') {
    //             getOneTimeLocation();
    //             subscribeLocationLocation();
    //         } else {
    //             try {
    //                 const granted = await PermissionsAndroid.request(
    //                     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //                     {
    //                         title: 'Location Access Required',
    //                         message: 'This App needs to Access your location',
    //                     }
    //                 );
    //                 if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //                     getOneTimeLocation();
    //                     subscribeLocationLocation();
    //                 } else {
    //                     console.log('Permission Denied');
    //                 }
    //             } catch (err) {
    //                 console.warn(err);
    //             }
    //         }
    //     };
    //     requestLocationPermission();
    //     return () => {
    //         // Geolocation.clearWatch(watchID);
    //     };
    // }, []);
    //
    // const getOneTimeLocation = () => {
    //     Geolocation.getCurrentPosition(
    //         (position) => {
    //             const currentLongitude = JSON.stringify(position.coords.longitude);
    //             const currentLatitude = JSON.stringify(position.coords.latitude);
    //             getCurrentCityName(currentLongitude, currentLatitude)
    //         },
    //         (error) => {
    //         },
    //         { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }
    //     );
    // };
    //
    // const subscribeLocationLocation = () => {
    //     let watchID = Geolocation.watchPosition(
    //         (position) => {
    //             const currentLongitude = JSON.stringify(position.coords.longitude);
    //             const currentLatitude = JSON.stringify(position.coords.latitude);
    //             getCurrentCityName(currentLongitude, currentLatitude)
    //         },
    //         (error) => {
    //             console.log('error', error)
    //         },
    //         { enableHighAccuracy: false, maximumAge: 1000 }
    //     );
    // };

    return (
      <Provider store={store}>
          <NavigationContainer >
            {/*<Stack.Navigator initialRouteName="Home">*/}
            {/*    <Stack.Screen*/}
            {/*        name="HomeScreen"*/}
            {/*        component={HomeScreen}*/}
            {/*        options={{*/}
            {/*            // headerTitle: <Text>{city}</Text>,*/}
            {/*            headerRight: () => (*/}
            {/*                <TouchableOpacity*/}
            {/*                    style={{marginRight: 16, justifyContent: 'center', alignItems: 'center'}}*/}
            {/*                    onPress={() => alert('This is a button!')} >*/}
            {/*                    <Search width={30} height={30} />*/}
            {/*                </TouchableOpacity>*/}
            {/*            ),*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</Stack.Navigator>*/}
            <AppNavigator />
          </NavigationContainer>
      </Provider>

  );
};

export default App;
