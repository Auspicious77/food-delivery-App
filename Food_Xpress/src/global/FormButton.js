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
        borderRadius: 11,
        height: 45,
        borderWidth: 1,
        borderColor: COLORS.button,
        ...style,
      }}
      onPress={handleOnPress}
      {...more}
    >

      <Text style={{
        textAlign: 'center',
        fontSize: 18,
        color: isPrimary ? COLORS.white : COLORS.button
      }}>{labelText}</Text>

    </TouchableOpacity>
  )
}