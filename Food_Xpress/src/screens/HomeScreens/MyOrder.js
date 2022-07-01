import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MyOrder() {
  return (
    <View style={styles.conatiner}>
      <Text>MyOrder</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    conatiner: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })