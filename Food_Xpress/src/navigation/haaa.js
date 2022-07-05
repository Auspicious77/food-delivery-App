import React from "react";

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
      height: 90,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.95,
      elevation: 21,
    },
  };
  export default function Tabs() {
    return (
        <Tab.Screen
          name="Homescreen"
          component={Homescreen}
          options={{
            title: null,
            showLabel: true,
            headerShown: false,
            keyboardHidesTabBar: true,
            tabBarStyle: { position: 'absolute', bottom: 0 }
          }}
        />
  
        <Tab.Screen
          name="ClientStack"
          component={ClientStack}
          options={{
            title: null,
            showLabel: true,
            headerShown: false,
            keyboardHidesTabBar: true,
  
  
          }}
        />
  
  
  
        <Tab.Screen
          name="MyOrder"
          component={MyOrder}
          options={{
            title: null,
            showLabel: true,
            headerShown: false,
            keyboardHidesTabBar: true,
  
  
          }}
        />
  
        <Tab.Screen
          name="MyAccount"
          component={MyAccount}
          options={{
            title: null,
            showLabel: true,
            headerShown: false,
            keyboardHidesTabBar: true,
  
  
          }}
        />
  
  
      </Tab.Navigator>
    );
  }