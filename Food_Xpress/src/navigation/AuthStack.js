import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SigninScreen from '../screens/AuthScreens/SigninScreen';
import WelcomeScreen from '../screens/AuthScreens/WelcomeScreen';
import HomeStack from './HomeStack';
import MapScreen from '../screens/HomeScreens/MapScreen';
import DrawerNavigator from './DrawerNavigator';



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
        name='DrawerNavigator'
        component={DrawerNavigator}
        options={{
          headerShown: false
        }}
      />

      <stack.Screen
        name='HomeStack'
        component={HomeStack}
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

      



    </stack.Navigator>
  )
}