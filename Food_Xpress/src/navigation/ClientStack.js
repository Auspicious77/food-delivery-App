import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreens from '../screens/HomeScreens/SearchScreens';
import SearchResult from '../screens/HomeScreens/SearchResult';
import ResturantHomeScreen from '../screens/HomeScreens/ResturantHomeScreen';



const stack = createNativeStackNavigator();

export default function ClientStack() {
    return (
        <stack.Navigator>
            <stack.Screen
                name='SearchScreens'
                component={SearchScreens}
                options={{
                    headerShown: false,
                }}
            />

            <stack.Screen
                name='SearchResult'
                component={SearchResult}
                options={{
                    headerShown: false,
                }}
            />

            <stack.Screen
                name='ResturantHomeScreen'
                component={ResturantHomeScreen}
                options={{
                    headerShown: false,
                }}
            />
        </stack.Navigator>
    )
}