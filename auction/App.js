/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import HomeScreen from './component/HomeScreen'
import SettingScreen from './component/SettingScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons'

const Tab = createMaterialBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
      <Tab.Screen name="Tab3" component={HomeScreen} />
      <Tab.Screen name="Tab4" component={SettingScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
