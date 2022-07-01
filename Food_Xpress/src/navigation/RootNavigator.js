import { View, Text } from 'react-native'
import React from 'react'
import AuthStack from './AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import RootClientTabs from './RootClientTabs'

export default function RootNavigator() {
  return (
    <NavigationContainer>
     <AuthStack/>
     <RootClientTabs/>
     </NavigationContainer>
  )
}