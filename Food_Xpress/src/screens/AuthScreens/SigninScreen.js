import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { COLORS, parameters } from '../global/Styles'
import { Icon } from 'react-native-elements'
import Header from '../../components/Header'

export default function SigninScreen() {
  return (
    <View style= {styles.container}>
    <Header tittle = "My Account" name='arrow-back'/> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       flex: 1
    },
 
    
})