import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {RootStackParamList} from './app/types';
import rootReducer from './app/store/configureStore';

import Home from './app/screens/Home';
import Filters from './app/screens/Filters';

const Stack = createStackNavigator<RootStackParamList>();
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Drinks" headerMode="none">
          <Stack.Screen name="Drinks" component={Home} />
          <Stack.Screen name="Filters" component={Filters} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
