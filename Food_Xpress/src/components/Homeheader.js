import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Icon, withBadge } from '@rneui/themed'
import { COLORS, parameters } from '../global/Styles'


export default function Homeheader({navigation}) {
    const BadgeIcon = withBadge(0)(Icon)
  return (
    <View style = {styles.header}>
      <View style = {{alignItems: 'center', justifyContent: 'center', marginLeft: 15}}>
        <Icon 
            type='material'
            name='menu'
            color={COLORS.white}
            size = {32}
            onPress = {()=> {
              console.log("Pressed")
            }}
        />
      </View>
      
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: COLORS.white, fontSize: 25, fontWeight: 'bold'}}>FoodXpress</Text>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 15}}>
        <BadgeIcon
            type = 'material-community'
            name= 'cart'
            size = {35}
            color = {COLORS.white}
        />
      </View>
     
    </View>
  )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.button,
        height: parameters.headerHeight,
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    }
})