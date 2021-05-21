import React from 'react';
import {Provider} from "react-redux";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./src/screens/Home/HomeScreen";
import {store} from "./src/store";

const Stack = createStackNavigator();


const App = () => {
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
