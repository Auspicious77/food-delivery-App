import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './Tabs'
import MapScreen from '../screens/HomeScreens/MapScreen'
import ResturantHomeScreen from "../screens/HomeScreens/ResturantHomeScreen";



const app = createNativeStackNavigator();


export default function AppStack() {
  return (
    <app.Navigator>

      <app.Screen
        name='Tabs'
        component={Tabs}
        options={{
          headerShown: false
        }}
      />



      <app.Screen
        name='MapScreen'
        component={MapScreen}
        options={{
          headerShown: false
        }}
      />

      <app.Screen
        name='ResturantHomeScreen'
        component={ResturantHomeScreen}
        options={{
          headerShown: false
        }}
      />


    </app.Navigator>
  )
}