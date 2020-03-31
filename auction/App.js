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
import AppProvider from './app_context/AppProvider';
import ToolBar from './components/ToolBar';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from './navigator/MainTab';
import ProductDetailScreen from './screens/ProductDetailScreen';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Colors} from './const/Colors';
import {StatusBar} from 'react-native';
// import SignInScreenASD from './screens/SignInScreen';
import 'react-native-gesture-handler';
import SignInScreen from './screens/SignInScreen';
import UserDetail from './screens/user_detail/UserDetail';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.PRIMARY,
    accent: Colors.PRIMARY_DARK,
    statusBarBackgroundColor: Colors.PRIMARY_DARK,
  },
};

const App = () => {
  return (
    <AppProvider>
      <PaperProvider style={{flex: 1}} theme={theme}>
        {/* <ToolBar /> */}
        <StatusBar backgroundColor={Colors.PRIMARY} />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: ({scene, previous, navigation}) => {
                return (
                  <ToolBar
                    navigation={navigation}
                    previous={previous}
                    onBackButtonPress={previous && navigation.goBack}
                  />
                );
              },
              headerStyle: {
                backgroundColor: Colors.PRIMARY,
              },
              headerTintColor: '#fff',
            }}
            initialRouteName="MainTab">
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetailScreen}
            />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="UserDetail" component={UserDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AppProvider>
  );
};

export default App;
