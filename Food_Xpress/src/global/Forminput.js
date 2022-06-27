import {View, Text, TextInput} from 'react-native';
import React from 'react';
import { COLORS } from './Styles';

export default function FormInput({
  labelText = '',
  
  placeholderText = '',
  onChangeText = null,
  value = null,
  multiline = null,
  numberOfLines = null,
  keyboardType,
  secureTextEntry,
  ...more
}) {
  return (
    <View style={{width: '100%', marginBottom: 20}}>
      <Text style={{color: COLORS.black}}>{labelText}</Text>
      <TextInput
        style={{
          padding: 10,
          borderColor: COLORS.button ,
          borderWidth: 1,
          width: '100%',
          borderRadius: 11,
          marginTop: 10,
          color: COLORS.black,
        }}
        numberOfLines={numberOfLines}
        placeholder={placeholderText}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor= {COLORS.black+60}
        multiline={multiline}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        {...more}
      />
    </View>
  );
}
