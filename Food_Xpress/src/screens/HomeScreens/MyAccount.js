import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function MyAccount() {
  return (
    <View style= {styles.conatiner}>
      <Text>MyAccount</Text>
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