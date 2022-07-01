import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SigninScreen from '../screens/AuthScreens/SigninScreen';
import WelcomeScreen from '../screens/AuthScreens/WelcomeScreen';
import RootClientTabs from './RootClientTabs'


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
        name='RootClientTabs'
        component={RootClientTabs}
        options={{
          headerShown: false

        }}
      />


    </stack.Navigator>
  )
}