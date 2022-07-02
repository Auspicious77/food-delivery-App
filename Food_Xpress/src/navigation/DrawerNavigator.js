import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { Icon } from "@rneui/themed";
import { COLORS } from '../global/Styles';
import DrawerContent from '../components/DrawerContent';
import Tabs from './Tabs';
import BusinessConsole from '../screens/HomeScreens/BusinessConsole';
import Homescreen from '../screens/HomeScreens/Homescreen';


const drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <drawer.Navigator>
          <drawer.Screen
                name='Tabs'
                component={Tabs}
                options={{
                    title: 'Client',
                    drawerIcon: ({focused, size}) => ( 
                    <Icon 
                        type='material'
                        name='home'
                        color={focused? '#7cc': COLORS.grey2}
                        size={size}
                    />
                    )
                }}
            />

            
          <drawer.Screen
                name='BusinessConsole'
                component={BusinessConsole}
                options={{
                    title: 'Business console',
                    drawerIcon: ({focused, size}) => 
                    <Icon 
                        type='business'
                        name='home'
                        color={focused? '#7cc': COLORS.grey2}
                        size={size}
                    />
                }}
            />
        </drawer.Navigator>
    )
}