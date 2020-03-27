/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './store/store';

import ToolBar from './components/ToolBar';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from './navigator/MainTab';
import ProductDetailScreen from './screens/ProductDetailScreen';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Colors} from './const/Colors';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.PRIMARY,
    accent: Colors.PRIMARY_DARK,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider style={{flex: 1}} theme={theme}>
        <ToolBar />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MainTab"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
