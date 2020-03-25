/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import PersonalScreen from './screens/PersonalScreen'
import AuctionScreen from './screens/AuctionScreen'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { Colors } from './const/Colors'

const Tab = createMaterialBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor={Colors.WHITE}
      initialRouteName='Home'
      barStyle={{ backgroundColor: Colors.PRIMARY }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Tìm kiếm',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={24} color={color} />
          )
        }}
        name="Search"
        component={SearchScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          )
        }}
        name="Home"
        component={HomeScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Đấu giá',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          )
        }}
        name="Auction"
        component={AuctionScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={24} color={color} />
          )
        }}
        name="Personal"
        component={PersonalScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: Colors.PRIMARY }} />
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </View>
  );
};

export default App;
