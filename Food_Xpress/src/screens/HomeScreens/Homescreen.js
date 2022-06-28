import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Homeheader from '../../components/Homeheader'




export default function Homescreen() {
  return (
    <View style={styles.container}>
   <Homeheader/>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})