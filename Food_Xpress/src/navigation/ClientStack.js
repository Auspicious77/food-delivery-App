import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreens from '../screens/HomeScreens/SearchScreens';
import SearchResult from '../screens/HomeScreens/SearchResult';
import ResturantHomeScreen from '../screens/HomeScreens/ResturantHomeScreen';
import MenuProductScreen from '../screens/HomeScreens/MenuProductScreen'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import PreferenceScreen from '../screens/HomeScreens/PreferenceScreen';

const stack = createNativeStackNavigator();

export default function ClientStack({ navigation, route }) {
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route)
        if (routeName == "ResturantHomeScreen" || "MenuProductScreen") {
            navigation.setOptions({ tabBarVisible: false })
        } else {
            navigation.setOptions({ tabBarVisible: true })

        }
    },
        [navigation, route])
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

            <stack.Screen
                name='MenuProductScreen'
                component={MenuProductScreen}
                options={{
                    headerShown: false
                }}
            />

            <stack.Screen
                name='PreferenceScreen'
                component={PreferenceScreen}
                options={{
                    headerShown: false
                }}
            />
        </stack.Navigator>
    )
}