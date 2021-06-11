import React, {useState, useEffect, useCallback} from 'react';
import {Provider} from "react-redux";

import { NavigationContainer } from '@react-navigation/native';

import {store} from "./src/store";
import AppNavigator from './src/navigation/mainStack/index'

const App = () => {

    return (
      <Provider store={store}>
          <NavigationContainer >
            <AppNavigator />
          </NavigationContainer>
      </Provider>

  );
};

export default App;
