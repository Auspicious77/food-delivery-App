import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from "@rneui/themed";
import MyAccount from '../screens/HomeScreens/MyAccount';
import MyOrder from '../screens/HomeScreens/MyOrder';
import Homescreen from '../screens/HomeScreens/Homescreen';
import { COLORS } from '../global/Styles';
import SearchScreens from '../screens/HomeScreens/SearchScreens';



const tabs = createBottomTabNavigator();

export default function RootClientTabs(){
    <tabs.Navigator
    tabBarOptions = {{
        activeTintColor: COLORS.button
    }}
    
    >
        <tabs.Screen
            name='Homescreen'
            component={Homescreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => {
                    <Icon
                        name='home'
                        type='material'
                        color={color}
                        size={size}
                    />
                }
            }}
        />
        
        <tabs.Screen
            name='SearchScreens'
            component={SearchScreens}
            options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({color, size}) => {
                    <Icon
                        name='search'
                        type='material'
                        color={color}
                        size={size}
                    />
                }
            }}
        />

<tabs.Screen
            name='MyOrder'
            component={MyOrder}
            options={{
                tabBarLabel: 'My Order',
                tabBarIcon: ({color, size}) => {
                    <Icon
                        name='view-list'
                        type='material'
                        color={color}
                        size={size}
                    />
                }
            }}
        />

<tabs.Screen
            name='MyAccount'
            component={MyAccount}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => {
                    <Icon
                        name='search'
                        type='material'
                        color={color}
                        size={size}
                    />
                }
            }}
        />
    </tabs.Navigator>
}
