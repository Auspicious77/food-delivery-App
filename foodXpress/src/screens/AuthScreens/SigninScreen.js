import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { COLORS, parameters } from '../global/Styles'
import { Icon } from 'react-native-elements'
import Header from '../../components/Header'

export default function SigninScreen() {
  return (
    <View style= {styles.container}>
    <Header tittle = "My Account"/> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: parameters.headerHeight,
        backgroundColor: COLORS.button
    },
    headertext: {
        color: COLORS.headertxt,
        fontSize: 22,
        fontWeight: '700',
        marginLeft: 60,
        textAlign: 'center',
        marginVertical: 10
    }
})