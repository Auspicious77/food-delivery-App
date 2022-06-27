import { View, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import { COLORS } from './Styles'

export default function FormButton({
  labelText = "",
  handleOnPress = null,
  style,
  isPrimary = true,
  ...more
}) {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        backgroundColor: isPrimary ? COLORS.button : COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 11,
        ...style,
      }}
      onPress={handleOnPress}
      {...more}
    >

      <Text style={{
        textAlign: 'center',
        fontSize: 18,
        color: isPrimary ? COLORS.white : COLORS.blue
      }}>{labelText}</Text>

    </TouchableOpacity>
  )
}