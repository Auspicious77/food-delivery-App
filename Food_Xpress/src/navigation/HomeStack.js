import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SigninScreen from '../screens/AuthScreens/SigninScreen';
import WelcomeScreen from '../screens/AuthScreens/WelcomeScreen';
import Homescreen from '../screens/HomeScreens/Homescreen';
import MapScreen from '../screens/HomeScreens/MapScreen';


const stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <stack.Navigator initialRouteName='Homescreen'>

      <stack.Screen
        name='Homescreen'
        component={Homescreen}
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