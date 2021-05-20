import React from 'react';
import {Provider} from "react-redux";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from "./src/screens/NotAuthorized/FirstScreen";
import Login from "./src/screens/NotAuthorized/Login";
import Registration from "./src/screens/NotAuthorized/Registration";
import HomeScreen from "./src/screens/Main/HomeScreen";
import {store} from "./src/store";
import CategoryDetail from "./src/screens/Main/CategoryDetail";

const Stack = createStackNavigator();


const App = () => {
  return (
      <Provider store={store}>
          {console.log(store.getState())}
          <NavigationContainer >
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="HomeScreen" component={HomeScreen}    options={{
                  headerShown: false
              }}/>
              <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
              <Stack.Screen name="FirstScreen" component={FirstScreen} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Registration" component={Registration} />
            </Stack.Navigator>
          </NavigationContainer>
      </Provider>

  );
};

export default App;
