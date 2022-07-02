import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SigninScreen from '../screens/AuthScreens/SigninScreen';
import WelcomeScreen from '../screens/AuthScreens/WelcomeScreen';
import MapScreen from '../screens/HomeScreens/MapScreen';
import DrawerNavigator from './DrawerNavigator';
import SearchScreens from '../screens/HomeScreens/SearchScreens';




const stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <stack.Navigator initialRouteName='WelcomeScreen'>

      <stack.Screen
        name='SigninScreen'
        component={SigninScreen}
        options={{
          headerShown: false
        }}
      />

      <stack.Screen
        name='WelcomeScreen'
        component={WelcomeScreen}
        options={{
          headerShown: false

        }}
      />

      <stack.Screen
        name='SearchScreens'
        component={SearchScreens}
        options={{
          headerShown: false
        }}
      />

      <stack.Screen
        name='MapScreen'
        component={MapScreen}
        options={{
          headerShown: false
        }}
      />

      
<stack.Screen
        name='DrawerNavigator'
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  )
}