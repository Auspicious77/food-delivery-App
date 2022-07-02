import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/HomeScreens/Homescreen';
import { COLORS } from '../global/Styles';
import { icons } from '../../constants';
import MyAccount from '../screens/HomeScreens/MyAccount';
import MyOrder from '../screens/HomeScreens/MyOrder';
import SearchScreens from '../screens/HomeScreens/SearchScreens';
import DrawerNavigator from './DrawerNavigator';
import ClientStack from './ClientStack';




const Tab = createBottomTabNavigator();
const tabOptions = {
  showLabel: false,
  style: {
    height: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.95,
    elevation: 21,
  },
};
export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.button : COLORS.grey2;
          switch (route.name) {
            case 'Homescreen':
              return (
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );

            case 'ClientStack':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );


            case 'MyOrder':
              return (
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );

            case 'MyAccount':
              return (
                <Image
                  source={icons.person}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );

          }
        },
      })}>
      <Tab.Screen
        name="Homescreen"
        component={Homescreen}
        options={{
          title: null,
          showLabel: true,
          headerShown: false,
          keyboardHidesTabBar: true,
          tabBarStyle: { position: 'absolute', bottom: 0 }
        }}
      />

      <Tab.Screen
        name="ClientStack"
        component={ClientStack}
        options={{
          title: null,
          showLabel: true,
          headerShown: false,
          keyboardHidesTabBar: true,


        }}
      />



      <Tab.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          title: null,
          showLabel: true,
          headerShown: false,
          keyboardHidesTabBar: true,


        }}
      />

      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          title: null,
          showLabel: true,
          headerShown: false,
          keyboardHidesTabBar: true,


        }}
      />


    </Tab.Navigator>
  );
}
