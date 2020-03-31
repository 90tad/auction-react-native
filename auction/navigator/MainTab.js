import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import PersonalScreen from '../screens/personal/PersonalScreen';
import AuctionScreen from '../screens/AuctionScreen';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors} from '../const/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      tabBarPosition={'bottom'}
      activeColor={Colors.WHITE}
      initialRouteName="Home"
      tabBarOptions={{
        animationEnabled: false,
        inactiveTintColor: 'lightgray',
        activeTintColor: 'white',
        showLabel: false,
        showIcon: true,
        indicatorStyle: {backgroundColor: 'white'},
        style: {backgroundColor: Colors.PRIMARY},
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Tìm kiếm',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="search" size={24} color={color} />
          ),
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Đấu giá',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
        name="Auction"
        component={AuctionScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
        }}
        name="Personal"
        component={PersonalScreen}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
