import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/HomeScreens/Homescreen';
import MyAccount from '../screens/HomeScreens/MyAccount';
import MyOrder from '../screens/HomeScreens/MyOrder';
import SearchScreens from '../screens/HomeScreens/SearchScreens';
import ClientStack from './ClientStack';
import { Icon } from '@rneui/base';
import { COLORS } from '../global/Styles';
import { icons } from '../../constants';





const Tab = createBottomTabNavigator();

export default function Tabs(){
  return(
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: COLORS.button
      
    }}>
      <Tab.Screen
        name='Homescreen'
        component={Homescreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) =>(
            <Icon
              name='home'
              type='material'
              size={size}
              color={color}
            />
          )
          
        }}
      />

<Tab.Screen
        name='ClientStack'
        component={ClientStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) =>(
            <Icon
              name= 'search'
              type='material'
              size={size}
              color={color}
            />
          )
          
        }}
      />


<Tab.Screen
        name='MyOrder'
        component={MyOrder}
        options={{
          headerShown: false,
          tabBarLabel: 'My Order',
          tabBarIcon: ({color, size}) =>(
            <Icon
              name='view-list'
              type='material'
              size={size}
              color={color}
            />
          )
          
        }}
      />

<Tab.Screen
        name='MyAccount'
        component={MyAccount}
        options={{
          headerShown: false,
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) =>(
            <Icon
              name='person'
              type='material'
              size={size}
              color={color}
            />
          )
          
        }}
      />
    </Tab.Navigator>
  )
}

