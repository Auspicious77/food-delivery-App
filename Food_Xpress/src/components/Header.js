import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { COLORS, parameters } from '../global/Styles'
import { Icon } from "@rneui/themed";

export default function Header({tittle, name}) {
  return (
    <View style= {styles.container}>
       <View style={{marginLeft: 20,  marginVertical: 10}}>
        <Icon
            name = {name}
            color={COLORS.headertxt}
            size={28}
            onPress={()=>{}}
        />
        </View>
        <View>
            <Text style={styles.headertext}>{tittle}</Text>
        </View>
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
        marginLeft: 100,
        marginVertical: 10
    }
})