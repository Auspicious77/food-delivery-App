import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SearchComponent from '../../components/SearchComponent'

export default function SearchScreens({navigation}) {
  return (
    <View style={styles.conatiner}>
      <SearchComponent navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  }
})